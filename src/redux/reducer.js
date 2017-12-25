import * as actionType from './actionType';

const nameInitialState = {
    items: [],
    dates: [],
    today: {},
    classify: actionType.GANK_ANDROID,
    loading: true
}
export default (state = nameInitialState, action) => {
    switch (action.type) {
        case actionType.GANK_TIME:
            let stateTime = state;
            stateTime.dates = action.dates;
            stateTime.loading = false;
            return stateTime
        case actionType.GANK_TODAY:
            state.today = action.datas
            return state
        case actionType.GANK_ANDROID:
        case actionType.GANK_IOS:
        case actionType.GANK_APP:
        case actionType.GANK_MORE:
        case actionType.GANK_RECON:
        case actionType.GANK_VIDEO:
        case actionType.GANK_FRONT:
        case actionType.GANK_GIRL:
            let stateInstall = state;
            stateInstall.items = action.datas
            stateInstall.classify = action.type
            return {
                items: action.datas,
                classify: action.type,
                loading: false
            }
        default:
            return state
    }
}
function installState(state, key, data) {
    let stateInstall = state;
    stateInstall[key] = data;
    return stateInstall;
}