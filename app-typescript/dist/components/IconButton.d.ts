import * as React from 'react';
interface IProps {
    icon?: string;
    tooltip?: {
        text: string;
        flow?: 'top' | 'left' | 'right' | 'down';
    };
    onClick(): void;
}
export declare class IconButton extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
