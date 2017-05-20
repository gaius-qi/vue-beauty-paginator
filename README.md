# vue-beauty-paginator <a href="https://www.npmjs.com/package/vue-beauty-paginator"><img src="https://img.shields.io/npm/v/vuejs-paginator.svg" alt="Version"></a> [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)
> Vue.js分页组件.

vue-beauty-paginator是一个简单但功能强大的插件，它可以描绘出漂亮的分页标签。

![vue brauty paginator preview](https://github.com/qwbtc/vue-beauty-paginator/blob/master/dist/dist/image/show.gif).

## 安装
> Vue 2.0以上
### npm
``` bash
npm install vuejs-beauty-paginator --save
```

## 用法
作为组件引用
```js
import vuePaginator from 'vuejs-beauty-paginator'
```

## 示例
在父组件example.vue中
```js
<template>
  <pagination
    :page-index="currentPage" // 当前页数
    :total="count" // 总页数
    :page-size="pageSize" // 分页标签中可见的页码数，其他以...代替, 必须是奇数
    @change="pageChange"> // 当点击组件跳页时，子组件中通过调用change方法给父组件传递点击的页码，父组件通过调用pageChange方法来请求新数据
  </pagination>
</template>
<script>
import vuePaginator from 'vuejs-beauty-paginator'
export default {
  data () {
      return {
      // 每页显示条数
      pageSize: 4,
      // 当前页码
      currentPage: 1,
      // 总记录数
      count: 0
    }
  },
  methods: {
      ...mapActions([
        'getPagesInfo'
      ]),
      // 跳页时请求数据
      pageChange (page) {
      this.currentPage = page
      //后台请求该页数据
      this.getPagesInfo(this.currentPage)
    }
  }
}
</script>
```
