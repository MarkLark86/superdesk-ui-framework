import * as React from 'react';
interface IProps {
    value: string;
    onChange(valueNext: string): void;
    required?: boolean;
    disabled?: boolean;
}
export declare class TimePicker extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
