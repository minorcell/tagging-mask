<script setup>
import { onMounted, ref } from "vue";
import Tagging from "../utils/tagging";

const highlights = ref([]);
const tagging = new Tagging();
const currentHighlight = ref(null);
const isMaskVisible = ref(true); // 控制蒙层显示

// 初始化高亮
onMounted(() => {
  highlights.value = tagging.findHighlights();
  currentHighlight.value = highlights.value[0]; // 默认高亮第一个
});

// 监听点击，切换下一个高亮
const handleNext = () => {
  const next = tagging.nextHighlight();
  if (next) {
    currentHighlight.value = next;
  } else {
    isMaskVisible.value = false; // 全部高亮完成，隐藏蒙层
  }
};
</script>

<template>
  <div v-if="isMaskVisible" class="mask-container">
    <!-- 黑色蒙层 -->
    <div class="mask" @click="(e) => e.stopPropagation()"></div>
    <!-- 高亮区域 -->
    <div
      v-if="currentHighlight"
      class="highlight-box"
      :style="{
        top: currentHighlight.top + 'px',
        left: currentHighlight.left + 'px',
        width: currentHighlight.width + 'px',
        height: currentHighlight.height + 'px',
      }"
      @click="handleNext"
    />
  </div>
</template>

<style scoped>
.mask-container {
  z-index: 999;
  position: fixed;
  inset: 0;
}

.mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  pointer-events: none;
}

.highlight-box {
  position: absolute;
  background: transparent;
  box-shadow: 0 0 10px 5px rgba(255, 255, 0, 0.8);
  border-radius: 5px;
  pointer-events: auto;
  cursor: pointer;
}
</style>
