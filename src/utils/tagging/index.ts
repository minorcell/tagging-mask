export interface ITagging {
    /** 通过key值获取元素 */
    getElement(key: string): HTMLElement | null;
}

export class Tagging implements ITagging {
    key: string

    constructor(key: string) {
        if (!key) {
            throw new Error('Tagging key must not be empty');
        }
        this.key = key;
    }

    /** 通过 key 获取 HTML 元素 */
    public getElement(): HTMLElement | null {
        return document.querySelector<HTMLElement>(`[data-tag="${this.key}"]`);
    }
}