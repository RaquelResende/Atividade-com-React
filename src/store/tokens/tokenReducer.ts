import { Action } from "./actions"

interface TokenState {
    tokens:string 
}
const initialState= {
    tokens:""
}

export default TokenState

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){

        case "ADD_TOKEN": {
            return {tokens: action.payload}
        }
        default:
            return state
        }
    }
