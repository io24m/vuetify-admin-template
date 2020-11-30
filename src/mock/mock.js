import Mock from 'mockjs';
import auth from './data/auth';

export default {
    bootstrap() {
        // Mock.mock(/\/logout/, 'post', auth.logout);
        Mock.mock('/login', 'post', auth.login);
        Mock.mock('/logout', 'post', auth.logout);
        Mock.mock('/authData', 'post', auth.authData);
    }
}