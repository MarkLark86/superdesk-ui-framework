import * as React from 'react';
interface IProps {
    items: Array<any>;
    keyValue?: string;
    minLength?: number;
    label?: string;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    inlineLabel?: boolean;
    onChange(newValue: string): void;
}
interface IState {
    selectedItem: any;
    filteredItems: any;
    invalid: boolean;
}
export declare class Autocomplete extends React.Component<IProps, IState> {
    constructor(props: IProps);
    htmlId: string;
    searchItem(event: any): void;
    itemTemplate(item: any): JSX.Element;
    handleChange(event: {
        originalEvent: Event;
        value: any;
    }): void;
    render(): JSX.Element;
}
export {};
