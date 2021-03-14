<template>
  <section class="section">
    <b class="is-size-4">クラス管理</b>
    <!-- カード -->
    <div class="grid is-mobile">
      <article
        v-for="item in items"
        :key="item.id"
        class="card message is-primary mx-2 my-2"
      >
        <div class="message-header">
          <p>{{ item.name }}</p>
        </div>
        <div class="message-body">
          <b-icon :icon="item.icon" />
          **************
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      items: [
        { id: 1, name: 'A組', icon: 'google-classroom ' },
        { id: 2, name: 'B組', icon: 'google-classroom ' },
        { id: 3, name: 'C組', icon: 'google-classroom ' },
        { id: 4, name: 'D組', icon: 'google-classroom ' },
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
