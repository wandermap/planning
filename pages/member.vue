<template>
  <section class="section">
    <div class="is-size-4 has-text-weight-bold">メンバー管理</div>
    <b-button type="is-primary " @click="showModal = true">追加</b-button>

    <b-table
      :data="isEmpty ? [] : data"
      :striped="true"
      :narrowed="true"
      :hoverable="true"
      :mobile-cards="true"
      class="mt-2"
    >
      <b-table-column
        field="id"
        label="ID"
        width="40"
        numeric
        header-class="has-background-primary-light"
        v-slot="props"
      >
        {{ props.row.id }}
      </b-table-column>

      <b-table-column
        field="last_name"
        label="姓"
        header-class="has-background-primary-light"
        v-slot="props"
      >
        {{ props.row.last_name }}
      </b-table-column>

      <b-table-column
        field="first_name"
        label="名"
        header-class="has-background-primary-light"
        v-slot="props"
      >
        {{ props.row.first_name }}
      </b-table-column>

      <b-table-column
        field="date"
        label="Date"
        width="100"
        header-class="has-background-primary-light"
        cell-class="has-text-right"
        v-slot="props"
      >
        {{ new Date(props.row.date).toLocaleDateString() }}
      </b-table-column>

      <b-table-column
        label="Gender"
        header-class="has-background-primary-light"
        v-slot="props"
      >
        <span>
          <b-icon
            pack="fas"
            :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"
          >
          </b-icon>
          {{ props.row.gender }}
        </span>
      </b-table-column>

      <b-table-column
        field="Edit"
        label="Edit"
        header-class="has-background-primary-light"
        v-slot="props"
      >
        <b-button
          class="fas fa-edit"
          v-model="props.row.id"
          @click="showModal = true"
        ></b-button>
      </b-table-column>
    </b-table>

    <!-- モーダル -->
    <b-modal
      v-model="showModal"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">メンバー追加</p>
          <button type="button" class="delete" @click="showModal = false" />
        </header>

        <section class="modal-card-body">
          <b-field label="姓">
            <b-input
              v-model="last_name"
              type="text"
              class="center"
              placeholder="A"
            >
            </b-input>
          </b-field>

          <b-field label="名">
            <b-input
              v-model="fast_name"
              type="text"
              class="center"
              placeholder="A"
            >
            </b-input>
          </b-field>

          <div class="block">
            <b-radio v-model="radio" name="gender" native-value="Male">
              Male
            </b-radio>
            <b-radio v-model="radio" name="gender" native-value="Female">
              Female
            </b-radio>
          </div>
        </section>

        <footer class="modal-card-foot">
          <b-button label="キャンセル" @click="showModal = false" />
          <b-button label="登録" type="is-primary" @click="addMember" />
        </footer>
      </div>
    </b-modal>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Buefy from 'buefy'
export default Vue.extend({
  data() {
    return {
      data: [
        {
          id: 1,
          first_name: 'Jesse',
          last_name: 'Simmons',
          date: '2016-10-15 13:43:27',
          gender: 'Male',
        },
        {
          id: 2,
          first_name: 'John',
          last_name: 'Jacobs',
          date: '2016-12-15 06:00:53',
          gender: 'Male',
        },
        {
          id: 3,
          first_name: 'Tina',
          last_name: 'Gilbert',
          date: '2016-04-26 06:26:28',
          gender: 'Female',
        },
        {
          id: 4,
          first_name: 'Clarence',
          last_name: 'Flores',
          date: '2016-04-10 10:28:46',
          gender: 'Male',
        },
        {
          id: 5,
          first_name: 'Anne',
          last_name: 'Lee',
          date: '2016-12-06 14:38:38',
          gender: 'Female',
        },
      ],
      showModal: false,
      name: '',
      fast_name: '',
      last_name: '',
      note: '',
      radio: 'Male',
    }
  },
  methods: {
    addMember() {
      const len = this.data.length + 1
      this.data.push({
        id: len,
        first_name: this.fast_name,
        last_name: this.last_name,
        date: '2016-10-15 13:43:27',
        gender: this.radio,
      })
      this.name = ''
      this.showModal = false
    },

    confirm(): any {
      this.$buefy.dialog.confirm({
        message: 'クラス' + this.name + 'を削除しますか？',
        onConfirm: () => this.$buefy.toast.open('作成しました'),
      })
    },
  },
})
</script>

<style scoped>
.card {
  border: solid thin lightgray;
}
</style>
