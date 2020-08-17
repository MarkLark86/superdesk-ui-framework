import * as React from 'react';
export interface IMenuItem {
    label: string;
    icon?: string;
    onSelect(): void;
}
export interface ISubmenu {
    type: 'submenu';
    label: string;
    icon?: string;
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}
export interface IMenuGroup {
    type: 'group';
    label?: string;
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
}
interface IMenu {
    label?: string;
    align?: 'left' | 'right';
    items: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    header?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    footer?: Array<IMenuItem | ISubmenu | IMenuGroup | 'divider'>;
    append?: boolean;
    children: React.ReactNode;
}
export declare const Dropdown: ({ items, header, footer, children, append, align, }: IMenu) => JSX.Element;
export {};
