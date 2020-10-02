import * as React from 'react';
interface IProps<T> {
    value: T;
    options: Array<{
        label: string;
        value: T;
        disabled?: boolean;
    }>;
    labelSide?: 'left' | 'right';
    onChange: (value: T) => void;
}
export declare class Radio<T> extends React.PureComponent<IProps<T>> {
    constructor(props: IProps<T>);
    handleChange(value: T): void;
    handleLabel(item: any): JSX.Element;
    render(): JSX.Element[];
}
export {};
