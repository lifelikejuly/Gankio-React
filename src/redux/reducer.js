import * as actionType from './actionType';

const nameInitialState = {
    items: [],
    dates: [],
    today: {},
    classify: actionType.GANK_ANDROID
}
export default (state = nameInitialState, action) => {
    switch (action.type) {
        case actionType.GANK_TIME:
            state.dates = action.dates
            return state
        case actionType.GANK_TODAY:
            state.today = action.datas
            return state
        case actionType.GANK_ANDROID:
            let stateInstall = state;
            stateInstall.items = action.datas
            stateInstall.classify = action.type
            return {
                items: action.datas,
                classify: action.type
            }
        default:
            return state
    }
}