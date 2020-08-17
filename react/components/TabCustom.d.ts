/// <reference types="react" />
interface ITabs {
    size?: 'normal' | 'large' | 'small';
    theme?: 'light' | 'dark';
    ariaLabel?: string;
    children: Array<any>;
    onClick(i: number): void;
}
interface ITabLabel {
    label: string;
    indexValue: number;
}
interface ITabContent {
    theme?: 'light' | 'dark';
    children: any;
    activePanel: number;
}
interface ITabPanel {
    indexValue: number;
    children: any;
}
export declare const TabLabel: ({ label }: ITabLabel) => JSX.Element;
export declare const Tabs: ({ size, theme, ariaLabel, children, onClick }: ITabs) => JSX.Element;
export declare const TabContent: ({ theme, children, activePanel }: ITabContent) => JSX.Element;
export declare const TabPanel: ({ children, indexValue }: ITabPanel) => JSX.Element;
export {};
