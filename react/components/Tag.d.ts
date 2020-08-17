/// <reference types="react" />
interface IProps {
    text: string;
    keyValue?: number;
    shade?: 'light' | 'darker' | 'highlight1' | 'highlight2';
    shape?: 'round' | 'square';
    onClick(): void;
}
export declare const Tag: ({ text, keyValue, shade, shape, onClick }: IProps) => JSX.Element;
export {};
