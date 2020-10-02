import * as React from 'react';
interface IProps {
    ilustration?: string;
    size?: 'small' | 'normal' | 'large';
    title?: string;
    description?: string;
}
export declare class EmptyState extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
