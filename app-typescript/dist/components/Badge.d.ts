import * as React from 'react';
interface IProps {
    text?: string;
    type?: 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';
    style?: 'round' | 'square';
    children?: React.ReactNode;
}
export declare class Badge extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
