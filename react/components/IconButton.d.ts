import * as React from 'react';
interface IProps {
    id?: string;
    icon?: string;
    ariaValue: string;
    onClick(event: React.MouseEvent<HTMLAnchorElement>): void;
}
export declare class IconButton extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
