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
        component: () => import("@/views/table/Table")
    }]  
}];
// constantRouter.push({
//     name: "控制台",
//     path: "/",
//     redirect: "/dashboard",
//     component: Layout,
//     meta: {
//         icon: "home"
//     },
//     children: [{
//         path: "/dashboard",
//         component: () => import("@/views/dashboard/Dashboard")
//     }]
// })
export default constantRouter