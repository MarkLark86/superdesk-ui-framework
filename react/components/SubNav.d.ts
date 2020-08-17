import * as React from 'react';
interface IProps {
    color?: 'light' | 'darker' | 'blueGrey' | 'blueGreyDarker' | 'darkUi';
    zIndex?: number;
    theme?: 'light' | 'dark';
}
export declare class SubNav extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
