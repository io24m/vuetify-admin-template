<template>
  <transition name="vuttify-toast" @after-leave="afterLeave">
    <div v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">
      <v-snackbar
        :timeout="5000"
        :value="true"
        absolute
        bottom
        color="primary"
        right
        text
      >
        {{ message }}
      </v-snackbar>
    </div></transition
  >
</template>
<script>
export default {
  data() {
    return {
      visible: true,
      message: null,
      closed: false,
      timer: null,
      duration: 3000,
    };
  },
  mounted() {
    this.startTimer();
    console.log("start");
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        console.log("watch:closed");
        this.visible = false;
      }
    },
  },
  methods: {
    afterLeave() {
      console.log("destroy");
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
    },
    startTimer() {
      if (this.duration <= 0) {
        return;
      }
      var me = this;
      this.timer = setTimeout(function () {
        me.close();
        console.log(this);
        console.log(me);
        console.log("close");
      }, this.duration);
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
  },
};
</script>