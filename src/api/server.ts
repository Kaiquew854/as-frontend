import { getCookie } from "cookies-next"
import {cookies} from 'next/headers'
import {req} from './axios'

export const pingAdmin = async ()=>{
    try {
        //pegando cookies do servidor, cokie chamado token
        const token = getCookie('token', {cookies})

        await req.get('/admin/ping', {
            headers: {
                'Authorization': `${token}`
            }
        });

        return true;
    } catch(err){return false};
};