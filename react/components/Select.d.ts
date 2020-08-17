import * as React from 'react';
interface ISelect {
    value?: string;
    label?: string;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    inlineLabel?: boolean;
    onChange(newValue: string): void;
}
interface IState {
    value: string;
    invalid: boolean;
}
declare class Select extends React.Component<ISelect, IState> {
    constructor(props: ISelect);
    htmlId: string;
    handleChange(event: React.ChangeEvent<HTMLSelectElement>): void;
    render(): JSX.Element;
}
interface IOption {
    value?: string;
}
declare class Option extends React.PureComponent<IOption> {
    render(): JSX.Element;
}
export { Select, Option };
