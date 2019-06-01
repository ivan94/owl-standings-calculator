import { REQUEST_SCHEDULE, RECEIVE_SCHEDULE } from "../actions";

const initialState = {
    stages: [],
    loading: true
}

export function owlCalcReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_SCHEDULE:
            return { ...state, loading: true };
        case RECEIVE_SCHEDULE:
            return { ...state, stages: action.schedule, loading: false }
        default:
            return state
    }
}