import React from 'react';
interface IProps {
    items: Array<any>;
    keyValue: string;
    minLength?: number;
}
interface IState {
    selectedItem: any;
    filteredItems: any;
}
export declare class Autocomplete extends React.Component<IProps, IState> {
    constructor(props: IProps);
    searchItem(event: any): void;
    itemTemplate(item: any): JSX.Element;
    render(): JSX.Element;
}
export {};
