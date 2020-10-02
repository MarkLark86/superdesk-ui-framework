import * as React from 'react';
interface IProps {
    checked: boolean;
    label: {
        text: string;
    };
    icon?: string;
    disabled?: boolean;
    onChange(nextValue: boolean): void;
}
export declare class CheckboxButton extends React.PureComponent<IProps> {
    constructor(props: IProps);
    handleChange(): void;
    render(): JSX.Element;
}
export {};
