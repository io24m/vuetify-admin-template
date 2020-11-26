<template>
  <div>
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn  text v-bind="attrs" @click="snackbar = false">
          关闭
        </v-btn>
      </template>
    </v-snackbar>

    <v-btn small color="primary"  @click="snackbar = true">测试</v-btn>
    <div>d</div>
  </div>
</template>
<script>
export default {
  data: () => ({
    snackbar: false,
    text: "Hello, I'm a snackbar",
  }),
  methods: {
    cl() {

    },
  },
};
</script>