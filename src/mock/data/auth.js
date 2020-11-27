import {
    okJsonify,
    failJsonify
} from './utils.js'

const users = {
    admin: {
        account: 'admin',
        token: 'admin-token'
    }
}


export default {
    login: (params) => {
        console.log(params)
        const {
            userName
        } = JSON.parse(params.body);
        const user = users[userName];
        return user ? okJsonify(user.token) : failJsonify("error")
    },
    logout: () => {
        return failJsonify("error")
    }
}