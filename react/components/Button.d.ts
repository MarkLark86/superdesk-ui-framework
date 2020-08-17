import * as React from 'react';
interface IButtonBase {
    id?: string;
    theme?: 'light' | 'dark';
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    size?: 'small' | 'normal' | 'large';
    children?: never;
    icon?: string;
    disabled?: boolean;
    iconOnly?: boolean;
    onClick(): void;
    'data-test-id'?: string;
}
interface IPropsButton extends IButtonBase {
    text: string;
    expand?: boolean;
    style?: 'filled' | 'hollow' | 'text-only';
    shape?: 'square' | 'round';
}
export declare class Button extends React.PureComponent<IPropsButton> {
    render(): JSX.Element;
}
export {};
