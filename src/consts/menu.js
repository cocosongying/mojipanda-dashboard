const Menu = {
    UserList: 1,
    Profile: 99,
    ALL: [
        {
            id: 1,
            name: '用户管理',
            url: 'userlist',
            component: 'UserList',
            class: 'fa fa-user',
            title: '用户管理',
            subtitle: '',
            level: ["用户管理"],
            path: [""],
        },
        {
            id: 2,
            name: '用户管理2',
            url: 'userlist2',
            class: 'fa fa-user'
        },
        {
            id: 3,
            name: '用户管理3',
            url: '#',
            class: 'fa fa-user',
            child: [
                {
                    id: 301,
                    name: '用户管理301',
                    url: 'userlist301',
                    class: 'fa fa-user'
                },
                {
                    id: 302,
                    name: '用户管理302',
                    url: 'userlist302',
                    class: 'fa fa-user'
                },
            ]
        },
        {
            id: 99,
            name: '基本信息',
            title: '我的基本信息',
            subtitle: '',
            url: 'profile',
            level: ["基本信息"],
            path: [""],
        }
    ]
}

export default Menu