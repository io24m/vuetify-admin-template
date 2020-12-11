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
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
};
</script>