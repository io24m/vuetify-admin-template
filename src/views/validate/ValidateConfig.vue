<template>
  <div> 

    <div v-for="(item, index) in config" :key="index">
      {{ item.className + "." + item.key + "." + item.validateType }}
      <div>{{ item.check ? "验证" : "不验证" }}</div>
      <div>{{ item.pass ? "跳过" : "不跳过" }}</div>
      <div>{{ item.errormessage }}</div>
    </div> 

  </div>
</template>
<script>
export default {
  data() {
    return {
      config: [],
    };
  },
  watch: {},
  computed: {
    
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$http({
        url: "/validate/config/getClassConfig",
      }).then((data) => {
        this.config = data.result;
        let t = this.g(this.config);
        console.log(t);
      });
    },
    getConfigClass() {},
    g(c) {
      if (!c) {
        return;
      }
      let r = [];
      c.forEach((item) => {
        let children;
        for (let i = 0; i < r.length; i++) {
          if (item.key === r[i].key) {
            children=r[i].children
          }
        }
        if (children) {
          children.push({
            validateType: item.validateType,
            check: item.check,
            pass: item.pass,
            errormessage: item.errormessage,
          });
          return;
        }
        r.push({
          className: item.className,
          key: item.key,
          children: [],
        });
      });
      return r;
    },
  },
};
</script>