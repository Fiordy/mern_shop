import {OrderConstants} from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case OrderConstants.Create.REQUEST:
            return {
                loading: true,
            };
        case OrderConstants.Create.SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            };
        case OrderConstants.Create.FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}