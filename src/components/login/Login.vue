<template>
  <v-app>
    <v-snackbar v-model="snackbar" color="red darken-2" top>
      {{ errMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
    <v-container class="mt-10">
      <v-form v-model="valid" ref="form">
        <v-row justify="center">
          <v-col cols="12" md="4" sm="12">
            <v-text-field
              class="mt-2"
              label="用户名"
              :rules="rules"
              v-model="userName"
            ></v-text-field>
            <v-text-field
              class="mt-2"
              label="密码"
              :rules="rules"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <v-btn
              color="primary"
              @click="login"
              class="mt-2"
              height="40"
              block
            >
              登录
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    snackbar: false,
    valid: false,
    errMsg: "",
    userName: "",
    password: "",
    rules: [
      (value) => !!value || "必填",
      // (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
    showPassword: false,
  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("user/login", {
            userName: this.userName,
            password: this.password,
          })
          .then(() => {
            this.$router.push({
              path: "/",
            });
          })
          .catch(() => {
            this.errMsg = "用户名密码错误";
            this.snackbar = true;
          });
      }
    },
  },
};
</script>
