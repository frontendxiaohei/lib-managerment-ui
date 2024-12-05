import request from '../utils/request';

export async function list() {
    return await request.get('/book/list')
}