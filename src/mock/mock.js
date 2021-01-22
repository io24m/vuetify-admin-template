import Mock from 'mockjs';
import auth from './data/auth';

export default {
    bootstrap() {
        // Mock.mock(/\/logout/, 'post', auth.logout);
        Mock.mock('/auth/login', 'post', auth.login);
        Mock.mock('/logout', 'post', auth.logout);
        Mock.mock('/auth/data', 'post', auth.authData);
    }
}