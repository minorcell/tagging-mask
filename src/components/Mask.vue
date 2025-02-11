<script setup lang="ts">
import { ref } from "vue";
import { Tagging } from "../utils/tagging";

type IMask = {
  /** 显示蒙层并高亮指定元素 */
  show(key: string): void;
  /** 隐藏蒙层 */
  hide(): void;
};

const isVisible = ref(false);
const highlightStyle = ref({});

/** 显示蒙层并高亮指定元素 */
const show = (key: string) => {
  const tagging = new Tagging(key);
  const element = tagging.getElement();

  if (element) {
    const rect = element.getBoundingClientRect();
    highlightStyle.value = {
      top: `${rect.top - 5}px`,
      left: `${rect.left - 5}px`,
      width: `${rect.width + 10}px`,
      height: `${rect.height + 10}px`,
    };
    isVisible.value = true;
  }
};

/** 隐藏蒙层 */
const hide = () => {
  isVisible.value = false;
  highlightStyle.value = {};
};

/** 阻止点击非高亮区域 */
const blockClick = (event: MouseEvent) => {
  event.stopPropagation();
  event.preventDefault();
};

defineExpose<IMask>({ show, hide });
</script>

<template>
  <div v-if="isVisible" class="mask-container" @click="blockClick">
    <div class="mask" />
    <div class="highlight-box" :style="highlightStyle" />
  </div>
</template>

<style scoped>
.mask-container {
  position: fixed;
  inset: 0;
  pointer-events: auto; /* 允许接收点击 */
  z-index: 999; /* 确保遮罩层在最上层 */
}

.mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
}

.highlight-box {
  position: absolute;
  background: transparent;
  box-shadow: 0 0 10px 5px rgba(255, 255, 0, 0.8);
  border-radius: 5px;
  pointer-events: auto; /* 允许高亮元素点击 */
  z-index: 10000; /* 确保高亮区域在遮罩层上方 */
}
</style>
