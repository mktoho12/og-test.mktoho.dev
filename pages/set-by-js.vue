<template>
  <h1>JSでセットされたog:imageは反映されるのか</h1>
  <p>og:imageをJavaScriptで設定したページ</p>
  <div class="fill-img">
    <img src="/welsh-corgi.jpg" alt="Welsh Corgi" />
  </div>
  <ul>
    <li>
      <a href="/">戻る</a>
    </li>
  </ul>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      // metaタグのoriginを更新する
      document.querySelectorAll('head meta[content]').forEach(el => {
        if (el.getAttribute('property') !== 'og:image' && el.name !== 'twitter:image') return

        const path = el.getAttribute('content')
        const origin = 'https://images.dog.ceo'
        el.setAttribute('content', `${origin}${path}`)
      })
    })

    onUnmounted(() => {
      document.documentElement.classList.remove('not-logged-in')

      // metaタグのoriginを元に戻す
      document.querySelectorAll('head meta[content]').forEach(el => {
        const content = new URL(el.getAttribute('content'))
        el.setAttribute('content', content.pathname)
      })
    })
  }
}
</script>

<style lang="sass" scoped>
.fill-img
  img
    width: 100%
    display: block
</style>