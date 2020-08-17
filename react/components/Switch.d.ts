import * as React from 'react';
interface IProps {
    value: boolean;
    disabled?: boolean;
    onChange(nextValue: boolean): void;
}
export declare class Switch extends React.PureComponent<IProps> {
    constructor(props: IProps);
    onClick(): void;
    render(): JSX.Element;
}
export {};
