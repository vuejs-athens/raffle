<template>
  <Layout>
    <template #left>
      <raffle
          :is-first-roll="isFirstRoll"
          :disabled="disabledRaffle"
          @upload="onUpload"
          @roll="onRoll"
      >
        <div v-if="result" id="raffle-placeholder" class="winner">
          <p>And the winner is...</p>
          <p v-text="result"></p>
        </div>
      </raffle>
    </template>
    <template #right>
      <Results :results="results" :prizes="prizes"/>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/layout';
import Raffle from '@/components/raffle.vue';
import Results from '@/components/results';
import {uploadFile, getRandomEntry, setDeceleratingTimeout} from '@/services/raffle';
import {getPrizes} from '@/services/prizes';

export default {
  components: {
    Layout,
    Results,
    Raffle
  },
  data() {
    return {
      result: undefined,
      isFirstRoll: true,
      entrants: [],
      results: [],
      prizes: getPrizes()
    };
  },
  computed: {
    disabledRaffle() {
      return this.prizes.length === 0;
    }
  },
  methods: {
    setEntrants(names) {
      this.entrants = names;
    },
    setResult() {
      this.result = getRandomEntry(this.entrants);
    },
    onUpload(file) {
      uploadFile(file).then(this.setEntrants);
    },
    onRoll() {
      if (this.prizes.length === 0) return;
      this.onRollStart();
      setDeceleratingTimeout(this.setResult, 10, 30, this.onRollEnd);
    },
    onRollStart() {
      this.result = undefined;
    },
    onRollEnd() {
      const result = {
        ...this.prizes[0],
        name: this.result,
        id: this.result && this.result.trim().replace(' ', '_')

      };
      this.results.push(result);
      this.isFirstRoll = this.results.length <= 0;
      this.entrants = this.entrants.filter(name => name !== this.result);
      this.prizes.shift();
    }
  }
};
</script>

<style src="./components/style.scss" lang="scss"/>
