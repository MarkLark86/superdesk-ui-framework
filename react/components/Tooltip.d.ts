import * as React from 'react';
interface IProps {
    text: string;
    flow?: 'top' | 'left' | 'right' | 'down';
}
export declare class Tooltip extends React.PureComponent<IProps> {
    htmlId: string;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
