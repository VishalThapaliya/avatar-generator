import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { type AvatarStyle, type AvatarContextState, type ToastMessage } from "../types/types";
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
    }, [imgType, getUrl, isGenerating]);

    useEffect(() => {
        setImgSrc(getUrl(imgType, seed));
    },[imgType, seed, getUrl]);
    
    
    const value: AvatarContextState = {
        imgSrc, imgType, seed, isGenerating, loadingStatus, setImgType, setSeed, generateAvatar
    };

    return (
        <AvatarContext.Provider value={value}>
            {children}
        </AvatarContext.Provider>
    );
}