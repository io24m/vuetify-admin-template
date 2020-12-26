<template>
  <v-list nav dense expand>
    <template v-for="(item, index) in routers">
      <template v-if="!item.hidden">
        <template v-if="!hasChild(item.children)">
          <v-list-item-group color="primary" :key="index">
            <v-list-item :to="item.path">
              <v-list-item-icon>
                <v-icon size="20" v-text="item.meta && item.meta.icon">
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </template>
        <template v-else>
          <v-list-group :key="index">
            <template v-slot:prependIcon>
              <v-icon size="20" v-text="item.meta && item.meta.icon"></v-icon>
            </template>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item-group>
              <v-list-item
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
                :to="child.path"
              >
                <!-- mr-2 class="ml-4"-->
                <v-list-item-icon class="ml-4 mr-4">
                  <v-icon
                    size="14"
                    v-text="
                      (child.meta && child.meta.icon) || 'mdi-circle-medium'
                    "
                  ></v-icon>
                  <!-- <v-icon size="12"> mdi-circle-medium</v-icon> -->
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="child.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list-group> </template
      ></template>
    </template>

    <!-- <v-divider></v-divider>

    <v-list-group prepend-icon="mdi-account-circle">
      <template v-slot:activator>
        <v-list-item-title>一级菜单</v-list-item-title>
      </template>
      <v-list-group sub-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>二级菜单</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon> </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>三级菜单</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>三级菜单</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-group sub-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>二级菜单</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon> mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>三级菜单</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>三级菜单</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon> </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>er级菜单</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group> -->
  </v-list>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    selectedItem: null,
    model: [1],
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
      console.log(e);
    },
  },
};
</script>