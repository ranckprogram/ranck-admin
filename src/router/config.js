import Login from '../views/Login';
import Manage from '../views/Manage';
import User from '../views/User';
import Detail from '../views/User/detail';

const config = [{
  path: '/',
  exact: true,
  component: Manage,
}, {
  path: '/login',
  exact: true,
  component: Login,
},
{
  path: '/manage',
  component: Manage,
  routes: [
    {
      path: '/manage/user',
      component: User,
      title: '用户模块',
      icon: 'user',
      routes: [{
        path: '/manage/user/:id',
        component: Detail,
      }]
    }, {
      path: '/dashboard',
      component: User,
      title: '统计模块',
      icon: 'dashboard',
    }
  ]
}]

export default config;
