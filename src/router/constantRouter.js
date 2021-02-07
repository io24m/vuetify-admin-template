import Layout from "@/components/layout/Layout"


const constantRouter = [{
    name: "控制台",
    path: "/",
    component: Layout,
    meta: {
        icon: "fa-tachometer"
    },
    children: [{
        path: "/",
        component: () => import("@/views/dashboard/Dashboard")
    }]
}, {
    name: "图标",
    path: "/icons",
    component: Layout,
    meta: {
        icon: "fa-fonticons"
    },
    children: [{
        path: "/icons",
        component: () => import("@/views/icons/Icon")
    }]
}, {
    name: "验证",
    path: "/validate",
    component: Layout,
    meta: {
        icon: "fa-tachometer"
    },
    children: [{
        name: "验证数据",
        path: "/validate/data",
        component: () => import("@/views/validate/ValidateData")
    }, {
        name: "配置",
        path: "/validate/config",
        component: () => import("@/views/validate/ValidateConfig")
    }]
}, {
    name: "系统",
    path: "/sys",
    component: Layout,
    meta: {
        icon: "fa-wrench"
    },
    children: [{
        name: "用户",
        path: "/sys/user",
        component: () => import("@/views/sys/user/User")
    }, {
        name: "角色",
        path: "/sys/role",
        component: () => import("@/views/sys/role/Role")
    }]
}, {
    name: "列表",
    path: "/table",
    component: Layout,
    meta: {
        icon: "fa-table"
    },
    children: [{
        name: '表格1',
        path: "/table1",
        component: () => import("@/views/table/Table1"),
        meta: {
            icon: "mdi-silverware-fork-knife",
            title: '表格'
        },
    }, {
        name: '表格2',
        path: "/table2",
        component: () => import("@/views/table/Table"),
        meta: {
            icon: "mdi-run"
        },
    }]
}];
constantRouter.push({
    hidden: true,
    path: '/login',
    component: () => import("@/components/login/Login")
});

constantRouter.push({
    hidden: true,
    path: '/*',
    redirect: "/404",
    component: Layout,
    meta: {
        icon: 'mdi-school'
    },
    children: [{
        path: "/404",
        component: () => import("@/components/error/Page404")
    }]
});
export default constantRouter