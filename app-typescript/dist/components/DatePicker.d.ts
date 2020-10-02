import * as React from 'react';
import { CalendarProps } from 'primereact/calendar';
interface IDatePicker {
    value: Date | null;
    onChange(valueNext: Date | null): void;
    disabled?: boolean;
    shortcuts?: Array<{
        days: number;
        label: string;
    }>;
}
interface IState {
    value: CalendarProps['value'];
    valid: boolean;
}
export declare class DatePicker extends React.PureComponent<IDatePicker, IState> {
    private instance;
    hidePopupOnScroll: () => void;
    constructor(props: IDatePicker);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IDatePicker): void;
    render(): JSX.Element;
}
interface IDatePickerISO {
    value: string;
    onChange(value: string): void;
    disabled?: boolean;
    shortcuts?: Array<{
        days: number;
        label: string;
    }>;
}
export declare class DatePickerISO extends React.PureComponent<IDatePickerISO> {
    render(): JSX.Element;
}
export {};
