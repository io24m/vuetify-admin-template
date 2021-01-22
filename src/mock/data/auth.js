import {
    okJson,
    failJson,
    notAuthJson
} from './utils.js'

const users = {
    admin: {
        account: 'admin',
        token: 'admin-token'
    }
}
const data = {
    admin: {}
}

export default {
    login: () => {
        const user = users["admin"];
        return user ? okJson(user.token) : failJson("error")
    },
    logout: () => {
        return failJson("error")
    },
    authData: () => {
        const authData = data["admin"];
        return authData ? okJson(authData) : failJson("error")
    },
    notAuth: () => {
        return notAuthJson()
    }
}