import * as React from 'react';
interface IProps {
    orientation?: 'horizontal' | 'vertical';
    grid?: boolean;
    align?: 'left' | 'right' | 'center';
}
export declare class CheckButtonGroup extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
