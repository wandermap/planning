<template>
  <section>
    <!-- タイトル -->
    <div class="is-size-4 has-text-weight-bold">選択問題</div>
    <!-- 大問 -->
    <!-- 小問 -->
    <div v-for="(item, index) in quizlist" :key="index" class="box">
      <div>
        <!-- 問題番号 -->
        <b>第{{ item.id }}問</b>
        <!-- 問題文 -->
        <div>{{ item.question }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
//   vueインスタンス
// var app = new Vue({
export default Vue.extend({
  //   el: '#app',
  data() {
    return {
      message: 'Hello Vue!',
      quizlist: [
        {
          id: 1,
          question: 'お酢に卵を殻ごといれると卵はどうなるでしょう？',
          choice_a: '透明な卵になる',
          choice_b: '鏡のようになんでもうつる卵になる',
          choice_c: '卵が溶けてなくなる',
          choice_d: '卵が石のように堅くなる',
          answer: 'choice_a',
          commentary:
            'たまごのカラは「炭酸カルシウム」というものでできているので、お酢につけるとカラがとける、というわけ！また、お酢がたまごの中に入ってくるので、たまごはもとの大きさよりも少し大きくなるんだよ！お酢にはカルシウムをとかす力があるから、ふだんは食べないものにふくまれるカルシウムも食べることができるんだ！',
        },
        {
          id: 2,
          question: 'リンカーンは大統領になる前は何をしていたでしょうか？',
          choice_a: 'プロ野球選手',
          choice_b: '猟師',
          choice_c: 'レスラー',
          choice_d: 'タクシー運転手',
          answer: 'choice_c',
          commentary:
            'リンカーンはよく知られているように身長が193cmもあり、これは歴代米国大統領の中で一番高い。その肉体は幼少期からの苛酷な労働で逞しく鍛えられており、若き日の選挙活動の中において、「彼の対立候補がもっとも恐れたのは、彼の政策ではなく、その強く大きな肉体だった」とまで言われたのだ。',
        },
        {
          id: 3,
          question:
            '飛行機の中で食べるように日本で作られた野菜があります。その野菜はどれでしょう？',
          choice_a: 'ミニトマト',
          choice_b: 'パプリカ',
          choice_c: 'アボカド',
          choice_d: 'ズッキーニ',
          answer: 'choice_a',
          commentary:
            '欧米路線では機内食にカットした大きなトマトを使うと、果肉から染み出た水分で他の野菜が傷んでしまうため、切らずにそのまま料理に使えて、彩りの良いミニトマトが使われていました。搭乗時、それを見て感激した日本の農業関係者が栽培を始めたところ「かわいい」「食べやすい」と好評となり、昭和50年代後半頃から国内で定着していったといわれています。',
        },
      ],
    }
  },
  //   methods: {
  //     good() {
  //       const audio = new Audio('../sound/good.mp3')
  //       audio.play()
  //     },
  //     bad() {
  //       const audio = new Audio('../sound/bad.mp3')
  //       audio.play()
  //     },
  //     judge(p, a) {
  //       if (p === a) {
  //         const audio = new Audio('../sound/good.mp3')
  //         console.log(p, a)
  //         audio.play()
  //       } else {
  //         const audio = new Audio('../sound/bad.mp3')
  //         console.log(p, a)
  //         audio.play()
  //       }
  //     },
  //   },
})
</script>
