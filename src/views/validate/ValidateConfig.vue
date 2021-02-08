<template>
  <div>
    <v-card>
      <v-tabs
        background-color="primary"
        center-active
        dark
        @change="tabChange"
      >
        <v-tab v-for="(item, i) in classConfig" :key="i">{{
          item.className
        }}</v-tab>
      </v-tabs>
    </v-card>

    <v-card class="flex-row mt-2" tile>
      <v-card-subtitle>{{ classType }}</v-card-subtitle>
      <v-data-table
        :headers="headers"
        :items="fileConfigs"
        item-key="name"
        class="elevation-1"
        hide-default-footer
      >
        <template v-slot:[`item.check`]="{ item }">
          <v-chip small :color="item.check ? 'green' : 'red'">
            {{ item.check ? "启用" : "禁用" }}
          </v-chip>
        </template>
        <template v-slot:[`item.pass`]="{ item }">
          <v-chip small :color="item.pass ? 'red' : 'green'">
            {{ item.pass ? "不报错" : "报错" }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classConfig: [],
      classType: "",
      headers: [
        {
          text: "字段",
          value: "fileKey",
        },
        {
          text: "验证类型",
          value: "validateType",
        },
        {
          text: "验证",
          value: "check",
        },
        {
          text: "验证逻辑",
          value: "pass",
        },
        {
          text: "错误信息",
          value: "errorMessage",
        },
      ],
      fileConfigs: [],
    };
  },
  watch: {},
  computed: {},
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$http({
        url: "/validate/config/getClassConfig",
      }).then((data) => {
        this.classConfig = data.result;
      });
    },
    tabChange(index) {
      if (!this.classConfig || this.classConfig.length <= index) {
        return;
      }
      const item = this.classConfig[index];
      this.classType = item.classType;
      this.$http({
        url: "/validate/config/getFileConfig",
        data: {
          classType: item.classType,
        },
      }).then((data) => {
        this.fileConfigs = data.result;
      });
    },
  },
};
</script>