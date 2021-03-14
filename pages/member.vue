<template>
  <section class="section">
    <b class="is-size-4">メンバー管理</b>

    <b-table
      :data="isEmpty ? [] : data"
      :striped="true"
      :narrowed="true"
      :hoverable="true"
      :mobile-cards="true"
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
        field="first_name"
        label="First Name"
        header-class="has-background-primary-light"
        v-slot="props"
      >
        {{ props.row.first_name }}
      </b-table-column>

      <b-table-column
        field="last_name"
        label="Last Name"
        header-class="has-background-primary-light"
        v-slot="props"
      >
        {{ props.row.last_name }}
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
    </b-table>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
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
    }
  },
})
</script>

<style scoped>
.card {
  border: solid thin lightgray;
}
</style>
