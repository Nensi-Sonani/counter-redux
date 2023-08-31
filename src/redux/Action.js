import { DEC, INC } from "./ActionType"

export const add =()=>{
    return{
        type:INC
    }
}

export const remove =()=>{
    return{
        type:DEC
    }
}