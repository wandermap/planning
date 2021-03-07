<template>
  <section class="section columns">
    <div class="column center">
      <div class="title">
        <div class="">英単語タイピング</div>
        <div class="underber"></div>
      </div>
      {{ num }}/{{ len }}
      <div class="is-size-2">{{ question }}</div>

      <b-input
        v-if="!fin"
        v-model="form"
        size="is-large"
        class="center mt-2"
        autofocus
      ></b-input>
    </div>

    <div class="column is-4">
      <b-table :data="ens">
        <b-table-column field="ja" label="日本語" v-slot="props">
          {{ props.row.ja }}
        </b-table-column>
        <b-table-column field="en" label="英語" v-slot="props">
          <div v-if="props.row.result == '〇'">{{ props.row.en }}</div>
        </b-table-column>
        <b-table-column field="result" label="クリア" v-slot="props">
          {{ props.row.result }}
        </b-table-column>
      </b-table>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      ens: [
        { ja: 'りんご', en: 'apple', result: '' },
        { ja: 'みかん', en: 'orenge', result: '' },
        { ja: 'バナナ', en: 'banana', result: '' },
      ],
      question: '',
      answer: '',
      form: '',
      len: 0,
      num: 0,
      fin: false,
    }
  },
  mounted: function () {
    this.question = this.ens[this.num].ja
    this.answer = this.ens[this.num].en
    this.len = this.ens.length
  },
  watch: {
    form: function (e) {
      if (e == this.answer) {
        this.ens[this.num].result = '〇'
        this.form = ''
        if (this.num == this.len - 1) {
          this.num = this.len
          this.question = 'クリア！'
          this.fin = true
          return
        }
        this.num = this.num + 1
        this.question = this.ens[this.num].ja
        this.answer = this.ens[this.num].en
      }
    },
  },
})
</script>

<style scoped>
.title {
  position: relative;
}
.underber {
  width: 100%;
  height: 10px;
  position: absolute;
  bottom: 0;
  background-color: lightblue;
  z-index: -1;
}
</style>
