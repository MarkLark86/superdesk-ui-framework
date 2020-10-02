import * as React from 'react';
interface IProps {
    checked: boolean;
    label: {
        text: string;
        side?: 'left' | 'right';
    };
    disabled?: boolean;
    onChange(nextValue: boolean): void;
}
export declare class Checkbox extends React.Component<IProps> {
    constructor(props: IProps);
    handleChange(): void;
    handleLabel(): JSX.Element;
    render(): JSX.Element;
}
export {};
