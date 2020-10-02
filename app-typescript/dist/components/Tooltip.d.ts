import * as React from 'react';
interface IProps {
    text: string;
    tooltip?: {
        text: string;
        flow?: 'top' | 'left' | 'right' | 'down';
    };
    onClick(): void;
}
export declare class Tooltip extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
