import { OrderConstants } from "../constants/orderConstants";
import {UserConstants} from "../constants/userConstants";
import axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: OrderConstants.Create.REQUEST
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post("/api/orders", order, config);

        dispatch({
            type: OrderConstants.Create.SUCCESS,
            success: true,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: OrderConstants.Create.FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};