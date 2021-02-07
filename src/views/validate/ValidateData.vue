<template>
  <div>
    <v-btn depressed color="primary" @click="onPost" class="mb-4"> post </v-btn>
    <v-textarea outlined label="params" v-model="person"></v-textarea>
    <v-textarea outlined label="response" v-model="response"></v-textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      person: "",
      response: "",
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.person = JSON.stringify({
        age: " ",
        name: " ",
      });
    },
    onPost() {
      this.response = "";
      this.response = this.person;
    },
  },
};
</script>