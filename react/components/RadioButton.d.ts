import * as React from 'react';
interface IOption {
    value: any;
    label: string;
    disabled?: boolean;
    icon?: string;
}
interface IProps {
    value: any;
    options: Array<IOption>;
    labelSide?: 'left' | 'right';
    onChange(nextValue: string): void;
}
export declare class RadioButton extends React.PureComponent<IProps> {
    constructor(props: IProps);
    htmlId: string;
    handleChange(value: string): void;
    render(): JSX.Element[];
}
export {};
