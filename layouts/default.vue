<template>
  <div>
    <link
      href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      rel="stylesheet"
    />
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item px-3" href="/planning">
          <b-icon icon="head-lightbulb" size="is-medium" />
          <!-- <img src="~assets/logo.png" /> -->
          <strong>Wander Map</strong>
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <!-- <div class="navbar-start">
          <a class="navbar-item"> Home </a>

          <a class="navbar-item"> Documentation </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div> -->

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">
                <strong>会員登録</strong>
              </a>
              <a class="button is-light"> <strong>ログイン</strong> </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 mx-2 my-2">
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },

        {
          title: 'クラス',
          icon: 'google-classroom ',
          to: { name: 'classroom' },
        },
        {
          title: 'メンバー',
          icon: 'google-classroom ',
          to: { name: 'member' },
        },
        {
          title: '英単語',
          icon: 'lightbulb',
          to: { name: 'english-typing' },
        },
        {
          title: '好きな言葉vs嫌いな言葉',
          icon: 'lightbulb',
          to: { name: 'word-battle' },
        },
        {
          title: '選択問題',
          icon: 'lightbulb',
          to: { name: 'quiz-select' },
        },
      ],
    }
  },
}
</script>

<style>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
}

aside {
  /* height: calc(100vh - 70px); */
  min-width: 150px;
  background: ghostwhite;
}

.section {
  padding: 1rem 1.5rem;
}

.center {
  text-align: center;
}

.center input {
  text-align: center;
}

.modal-card-foot {
  justify-content: flex-end;
}
</style>
