<template>
  <v-app>
    <v-container>
      <v-text-field
        class="ma-2"
        label="用户名"
        :rules="rules"
        v-model="userName"
      ></v-text-field>
      <v-text-field class="ma-2" label="密码" :rules="rules"></v-text-field>
      <v-btn color="primary" @click="login" class="ma-2"> Login </v-btn>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    userName: "",
    rules: [
      (value) => !!value || "必填",
      // (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
  methods: {
    login() {
      this.$store
        .dispatch("user/login", { userName: this.userName, password: "" })
        .then(() => {
          this.$router.push({
            path: "/",
          });
        });

      // this.$http({
      //   url: "/login",
      //   method: "post",
      //   data: {
      //     userName: this.userName,
      //   },
      // }).then(function (res) {
      //   console.log(res);
      // });
    },
  },
};
</script>
