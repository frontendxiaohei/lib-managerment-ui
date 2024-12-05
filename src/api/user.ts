import request from '../utils/request';


export async function register(username: string, password: string) {
    return await request.post('/user/register', {
        username,
        password,
    })
}

export async function login(username: string, password: string) {
    return await request.post('/user/login', {
        username,
        password,
    })
}

