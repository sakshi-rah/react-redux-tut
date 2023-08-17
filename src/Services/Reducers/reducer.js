import { Add_To_Card, Remove_To_Cart } from '../constants'
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case Add_To_Card:
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
            case Remove_To_Cart:
            // console.warn("reducer",action)
            state.pop();
            return [
                ...state,
            ]
        default:
            return state
    }


}