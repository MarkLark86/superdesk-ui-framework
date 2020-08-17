import * as React from 'react';
interface IProps {
    checked: boolean;
    label?: {
        text: string;
        side?: 'left' | 'right';
    };
    disabled?: boolean;
    onChange(nextValue: boolean): void;
}
export declare class Checkbox extends React.Component<IProps> {
    constructor(props: IProps);
    htmlId: string;
    handleChange(): void;
    handleLabel(text: string): JSX.Element;
    render(): JSX.Element;
}
export {};
