import * as React from 'react';
interface IProps {
    text: string;
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    icon?: string;
}
export declare class IconLabel extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
