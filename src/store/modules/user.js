const state = {
    user: {
        name: "李先生"
    }
}
const getters = {
    getUser(state) {
        return state.user
    },
    getUserNameFirst() {
        return state.user.name && state.user.name.length > 0 && state.user.name[0]
    }
}
const mutations = {

}
const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}