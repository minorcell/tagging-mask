<script setup>
import Masking from "./components/Masking.vue";
</script>

<template>
  <div>
    <h1>Vue 语义化标注 + 屏幕蒙层</h1>
    <div class="buttons">
      <button data-highlight="true" class="lightButton">按钮 1</button>
      <button data-highlight="true" class="lightButton">按钮 2</button>
      <button data-highlight="true" class="lightButton">按钮 3</button>
    </div>
    <Masking />
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
