<template>
  <div>
    <v-btn depressed color="primary" @click="onPost" class="mb-4"> post </v-btn>
    <v-textarea outlined label="params" v-model="person"></v-textarea>
    <v-textarea auto-grow outlined label="response" v-model="response"></v-textarea>
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
      this.person = JSON.stringify(
        {
          age: "",
          name: "",
          birthday:new Date()
        },
        null,
        "\t"
      );
    },
    onPost() {
      this.response = "";
      this.$http({
        url: "/validate/data",
        data: JSON.parse(this.person),
      }).then((data) => {
        this.response = JSON.stringify(data.result, null, "\t");
      });
    },
  },
};
</script>