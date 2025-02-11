export default class Tagging {
    constructor() {
        this.highlightElements = [];
        this.currentIndex = 0;
        this.completed = false;
    }

    // 获取所有高亮元素
    findHighlights() {
        this.highlightElements = Array.from(document.querySelectorAll('[data-highlight="true"]'));
        this.currentIndex = 0; // 重新初始化索引
        this.completed = false; // 重置完成状态
        return this.getPositions();
    }

    // 获取高亮区域的坐标信息
    getPositions() {
        return this.highlightElements.map(el => {
            const rect = el.getBoundingClientRect();
            return {
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
                height: rect.height,
                element: el // 绑定元素
            };
        });
    }

    // 获取当前高亮元素
    getCurrentHighlight() {
        if (this.highlightElements.length === 0 || this.completed) return null;
        return this.highlightElements[this.currentIndex];
    }

    // 切换到下一个高亮
    nextHighlight() {
        if (this.highlightElements.length === 0 || this.completed) return null;

        this.currentIndex++;

        if (this.currentIndex >= this.highlightElements.length) {
            this.completed = true;
            return null;
        }

        return this.getPositions()[this.currentIndex];
    }
}
