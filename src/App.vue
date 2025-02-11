<script setup lang="ts">
import { ref, onMounted } from "vue";
import Mask from "./components/Mask.vue";
import { sleep } from "./utils/tools";

const currentIndex = ref(0);
const maskRef = ref<InstanceType<typeof Mask> | null>(null);

// Mock data of steps from NodeTaskPlayer
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
const playNextStep = async () => {

  if (!maskRef.value) return;

  maskRef.value.show(data[currentIndex.value].key);

  if (currentIndex.value === data.length - 1) {
    await sleep(1000);
    maskRef.value.hide();

    await sleep(1000);
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }

  setTimeout(playNextStep, 1000);
};

const MockNodeTaskPlayer = () => {
  playNextStep();
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

<style scoped>
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
