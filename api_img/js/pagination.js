Vue.component('pagination', {
  template: '#pagination-template',
  // номер текущей страницы используем объект props
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 0
    },
    pageRange: {
      type: Number,
      default: 1
    }
  },
  // вычесление следующей и предидущей страницы
  computed: {
    pages: function() {
      var pages = []

      for(var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }

      return pages
    },
    rangeStart: function() {
      var start = this.current - this.pageRange

      return (start > 0) ? start : 1
    },
    rangeEnd: function() {
      var end = this.current + this.pageRange

      return (end < this.totalPages) ? end : this.totalPages
    },
    totalPages: function() {
      return Math.ceil(this.total/this.perPage)
    },
    nextPage: function() {
      return this.current + 1
    },
    prevPage: function() {
      return this.current - 1
    }
  },
  // метод которые принимает номер страницы и через созданное событие передает его приложению
  methods: {
    hasFirst: function() {
      return this.rangeStart !== 1
    },
    hasLast: function() {
      return this.rangeEnd < this.totalPages
    },
    hasPrev: function() {
      return this.current > 1
    },
    hasNext: function() {
      return this.current < this.totalPages
    },
    changePage: function(page) {
      this.$emit('page-changed', page)
    }
  }
})
