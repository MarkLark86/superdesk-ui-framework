import * as React from 'react';
interface IProps {
    name?: string;
    size?: 'small' | 'big';
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'light';
    className?: string;
    ariaHidden?: boolean;
}
export declare class Icon extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
