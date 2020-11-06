import * as React from 'react';
import { LocaleSettings, CalendarProps } from 'primereact/calendar';
export declare type DatePickerLocaleSettings = Omit<LocaleSettings, 'today' | 'clear'>;
interface IDatePickerBase {
    disabled?: boolean;
    dateFormat: string;
    shortcuts?: Array<{
        days: number;
        label: string;
    }>;
    locale?: DatePickerLocaleSettings;
}
interface IDatePicker extends IDatePickerBase {
    value: Date | null;
    onChange(valueNext: Date | null): void;
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
interface IDatePickerISO extends IDatePickerBase {
    value: string;
    onChange(value: string): void;
}
export declare class DatePickerISO extends React.PureComponent<IDatePickerISO> {
    render(): JSX.Element;
}
export {};
