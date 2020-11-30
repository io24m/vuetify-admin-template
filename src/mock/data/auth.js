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
    login: (params) => {
        const { userName } = JSON.parse(params.body);
        const user = users[userName];
        return user ? okJson(user.token) : failJson("error")
    },
    logout: () => {
        return failJson("error")
    },
    authData: (params) => {
        const { userName } = JSON.parse(params.body);
        const authData = data[userName];
        return authData ? okJson(authData) : failJson("error")
    },
    notAuth: () => {
        return notAuthJson()
    }
}