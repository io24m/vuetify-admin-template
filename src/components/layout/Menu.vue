<template>
  <v-list nav dense>
    <template v-for="item in routers">
      <template v-if="!hasChild(item.children)">
        <v-list-item-group color="primary" :key="item.path">
          <v-list-item @click='openMenu'>
            <v-list-item-icon>
              <v-icon v-text="item.meta && item.meta.icon"> </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </template>
      <template v-else>
        <v-list-group
          :key="item.path"
          v-model="item.active"
          :prepend-icon="item.meta && item.meta.icon"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item-group>
            <v-list-item v-for="child in item.children" :key="child.path">
              <v-list-item-icon>
                <v-icon v-text="child.meta && child.meta.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="child.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>
      </template>
    </template>
    <!-- 一级 -->
    <!-- <v-list-item-group v-model="selectedItem" color="primary">
      <v-list-item v-for="(item, i) in items0" :key="i">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    <v-divider></v-divider> -->
    <!-- 二级 -->
    <!-- <v-list-group
      v-for="item in items"
      :key="item.title"
      v-model="item.active"
      :prepend-icon="item.action"
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>
      <v-list-item-group>
        <v-list-item v-for="child in item.items" :key="child.title">
          <v-list-item-icon>
            <v-icon v-text="child.action"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list-group> -->
  </v-list>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    selectedItem: null,
  }),
  computed: {
    ...mapGetters({
      routers: "permission/getRouters",
    }),
  },
  methods: {
    hasChild(children) {
      if (!children) {
        return false;
      }
      const childrens = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          //this.onlyOneChild = item;
          return true;
        }
      });
      return childrens.length !== 1;
    },
    openMenu(e) {
      
      console.log(e)
    },
  },
};
</script>