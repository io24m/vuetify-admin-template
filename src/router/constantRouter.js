import Layout from "@/components/layout/Layout"


const constantRouter = [{
    name: "控制台",
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    meta: {
        icon: "mdi-folder"
    },
    children: [{
        path: "/dashboard",
        component: () => import("@/views/dashboard/Dashboard")
    }]
}, {
    name: "控制台",
    path: "/1",
    redirect: "/table",
    component: Layout,
    meta: {
        icon: "mdi-silverware-fork-knife"
    },
    children: [{
        name: '表格',
        path: "/table",
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