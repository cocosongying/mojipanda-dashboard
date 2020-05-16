const Home = () => import('@/components/Home.vue');
const Blank = () => import('@/components/menu/Blank.vue');
const Profile = () => import('@/components/menu/Profile.vue');
const UserList = () => import('@/components/menu/UserList.vue');

export default {
    Home,
    Blank,
    Profile,
    UserList,
}