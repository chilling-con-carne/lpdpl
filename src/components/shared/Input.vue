<template>
  <input
    :type="props.type"
    :class="'border-b border-solid border-gray-600 pb-1 ' + props.class"
    :value="props.model"
    :placeholder="props.placeholder"
    @input="updateValue"
  />
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

let props = defineProps<{
  type: string;
  class?: string;
  model: any;
  placeholder: string;
}>();

const updateValue = (event: any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style></style>
