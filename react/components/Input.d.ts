import * as React from 'react';
interface IProps {
    value?: string;
    label?: string;
    maxLength?: number;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    inlineLabel?: boolean;
    onChange(newValue: string): void;
}
interface IState {
    value: string;
    invalid: boolean;
}
export declare class Input extends React.Component<IProps, IState> {
    constructor(props: IProps);
    htmlId: string;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export {};
