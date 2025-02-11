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
  console.log(element);

  if (element) {
    const rect = element.getBoundingClientRect();
    highlightStyle.value = {
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
    };
    isVisible.value = true;
  }
};

/** 隐藏蒙层 */
const hide = () => {
  isVisible.value = false;
  highlightStyle.value = {};
};

defineExpose<IMask>({
  show,
  hide,
});

</script>

<template>
  <div v-if="isVisible" class="mask-container">
    <div class="mask"></div>
    <div class="highlight-box" :style="highlightStyle" />
  </div>
</template>

<style scoped>
.mask-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
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
  pointer-events: auto;
}
</style>
