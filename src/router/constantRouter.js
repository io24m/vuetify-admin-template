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
},{
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
    },{
        name: "用户",
        path: "//sys/user1",
        component: () => import("@/views/sys/user/User")
    }]
},{
    name: "控制台1",
    path: "/1",
    component: Layout,
    meta: {
        icon: "fa-tachometer"
    },
    children: [{
        path: "/1",
        component: () => import("@/views/dashboard/Dashboard1")
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
}, {
    name: '邮件',
    path: '/email',
    component: Layout,
    meta: {
        icon: 'mdi-account-multiple'
    },
    children: [{
        path: "/email",
        component: () => import("@/views/table/Table")
    }]
}, {
    name: '车票',
    path: '/email1',
    component: Layout,
    meta: {
        icon: 'mdi-ticket'
    },
    children: [{
        path: "/email",
        component: () => import("@/views/table/Table")
    }]
}, {
    name: '学校',
    path: '/email12',
    component: Layout,
    meta: {
        icon: 'mdi-school'
    },
    children: [{
        path: "/email",
        component: () => import("@/views/table/Table")
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