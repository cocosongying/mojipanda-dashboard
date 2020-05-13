const Menu = {
    // Keys: ['', ''],
    ALL: [
        {
            id: 1,
            name: '用户管理',
            url: 'userlist',
            class: 'fa fa-user'
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
    ]
}

export default Menu