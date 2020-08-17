import * as React from 'react';
interface IMenuItem {
    id: string;
    label: string;
    route?: string;
}
interface IMenuGroup {
    label: string;
    items: Array<IMenuItem>;
}
interface IMenu {
    navClass?: string;
    groups: Array<IMenuGroup>;
    activeItemId: string;
    ariaLabel?: string;
    onSelect(id: string, route: string): void;
}
interface IState {
    active: string;
}
export declare class LeftMenu extends React.PureComponent<IMenu, IState> {
    constructor(props: IMenu);
    handleClick(id: string, route: string): void;
    render(): JSX.Element;
}
export {};
