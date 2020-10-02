import * as React from 'react';
interface IProps {
    icon?: string;
    theme?: 'light' | 'dark';
    type?: 'default' | 'primary' | 'highlight' | 'darker';
    onClick(): void;
}
export declare class NavButton extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
