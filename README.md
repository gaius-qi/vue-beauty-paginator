# vue-beauty-paginator <a href="https://www.npmjs.com/package/vue-beauty-paginator"><img src="https://img.shields.io/npm/v/vuejs-paginator.svg" alt="Version"></a> [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)
> Vue.js分页组件.

vue-beauty-paginator是一个简单但功能强大的插件，它可以描绘出漂亮的分页标签。

![vue brauty paginator preview](https://raw.githubusercontent.com/gaius-qi/vue-beauty-paginator/master/src/image/show.gif).

### 安装
> Vue.js 1.0.0+
#### npm
``` bash
npm install vuejs-beauty-paginator --save
```

### 用法
作为组件引用
```js
import vuePaginator from 'vuejs-beauty-paginator'
```

### 示例
在父组件example.vue中
```js
<template>
  <pagination
    :per-page="perPages" // 分页标签中可见的页码数，其他以...代替, 必须是奇数
    :page-index="currentPage" // 当前页数
    :total="count" // 总页数
    :page-size="pageSize" // 每页显示数据的数量
    @change="pageChange"> // 当点击组件跳页时，子组件中通过调用change方法给父组件传递点击的页码，父组件通过调用pageChange方法来请求新数据
  </pagination>
</template>
<script>
import vuePaginator from 'vuejs-beauty-paginator'
export default {
  data () {
    return {
      // 分页标签中可见的页码数，其他以...代替, 必须是奇数
      perPages：4
      // 每页显示条数
      pageSize: 10,
      // 当前页码
      currentPage: 1,
      // 总记录数，需要请求此数据，并赋值
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

### prop
| Name          | Type     | Default | Required | Description |
| ------------ | --------| -------| --------| ----------- |
| perPages      | Number   | 5       | false    | 分页标签中可见的页码数，其他以...代替, 必须是奇数 |
| pageIndex     | Number   | 1       | true     | 当前页码 |
| pageSize      | Number   | 1       | true     | 每页显示条数 |
| total         | Number   | 1       | true     | 总记录数 |

### 开发环境设置
``` bash
# 安装依赖
npm install

# 生成源文件
npm run build
```

### License
[MIT](http://opensource.org/licenses/MIT)
