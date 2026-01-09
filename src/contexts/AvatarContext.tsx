import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { type AvatarStyle, type AvatarContextState, type ToastMessage, type HistoryItem } from "../types/types";
import { AVATAR_DATA } from "../data/constants";

const AvatarContext = createContext<AvatarContextState | undefined>(undefined);

const LOADING_MESSAGES = [
    "Initializing DNA...",
    "Applying digital ink...",
    "Scanning style layers...",
    "Rendering persona...",
    "Finalizing pixels..."
];

export const useAvatarContext = () => {
    const context = useContext(AvatarContext);

    if(!context) {
        throw new Error('The useAvatarContext must be used within an AvatarProvider.');
    }
    return context;
};

interface AvatarProviderProps {
    children: React.ReactNode;
    addToast: (msg: string, type?:ToastMessage['type']) => void;
}

export const AvatarProvider: React.FC<AvatarProviderProps> = ({ children, addToast }) => {
    const [imgType, setImgType] = useState<AvatarStyle>('portrait_male');
    const [isGenerating, setIsGenerating] = useState(false);
    const [seed, setSeed] = useState<string>('avatarflow');
    const [loadingStatus, setLoadingStatus] = useState('');
    const [imgSrc, setImgSrc] = useState<string>('');
    const [history, setHistory] = useState<HistoryItem[]>(() => {
        const saved = localStorage.getItem('avatar_history');
        return saved ? JSON.parse(saved) : [];
    })

    // get url for avatar generation
    const getUrl = useCallback((style: AvatarStyle, currentSeed: string) => {
        const avatarObj = AVATAR_DATA.find(item => item.value === style);
        
        if(!avatarObj) return '';

        if(style === 'portrait_male' || style === 'portrait_female') {
            let numericSeed = 1;

            if(currentSeed) {
                numericSeed = (currentSeed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 99) + 1;
            }
            return `${avatarObj.url}/${numericSeed}.jpg`;
        } else {
            return `${avatarObj.url}${encodeURIComponent(currentSeed)}`;
        }
    }, []);

    // generate avatar
    const generateAvatar = useCallback(async () => {
        if(isGenerating) return;

        setIsGenerating(true);
        const newSeed = Math.random().toString(36).substring(7);
        setSeed(newSeed);

        // loop through messages
        for(let i = 0; i < LOADING_MESSAGES.length; i++) {
            setLoadingStatus(LOADING_MESSAGES[i]);
            await new Promise(resolve => setTimeout(resolve, 350));
        }

        const newUrl = getUrl(imgType, newSeed);
        setImgSrc(newUrl);
        setIsGenerating(false);
        setLoadingStatus('');

        const newItem: HistoryItem = {
            id: Date.now().toString(),
            url: newUrl,
            style: imgType,
            seed: newSeed
        };

        setHistory(prev => {
            const updated = [newItem, ...prev.filter(i => i.url !== newUrl)].slice(0, 10);
            localStorage.setItem('avatar_history', JSON.stringify(updated));
            return updated;
        })

    }, [imgType, getUrl, isGenerating]);

    const copyUrl = useCallback(() => {
        if(!imgSrc) return;

        navigator.clipboard.writeText(imgSrc)
            .then(() => addToast('Direct link copied!', 'success'))
            .catch(() => addToast('Clipboard error', 'error'));
    }, [imgSrc, addToast]);

    const downloadAvatar = useCallback(async () => {
        if(!imgSrc) return;

        try {
            addToast('Preparing download package...', 'info');
            const response = await fetch(imgSrc);
            const blob = await response.blob();
            console.log("Blob: ", blob);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `avatar=${seed}.png`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            addToast('Asset saved successfully', 'success');
        } catch (err) {
            window.open(imgSrc, '_blank');
        }
    }, [imgSrc, seed, addToast]);

    const restoreHistory = useCallback((item: HistoryItem) => {
        setImgType(item.style);
        setSeed(item.seed);
        setImgSrc(item.url);
        addToast('Restored from database', 'info');
    }, [addToast]);

    const clearHistory = useCallback(() => {
        setHistory([]);
        localStorage.removeItem('avatar_history');
        addToast('Archives cleared', 'info');
    }, [addToast]);

    useEffect(() => {
        setImgSrc(getUrl(imgType, seed));
    },[imgType, seed, getUrl]);
    
    
    const value: AvatarContextState = {
        imgSrc, imgType, seed, isGenerating, loadingStatus, setImgType, setSeed, generateAvatar, copyUrl, downloadAvatar, history, restoreHistory, clearHistory
    };

    return (
        <AvatarContext.Provider value={value}>
            {children}
        </AvatarContext.Provider>
    );
}