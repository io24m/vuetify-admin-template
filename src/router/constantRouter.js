import Layout from "@/components/layout/Layout"


const constantRouter = [{
    name: "控制台",
    path: "/",
    component: Layout,
    meta: {
        icon: "mdi-folder"
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
        icon: "mdi-silverware-fork-knife"
    },
    children: [{
        name: '表格1',
        path: "/table1",
        component: () => import("@/views/table/Table"),
        meta: {
            icon: "mdi-silverware-fork-knife"
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
export default constantRouter