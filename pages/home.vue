<template>
  <h1>JSでセットされたog:imageは反映されるのか</h1>
  <p>metaタグのog:imageに画像ファイルのURLを設定しておくと、Twitterなどの外部サービスにURLを貼った時にページのサムネイル画像として展開される。</p>
  <p>このURLをJavaScriptでページ描画後に設定した場合、外部サービスは画像を取得できるのか検証する。</p>
  <ul>
    <li>
      <router-link to="/set-by-js">JSでog:imageをセットしたページ</router-link>
    </li>
    <li>
      <a href="/direct.html">URLを直接書いたページ（比較用）</a>
    </li>
  </ul>
  <p>
    <a href="https://github.com/mktoho12/og-test.mktoho.dev" target="_blank">
      ソースコード
    </a>
  </p>
</template>