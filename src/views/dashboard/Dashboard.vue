<template>
  <div>
    <v-snackbar
      :timeout="-1"
      :value="true"
      absolute
      bottom
      color="primary"
      left
      text
    >
      Lorem ipsum dolor sit amet consectetur.
    </v-snackbar>
    <v-snackbar v-model="snackbar"  app top>
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> 关闭 </v-btn>
      </template>
    </v-snackbar>
    <v-btn color="primary" @click="snackbar = true" class="ma-1">测试</v-btn>
    <v-btn color="primary" @click="post" class="ma-1">POST</v-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    snackbar: false,
    text: "Hello, I'm a snackbar",
  }),
  methods: {
    post() {
      this.$http({
        url: "/login",
        method: "post",
        data: {
          userName: "admin",
        },
      }).then(function (res) {
        console.log(res);
      });
    },
  },
};
</script>