export const userService = {
    login,
    logout,
    register,
    getAll,
    delete: _delete,
    getUser: _getUser
};

function login (username:string, password:string){
    return new Promise((resolve: any, reject:any) =>{
        let users = JSON.parse(localStorage.getItem('users') || '[]')
        let filteredUsers = users.filter((user:any) => {
            return user.username === username && user.password === password;
        });

        if (filteredUsers.length) {
            let user = filteredUsers[0];
            let userResponse = {
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName
        };
        localStorage.setItem('user', JSON.stringify(userResponse));
        resolve(userResponse);
        } else {
            reject('Username or password is incorrect');
        }
    });
}

function logout() {
    return new Promise((resolve: any,) =>{
        localStorage.removeItem('user');
        resolve({});
    });
}

function getAll() {
    return new Promise((resolve: any) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        resolve(users)
    })
}

function register(newUser: any) {
    return new Promise((resolve: any, reject: any) =>{
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        let duplicateUser = users.filter((user: any) => { return user.username === newUser.username; }).length;
        if (duplicateUser) {
            reject({ ok: false, user: newUser, error: 'Usuario Duplicado'})
        }
        
        newUser.id = users.length ? Math.max(...users.map((user: any) => user.id)) + 1 : 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        resolve({ ok: true, user: newUser})
    })

}

function _delete(id:number) {
    return new Promise((resolve: any) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        const newList =  users.filter((item:any) => item.id !== id);
        localStorage.setItem('users', JSON.stringify(newList));
        resolve(newList);
    })
}

function _getUser(){
    return new Promise((resolve: any) => {
        const user = JSON.parse(localStorage.getItem('user') || '{}')
        resolve(user);
    })
}
