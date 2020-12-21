<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      light
      elevate-on-scroll
      flat
      color="white"
      :style="{
        borderBottomColor: 'rgba(0,0,0,.12)!important',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
      }"
    >
      <v-app-bar-nav-icon
        v-if="!drawer"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-img :src="logo" maxWidth="40" />

      <v-toolbar-title class="ma-4">{{ title }}</v-toolbar-title>
      <!-- <v-menu :key="text" :rounded="rounded" offset-y open-on-hover>
        <template v-slot:activator="{ attrs, on }">
          <v-btn class="ma-4" v-bind="attrs" v-on="on" text> v2.3.16 </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="item in items" :key="item" link>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->

      <v-spacer></v-spacer>
      <v-menu
        :rounded="rounded"
        offset-y
        open-on-hover
        class="d-none d-md-flex"
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn class="ma-2 d-none d-md-flex" v-bind="attrs" v-on="on" text>
            调色板 <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        class="ma-1 d-none d-md-flex"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-1">最新版本</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <!-- fab -->
      <v-btn
        icon
        right
        class="mr-4"
        href="https://github.com/io24m/vuetify-admin-template"
        target="_blank"
        rounded
        small
      >
        <v-icon>fa-github</v-icon>
      </v-btn>

      <v-btn icon right class="mr-4" rounded small>
        <v-icon>fa-user-circle</v-icon>
      </v-btn>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            right
            class="mr-4 d-none d-md-flex"
            rounded
            small
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>fa-window-maximize</v-icon>
          </v-btn>
        </template>
        <span>最大化</span>
      </v-tooltip>

      <v-avatar color="primary" size="40">
        <span class="white--text headline">40</span></v-avatar
      >
    </v-app-bar>
    <!-- app bar-->

    <v-navigation-drawer v-model="drawer" app clipped>
      <Menu />
    </v-navigation-drawer>
    <!-- style="backgroud-color: #f2f5f8" -->
    <v-main class="grey lighten-4">
      <v-container fluid>
        <!-- <Table /> -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <MessageBox />
    <!-- <v-snackbar-queue></v-snackbar-queue> -->
  </v-app>
</template>
<script>
import Menu from "./Menu";
import logo from "@/assets/logo.svg";
import settings from "@/settings.js";

export default {
  components: { Menu },
  data() {
    return {
      title: settings.app.title,
      logo: logo,
      text: "1",
      drawer: null,
      rounded: true,
      items: [
        {
          action: "mdi-ticket",
          title: "Attractions",
        },
        {
          action: "mdi-ticket",
          items: [{ title: "List Item" }],
          title: "Attractions",
        },
      ],
    };
  },
};
</script>