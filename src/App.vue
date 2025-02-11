<script setup>
import { ref, onMounted } from "vue";
import Mask from "./components/Mask.vue";

const currentIndex = ref(0);
const maskRef = ref(null);
const data = [
  {
    key: "step1",
  },
  {
    key: "step2",
  },
  {
    key: "step3",
  },
];

// 模拟多个step调用
const MockNodeTaskPlayer = () => {
  setInterval(() => {
    maskRef.value.show(data[currentIndex.value].key);
    currentIndex.value = (currentIndex.value + 1) % data.length;
  }, 1000);
};

onMounted(() => {
  MockNodeTaskPlayer();
});
</script>

<template>
  <div>
    <h1>Vue 语义化标注 + 屏幕蒙层</h1>
    <div class="buttons">
      <button data-tag="step1" class="lightButton">按钮 1</button>
      <button data-tag="step2" class="lightButton">按钮 2</button>
      <button data-tag="step3" class="lightButton">按钮 3</button>
    </div>
    <Mask ref="maskRef" />
  </div>
</template>

<style>
.buttons {
  display: flex;
  gap: 20px;
}
.lightButton {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
