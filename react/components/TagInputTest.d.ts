import * as React from 'react';
interface IProps {
    items: Array<any>;
    keyValue: string;
    minLength?: number;
}
interface IState {
    selectedItem: any;
    filteredItems: any;
}
export declare class TagInputTest extends React.Component<IProps, IState> {
    constructor(props: IProps);
    searchItem(event: any): void;
    itemTemplate(item: any): JSX.Element;
    handleItem(e: any): void;
    render(): JSX.Element;
}
export {};