<template>
  <div class="flex flex-column flex-center flex-middle container">
    <div class="flex flex-column flex-center flex-middle">
      <Header/>
    </div>
    <div class="flex flex-row flex-center flex-middle">
      <slot name="left"></slot>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header';

export default {
  name: 'Layout',
  components: {
    Header
  }
};
</script>
