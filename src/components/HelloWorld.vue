<template>
  <div class="hello">
        <p>BBBBBB</p>
    <h1>{{ msg }}</h1>
    <van-button icon="plus" type="primary" />
        <van-button icon="plus" type="primary">按钮</van-button>
        <van-button icon="https://img01.yzcdn.cn/vant/user-active.png" type="info">按钮</van-button>
        <van-button square type="primary">方形按钮</van-button>
        <van-button round type="info">圆形按钮</van-button>
        <van-button loading type="primary" />
        <van-button loading type="primary" loading-type="spinner" />
        <van-button loading type="info" loading-text="加载中..." />
        <van-cell title="单元格" value="内容"></van-cell>
        <van-cell title="单元格" value="内容"></van-cell>
    <ul>
      <li>
        <a
          href="./index.html#/phonetest"
          target="_blank"
        >
        测试页面
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// import Vue from 'vue'
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
