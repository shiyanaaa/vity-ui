// index.d.ts
export declare class Modal {
    vm: {
        show(): void;
        hidden(): void
    } // vue3-App
    constructor(el: Element, params: {
        title?: string;
        visible?: boolean;
        renderContent?: string|(() => string);
        'onUpdate:visible'?: (value: boolean) => unknown;
    })
}
export default Modal;