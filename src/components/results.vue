<template>
  <div class="card card--primary flex flex-column list">
    <div v-for="(result) in results" :key="result.id" class="list-item">
      <h3 v-text="result.name"></h3>
      <small v-text="result.content"></small><br>
      <small v-text="result.fulltext"></small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: Array
  }
};
</script>
