Component({
  properties: {
    indicatorDots: {
      type: Boolean,
      value: false
    },
    autoplay: {
      type: Boolean,
      value: true // 设置为true以启用自动切换
    },
    interval: {
      type: Number,
      value: 100000 // 10秒
    },
    duration: {
      type: Number,
      value: 500
    }
  },
  data: {},
  methods: {}
});
