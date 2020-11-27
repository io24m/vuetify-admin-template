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
    name: "控制台",
    path: "/2",
    redirect: "/table34",
    component: Layout,
    meta: {
        icon: "mdi-silverware-fork-knife"
    },
    children: [{
        name: '表格',
        path: "/table34",
        component: () => import("@/views/table/Table"),
        meta: {
            icon: "mdi-silverware-fork-knife"
        },
    }, {
        name: '表格1',
        path: "/table1",
        component: () => import("@/views/table/Table"),
        meta: {
            icon: "mdi-run"
        },
    }, {
        name: '表格3',
        path: "/table3",
        component: () => import("@/views/table/Table"),
        meta: {
            icon: "mdi-run"
        },
    }, {
        name: '表格4',
        path: "/table4",
        component: () => import("@/views/table/Table"),
        meta: {
            icon: "mdi-run"
        },
    }, {
        name: '表格5',
        path: "/table5",
        component: () => import("@/views/table/Table"),
        meta: {
            icon: "mdi-run"
        },
    }, {
        name: '表格',
        path: "/table34",
        component: () => import("@/views/table/Table"),
        meta: {
            icon: "mdi-silverware-fork-knife"
        },
    }, {
        name: '表格1',
        path: "/table1q",
        component: () => import("@/views/table/Table"),
        meta: {
            icon: "mdi-run"
        },
    }, {
        name: '表格3',
        path: "/table3w",
        component: () => import("@/views/table/Table"),
        meta: {
            icon: "mdi-run"
        },
    }, {
        name: '表格4',
        path: "/table4e",
        component: () => import("@/views/table/Table"),
        meta: {
            icon: "mdi-run"
        },
    }, {
        name: '表格5',
        path: "/table5r",
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