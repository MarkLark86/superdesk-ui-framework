import * as React from 'react';
interface IProps {
    orientation?: 'horizontal' | 'vertical';
    children: React.ReactNode;
}
export declare class CheckGroup extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
