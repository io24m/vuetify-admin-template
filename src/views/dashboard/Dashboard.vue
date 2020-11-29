<template>
  <div>
    <v-row>
      <v-col cols="6" md="3" sm="6" v-for="(item, index) in cards" :key="index">
        <v-card color="#385F73" dark elevation="2" outlined>
          <v-card-title class="headline"> {{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4" sm="12" v-for="(item, i) in items" :key="i">
        <v-card :color="item.color" dark height="150">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>
              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              <v-card-actions>
                <v-btn
                  v-if="item.artist === 'Ellie Goulding'"
                  class="ml-2 mt-3"
                  fab
                  icon
                  height="40px"
                  right
                  width="40px"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>
                <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                  START RADIO
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card color="#385F73" dark height="150">
          <v-card-title class="headline"> Unlimited music now </v-card-title>
          <v-card-subtitle
            >Listen to your favorite artists, online and
            offline.</v-card-subtitle
          >
          <v-card-actions>
            <v-btn class="ml-2 mt-3" fab icon height="40px" right width="40px">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import foster from "@/assets/foster.jpg";
import halcyon from "@/assets/halcyon.png";
export default {
  data: () => ({
    cards: [
      {
        title: "423",
        subtitle: "组件",
      },
      {
        title: "342",
        subtitle: "图表",
      },
      {
        title: "消息",
        subtitle: "124",
      },
      {
        title: "字体",
        subtitle: "3765",
      },
    ],
    items: [
      {
        color: "#1F7087",
        src: foster,
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: halcyon,
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
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