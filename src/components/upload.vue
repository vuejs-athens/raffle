<template>
  <transition name="fade">
    <div v-if="hasProgressBar" class="flex flex-column flex-space-evenly full-width">
      <div class="upload" @dragenter.prevent @dragover.prevent @dragend.prevent @drop.prevent="upload">
        <img :src="uploadIcon" alt="uploadSvgIcon">
        <progress class="progress full-width" max="100" :value="progress"/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ['upload'],
  data() {
    return {
      hasProgressBar: true,
      interval: undefined,
      progress: 0,
      uploadIcon: require('./upload.svg')
    };
  },
  methods: {
    showProgress() {
      this.interval = setInterval(() => {
        this.progress += 10;
        if (this.progress === 100) {
          clearInterval(this.interval);
          setTimeout(() => {
            this.hasProgressBar = false;
          }, 350);
        }

      }, 200);
    },
    upload({dataTransfer: {files: [file]}}) {
      this.$emit('upload', file);
      this.showProgress();
    }
  }
};
</script>
