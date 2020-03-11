    export let menuData: Array<{id: number,title: string,icon: string ,page:string}> = [
        {
            id: 1,
            title: 'Pedidos',
            icon: "fa fa-th-list",
            page: '/orders'
        },
        {
            id: 2,
            title: 'Filtros',
            icon: "fa fa-filter",
            page: '/home'
        },
        {
            id: 3,
            title: 'Gestion',
            icon: "fa fa-pencil-square-o",
            page: '/home'
        },
        {
            id: 4,
            title: 'Eliminadas',
            icon: "fa fa-trash",
            page: '/home'
        },
        {
            id: 5,
            title: 'Destinatarios',
            icon: "fa fa-user",
            page: '/home'
        },
        {
            id: 6,
            title: 'Usuarios',
            icon: "fa fa-users",
            page: '/users'
        }];