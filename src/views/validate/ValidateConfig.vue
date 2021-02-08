<template>
  <div>
    <v-card>
      <v-tabs background-color="primary" center-active dark @change="tabChange">
        <v-tab v-for="(item, i) in classConfig" :key="i">{{
          item.className
        }}</v-tab>
      </v-tabs>
    </v-card>
    <!-- 列表 -->
    <v-card class="flex-row mt-2" tile>
      <!-- <v-card-subtitle>
        <v-btn text color="primary"> 新增校验逻辑 </v-btn>
        {{ classType }}</v-card-subtitle
      > -->
      <v-data-table
        :headers="headers"
        :items="fileConfigs"
        item-key="name"
        class="elevation-1"
        hide-default-footer
      >
        <template v-slot:top>
          <v-toolbar flat>
            {{ classType }}
            <v-spacer></v-spacer>
            <v-btn text color="primary"> 新增校验逻辑 </v-btn>
          </v-toolbar></template
        >

        <template v-slot:[`item.check`]="{ item }">
          <v-chip small :color="item.check ? 'green' : 'red'">
            {{ item.check ? "启用" : "禁用" }}
          </v-chip>
        </template>
        <template v-slot:[`item.pass`]="{ item }">
          <v-chip small :color="item.pass ? 'red' : 'green'">
            {{ item.pass ? "跳过" : "不跳过" }}
          </v-chip>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </v-card>
    <!-- 修改 -->
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">title</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-checkbox
                  v-model="editedItem.check"
                  label="是否验证"
                ></v-checkbox>

                <!-- <v-text-field
                  v-model="editedItem.check"
                  label="是否验证"
                ></v-text-field> -->
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-checkbox
                  v-model="editedItem.pass"
                  label="跳过错误"
                ></v-checkbox>
                <!-- <v-text-field
                  v-model="editedItem.pass"
                  label="验证逻辑"
                ></v-text-field> -->
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.errorMessage"
                  label="错误信息"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="editClose"> 取消 </v-btn>
          <v-btn color="blue darken-1" text @click="editSave"> 保存 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 删除 -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">确认删除记录？</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="deleteClose">取消</v-btn>
          <v-btn color="error" text @click="deleteConfirm">确认删除</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        { text: "操作", value: "actions", sortable: false },
      ],
      fileConfigs: [],
      editDialog: false,
      editedIndex: 0,
      editedItem: { name: "", calories: 0, fat: 0, carbs: 0, protein: 0 },
      deleteDialog: false,
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
    editItem(item) {
      this.editedIndex = this.fileConfigs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editDialog = true;
    },
    editClose() {
      this.editDialog = false;
    },
    editSave() {



    },
    deleteItem(item) {
      this.editedIndex = this.fileConfigs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.deleteDialog = true;
    },
    deleteClose() {
      this.deleteDialog = false;
    },
    deleteConfirm() {},
  },
};
</script>