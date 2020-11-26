import Layout from "@/components/layout/Layout"


const constantRouter = [{
    name: "控制台",
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    meta: {
        icon: "home"
    },
    children: [{
        path: "/dashboard",
        component: () => import("@/views/dashboard/Dashboard")
    }]
}, {
    name: "控制台",
    path: "/",
    redirect: "/table",
    component: Layout,
    meta: {
        icon: "home"
    },
    children: [{
        path: "/table",
        component: () => import("@/views/table/Table")
    }, {
        path: "/table1",
        component: () => import("@/views/table/Table")
    }]
}];
export default constantRouter