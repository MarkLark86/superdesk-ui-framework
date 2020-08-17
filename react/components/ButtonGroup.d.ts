import * as React from 'react';
interface IProps {
    orientation?: 'horizontal' | 'vertical';
    spaces?: 'comfort' | 'compact';
    align?: 'left' | 'right' | 'center' | 'inline';
    padded?: boolean;
    children: React.ReactNode;
}
export declare class ButtonGroup extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
