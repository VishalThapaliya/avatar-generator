import { type AvatarOption } from "../types/types";

export const AVATAR_DATA: AvatarOption[] = [
    {
        id: 1,
        label: 'Avatar (Male)',
        value: 'avatar_male',
        url: `https://api.dicebear.com/7.x/avataaars/svg?seed=male-`
    },
    {
        id: 2,
        label: 'Avatar (Female)',
        value: 'avatar_female',
        url: `https://api.dicebear.com/7.x/avataaars/svg?seed=female-`
    },
    {
        id: 3,
        label: 'Adventure (Cartoon)',
        value: 'cartoon',
        url: `https://api.dicebear.com/7.x/adventurer/svg?seed=`
    },
    {
        id: 4,
        label: 'Croodles (Sketchy)',
        value: 'croodles',
        url: `https://api.dicebear.com/7.x/croodles/svg?seed=`
    },
    {
        id: 5,
        label: 'Botts (Robots)',
        value: 'robots',
        url: `https://api.dicebear.com/7.x/bottts/svg?seed=`
    },
    {
        id: 6,
        label: 'Pixel Art',
        value: 'pixel',
        url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=`
    },
    {
        id: 7,
        label: 'Portrait (Male)',
        value: 'portrait_male',
        url: `https://randomuser.me/api/portraits/men`
    },
    {
        id: 8,
        label: 'Portrait (Female)',
        value: 'portrait_female',
        url: `https://randomuser.me/api/portraits/women`
    },
];

export const DEFAULT_AVATAR = `https://picsum.photos/200/200?grayscale`;