<template>
<div>
  <ul class="pager">
    <li :class="['pager-btn', 'pager-btn--first', {'pager-btn--disabled' : index === 1}]" @click="first">first</li>
    <li :class="['pager-btn', 'pager-btn--prev', {'pager-btn--disabled' : index === 1}]" @click="prev">prev</li>
    <li :class="['pager-btn', 'pager-btn--more']" v-if="showPrevMore">...</li>
    <li :class="['pager-btn', {'pager-btn--current' : index === pager}]" v-for="pager in pagers" @click="go(pager)">{{ pager }}</li>
    <li :class="['pager-btn', 'pager-btn--more']" v-if="showNextMore">...</li>
    <li :class="['pager-btn', 'pager-btn--next', {'pager-btn--disabled' : index === pages}]" @click="next">next</li>
    <li :class="['pager-btn', 'pager-btn--last', {'pager-btn--disabled' : index === pages}]" @click="last">last</li>
  </ul>
</div>

</template>

<script>
export default {
  name: 'Pagination',
  props: {
    perPages: {
      type: Number,
      default: 5
    },
    pageIndex: {
      type: Number,
      default: 1,
      required: true
    },
    pageSize: {
      type: Number,
      default: 1,
      required: true
    },
    total: {
      type: Number,
      default: 1,
      required: true
    }
  },
  methods: {
    prev () {
      if (this.index > 1) {
        this.go(this.index - 1)
      }
    },
    next () {
      if (this.index < this.pages) {
        this.go(this.index + 1)
      }
    },
    first () {
      if (this.index !== 1) {
        this.go(1)
      }
    },
    last () {
      if (this.index !== this.pages) {
        this.go(this.pages)
      }
    },
    go (page) {
      if (this.index !== page) {
        this.index = page
        this.$emit('change', this.index)
      }
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.size / this.limit)
    },
    pagers () {
      const array = []
      const perPages = this.perPages
      const pageCount = this.pages
      let current = this.index
      const _offset = (perPages - 1) / 2
      const offset = {
        start: current - _offset,
        end: current + _offset
      }

      if (offset.start < 1) {
        offset.end = offset.end + (1 - offset.start)
        offset.start = 1
      }
      if (offset.end > pageCount) {
        offset.start = offset.start - (offset.end - pageCount)
        offset.end = pageCount
      }
      if (offset.start < 1) offset.start = 1

      this.showPrevMore = (offset.start > 1)
      this.showNextMore = (offset.end < pageCount)

      for (let i = offset.start; i <= offset.end; i++) {
        array.push(i)
      }

      return array
    }
  },
  data () {
    return {
      index: this.pageIndex,
      limit: this.pageSize,
      size: this.total || 1,
      showPrevMore: false,
      showNextMore: false
    }
  },
  watch: {
    pageIndex (val) {
      this.index = val || 1
    },
    pageSize (val) {
      this.limit = val || 10
    },
    total (val) {
      this.size = val || 1
    }
  }
}
</script>

<style lang="stylus" scoped>
@font-face
  font-family 'SentyZHAO'
  src url('../fonts/SentyZHAO.ttf') format('truetype')

.pager
  display inline-block
  padding 0
  margin 1rem 0
  font-size 0
  list-style none
  user-select none
  font-family 'SentyZHAO'
  > .pager-btn
    display inline
    font-size 1.2rem
    position relative
    padding 6px 12px
    line-height 1.2rem
    text-decoration none
    border 0.1rem solid #2c3e50
    margin-left -1px
    margin-right 0.5rem
    cursor pointer
    color #2c3e50
    border-radius 1rem
    transition all 0.5s ease-out
    &:first-child
      margin-left 0
    &:hover
      background-color #2c3e50
      border 0.1rem solid #2c3e50
      color #fff
    &.pager-btn--disabled
      background-color #2c3e50
      color #fff
      cursor not-allowed
      opacity .6
    &.pager-btn--more,
    &.pager-btn--current
      cursor default
    &.pager-btn--current
      background-color #2c3e50
      color #fff
      position relative
      z-index 1
      border-color #2c3e50
    &.pager-btn--more:hover
      background-color rgba(0, 0, 0, 0)
      color #2c3e50
</style>
