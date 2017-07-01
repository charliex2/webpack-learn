require('./module-one.js')
require('./module-two.js')

//加载样式文件
require('../css/style.css')

import Vue from 'vue'
import VueHeader from './components/VueHeader.vue'
new Vue({
  el:'#app',
  components:{ VueHeader }
})
