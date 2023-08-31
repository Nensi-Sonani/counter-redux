import { DEC, INC } from "./ActionType";

let initialState=0;
export const reducer=(state = initialState,action)=>{
    switch (action.type){
        case INC:
            return state + 1;
            break;
        case DEC:
            return state -1;
            break;
        default:
            return state;
            break;
    }
}