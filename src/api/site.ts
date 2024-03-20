import { Event } from '@/Types/Event';
import {req} from './axios'
import { SearchResult } from '@/Types/SearchResult';

export const getEvent = async(id: number)=>{
    const json = await req.get(`/events/${id}`);
    return json.data.event as Event ?? false
}

export const searchCPF = async(eventid: number, cpf:string)=>{
    const json = await req.get(`/events/${eventid}/search?cpf=${cpf}`);

    if (json.data.person && json.data.personMatched){
        return json.data as SearchResult;
    }
    return false;
}