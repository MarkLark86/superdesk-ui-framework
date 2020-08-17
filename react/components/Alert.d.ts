import * as React from 'react';
interface IProps {
    type?: 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    style?: 'filled' | 'hollow';
    size?: 'normal' | 'small';
    restoreIcon?: 'info' | 'help';
}
interface IState {
    open: boolean;
}
export declare class Alert extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    onToggle(): void;
    render(): JSX.Element;
}
export {};
