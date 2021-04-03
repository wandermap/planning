<template>
  <section class="section">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <section class="section has-text-centered">
      <div class="title">いじめは絶対に許されない</div>
      <div>という言葉についてどう思いますか？</div>
      <!-- グラフ -->
      <BarChart />
    </section>

    <section class="columns">
      <!-- 好き -->
      <div class="column">
        <b-message title="好き・賛成" type="is-success" :closable="false">
          <b-field label="">
            <b-input v-model="goodform" placeholder="" expanded></b-input>
            <p class="control">
              <b-button class="button is-success" @click="addGood"
                >投稿</b-button
              >
            </p>
          </b-field>
        </b-message>
        <b-message
          v-for="item in good"
          :key="item.id"
          type="is-success"
          :closable="false"
        >
          <div>
            <div class="flex-b pb-2">
              <div>
                投稿者：<b>{{ item.name }}</b>
              </div>
              <div>{{ item.date }}</div>
            </div>
            <div>{{ item.comment }}</div>
          </div>
        </b-message>
      </div>

      <!-- 嫌い -->
      <div class="column">
        <b-message title="嫌い・反対" type="is-danger" :closable="false">
          <b-field label="">
            <b-input v-model="badform" placeholder="" expanded></b-input>
            <p class="control">
              <b-button class="button is-danger" @click="addBad">投稿</b-button>
            </p>
          </b-field>
        </b-message>
        <b-message
          v-for="item in bad"
          :key="item.id"
          type="is-danger"
          :closable="false"
        >
          <div>
            <div class="flex-b pb-2">
              <div>
                投稿者：<b>{{ item.name }}</b>
              </div>
              <div>{{ item.date }}</div>
            </div>
            <div>{{ item.comment }}</div>
          </div>
        </b-message>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Buefy from 'buefy'
import moment from 'moment'
import { Bar } from 'vue-chartjs'

export default Vue.extend({
  extends: Bar,

  data() {
    return {
      goodform: '',
      badform: '',
      good: [
        {
          id: 1,
          name: 'ななし',
          date: '01/01/70 00:00:00',
          comment: 'その通り。絶対に許されないことだと思う ',
        },
        {
          id: 2,
          name: 'ななし',
          date: '01/01/70 00:00:00',
          comment: '・・・・・・だと思う ',
        },
      ],

      bad: [
        {
          id: 1,
          name: 'ななし',
          date: '01/01/70 00:00:00',
          comment: '結局、口だけ。大人社会にもいじめはある。ただの偽善',
        },
      ],

      chartdata: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: ['Data One'],
            backgroundColor: '#f87979',
            data: [40, 30],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },

  methods: {
    addGood() {
      const now = moment().format('YYYY/M/D日 HH:mm')
      const len = this.good.length + 1
      this.good.push({
        id: len,
        name: 'ななし',
        date: now,
        comment: this.goodform,
      })
      this.goodform = ''
    },

    addBad() {
      console.log('bad')
      const now = moment().format('YYYY/M/D日 HH:mm')
      const len = this.bad.length + 1
      this.bad.push({
        id: len,
        name: 'ななし',
        date: now,
        comment: this.badform,
      })
      this.badform = ''
    },
  },

  mounted(): void {
    // this.renderChart(this.chartdata, this.options)
  },
})
</script>

<style scoped>
.card {
  border: solid thin lightgray;
}
</style>
