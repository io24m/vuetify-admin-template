<template>
  <div>
    <v-row>
      <v-col cols="6" md="3" sm="6" v-for="(item, index) in cards" :key="index">
        <v-card color="#385F73" dark elevation="2" outlined>
          <v-card-title class="headline"> {{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
          <!-- <v-card-actions>
            <v-btn text> Listen Now </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" md="3" sm="6" v-for="(item, index) in cards" :key="index">
        <v-card class="mx-auto ma-1" color="#26c6da" dark>
          <v-card-title>
            <v-icon large left> mdi-twitter </v-icon>
            <span class="title font-weight-light">Twitter</span>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">
            "Turns out semicolon-less style is easier and safer in TS because
            most gotcha edge cases are type invalid as well."
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img class="elevation-6" alt="" :src="imgSrc"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1"> mdi-heart </v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1"> mdi-share-variant </v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-alert border="left" type="success">Alert Message 提示框</v-alert>
    <!-- <v-card>
      <v-responsive :aspect-ratio="16 / 9">
        <v-card-text>
          This card will always be 16:9 (unless you put more stuff in it)
        </v-card-text>
      </v-responsive>
    </v-card> -->

    <v-snackbar
      :timeout="50000"
      :value="true"
      absolute
      bottom
      color="primary"
      right
      text
    >
      Lorem ipsum dolor sit amet consectetur.
    </v-snackbar>
    <v-snackbar v-model="snackbar" app top>
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> 关闭 </v-btn>
      </template>
    </v-snackbar>
    <v-btn color="primary" @click="snackbar = true" class="mr-1 mt-1"
      >测试</v-btn
    >
    <v-btn color="primary" @click="post" class="mr-1 mt-1">POST</v-btn>
    <v-btn icon class="mr-1 mt-1">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-card max-width="400" class="mx-auto">
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-card-title class="headline">
                Unlimited music now
              </v-card-title>

              <v-card-subtitle
                >Listen to your favorite artists and albums whenever and
                wherever, online and offline.</v-card-subtitle
              >

              <v-card-actions>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col v-for="(item, i) in items" :key="i" cols="12">
            <v-card :color="item.color" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title>

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
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import title from "@/assets/title.svg";
import foster from "@/assets/foster.jpg";
import halcyon from "@/assets/halcyon.png";
export default {
  data: () => ({
    imgSrc: title,
    snackbar: false,
    text: "Hello, I'm a snackbar",
    cards: [
      {
        title: "组件",
        subtitle: "324",
      },
      {
        title: "图表",
        subtitle: "129",
      },
      {
        title: "消息",
        subtitle: "124",
      },
      {
        title: "Unlimited music now",
        subtitle:
          "Listen to your favorite artists and albums whenever and wherever,online and offline.",
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
        url: "/login1",
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