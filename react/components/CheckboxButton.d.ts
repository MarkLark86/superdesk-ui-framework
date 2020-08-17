import * as React from 'react';
interface IProps {
    checked: boolean;
    label: {
        text: string;
    };
    icon?: string;
    iconOnly?: boolean;
    disabled?: boolean;
    onChange(nextValue: boolean): void;
}
export declare class CheckboxButton extends React.PureComponent<IProps> {
    constructor(props: IProps);
    htmlId: string;
    handleChange(): void;
    render(): JSX.Element;
}
export {};
