<template>
  <div class="flex flex-column flex-center flex-space-evenly card card--light">
    <Upload @upload="upload"/>
    <slot></slot>
    <button class="button" :disabled="disabled" @click.prevent="roll">
      <span v-if="isFirstRoll">Roll</span>
      <span v-else>Roll Again?</span>
    </button>
  </div>
</template>

<script>
import Upload from './upload';

export default {
  components: {Upload},
  props: {
    selected: String,
    disabled: Boolean,
    isFirstRoll: Boolean
  },
  emits: ['upload', 'roll'],
  methods: {
    upload(event) {
      this.$emit('upload', event);
    },
    roll() {
      this.$emit('roll');
    }
  }
};
</script>
