import * as React from 'react';
interface IBase {
    tooltipText?: string;
}
interface IImageAvatar extends IBase {
    imageUrl?: string;
}
interface ITextAvatar extends IBase {
    text: string;
}
export declare class AvatarContentText extends React.PureComponent<ITextAvatar> {
    render(): JSX.Element;
}
export declare class AvatarContentImage extends React.PureComponent<IImageAvatar> {
    render(): JSX.Element;
}
interface IPropsAvatarWrapper {
    size?: 'small' | 'medium' | 'large';
    statusIndicator?: {
        status: 'online' | 'offline';
        tooltipText?: string;
    };
    administratorIndicator?: {
        enabled: boolean;
        tooltipText?: string;
    };
    children: React.ReactNode;
    'data-test-id'?: string;
}
export declare class AvatarWrapper extends React.PureComponent<IPropsAvatarWrapper> {
    render(): JSX.Element;
}
export {};
