export type AvatarStyle = 'avatar_male' | 'avatar_female' | 'cartoon' | 'croodles' | 'robots' | 'pixel' | 'portrait_male' | 'portrait_female';

export interface AvatarOption {
    id: number;
    label: string;
    value: AvatarStyle;
    url: string;
}

export interface HistoryItem {
    id: string;
    url: string 
    style: AvatarStyle; 
    seed: string;
}

export interface ToastMessage {
    id: string;
    message: string;
    type: 'success' | 'info' | 'error';
}

export interface AvatarContextState {
    imgSrc: string;
    imgType: AvatarStyle;
    seed: string;
    isGenerating: boolean;
    loadingStatus: string;
    history: HistoryItem[];
    setImgType: (type: AvatarStyle) => void;
    setSeed: (seed: string) => void;
    generateAvatar: () => void;
    copyUrl: () => void;
    downloadAvatar: () => void;
    restoreHistory: (item: HistoryItem) => void;
    clearHistory: () => void;
}