import * as actionType from './actionType';

const nameInitialState = {
    items: [],
    dates: [],
    today: {},
    category: [],
    classify: actionType.GANK_ANDROID,
    loading: true,
    gankLoding: false,
}
export default (state = nameInitialState, action) => {
    switch (action.type) {
        case actionType.GANK_TIME:
            // let stateTime = state;
            // stateTime.dates = action.dates;
            // stateTime.loading = false;
            return {
                dates: action.dates,
                loading: false,
                category: action.category,
                today: state.today,
                items: state.items,
                classify: state.classify,
                gankLoding:false
            }
        case actionType.GANK_TODAY:
            // state.today = action.today
            return {
                category: action.category,
                today: action.today,
                dates: action.dates,
                items: state.items,
                classify: state.classify,
                loading: false,
                gankLoding:false
            }
        case actionType.GANK_TIMEMACHINE:
            return {
                today: action.today,
                category: action.category,
                dates: state.dates,
                items: state.items,
                classify: state.classify,
                loading: false,
                gankLoding:false
            }
        case actionType.GANK_ANDROID:
        case actionType.GANK_IOS:
        case actionType.GANK_APP:
        case actionType.GANK_MORE:
        case actionType.GANK_RECON:
        case actionType.GANK_VIDEO:
        case actionType.GANK_FRONT:
        case actionType.GANK_GIRL:
            let stateInstall = state;
            if(stateInstall.classify == action.type){
                stateInstall.items.push(...action.datas)
            }else{
                stateInstall.items = action.datas
                stateInstall.classify = action.type
            }
            return {
                items: stateInstall.items,
                classify: stateInstall.classify,
                dates: state.dates,
                category: stateInstall.category,
                today: state.today,
                loading: false,
                gankLoding:false
            }
        case actionType.LOADING:
            return{
                today: state.today,
                category: state.category,
                dates: state.dates,
                items: state.items,
                classify: state.classify,
                loading: false,
                gankLoding:true
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