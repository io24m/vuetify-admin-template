<template>
  <div>
    <v-data-table
      v-model="selected"
      :single-select="true"
      show-select
      :loading="loading"
      :headers="headers"
      :items="datas"
      class="elevation-1"
      hide-default-footer
    >
      <template v-slot:top>
        <v-row class="mt-1">
          <!-- <v-switch label="Single select" class="pl-3"></v-switch> -->
          <v-col cols="12" md="3">
            <v-select
              class="pl-3 pr-3 elevation-0"
              :items="selects"
              label="Solo field"
              outlined
              dense
              v-show="selected.length > 0"
            ></v-select>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="3">
            <v-text-field
              label=""
              placeholder="filter"
              outlined
              class="pl-3 pr-3"
              append-icon="mdi-magnify"
              dense
              width="12"
            ></v-text-field>
          </v-col>
          <!-- <v-btn class="mx-3 elevation-0" fab small>
            <v-icon>mdi-magnify</v-icon></v-btn
          > -->
        </v-row>
      </template>
      <template v-slot:[`item.enable`]="{ item }">
        <v-chip small :color="item.enable ? 'green' : 'red'">
          {{ item.enable ? "启用" : "禁用" }}
        </v-chip>
      </template>
    </v-data-table>

    <!-- addUser -->
    <v-dialog v-model="dialog" persistent max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> 新增 </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">增加用户</span>
        </v-card-title>
        <v-card-text>
          <v-container
            ><v-row
              ><v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field> </v-col></v-row
          ></v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            关闭
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            保存
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn @click="message">s</v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      selects: [1, 2, 3],
      selected: [],
      headers: [
        {
          text: "account",
          value: "account",
        },
        {
          text: "name",
          value: "name",
        },
        {
          text: "enable",
          value: "enable",
        },
        {
          text: "sysUser",
          value: "sysUser",
        },
      ],
      datas: [],
      dialog: false,
    };
  },
  mounted() {
    this.$http({
      url: "/sys/user",
    })
      .then((data) => {
        this.loading = false;
        const { result } = data;
        this.datas = result;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    message() {
      // var me = this;
      //this.$snackbar("message", "info");
   
      this.$messageBox({
        title: "退出",
        message: "确认退出？",
        cb: function () {
          console.log("4444444");
        },
      });
    },
  },
};
</script>