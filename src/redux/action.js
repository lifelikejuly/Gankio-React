import * as Api from '../api/gankApi';
import * as ActionType from '../redux/actionType';
// all | Android | iOS | 休息视频 | 福利 | 拓展资源 | 前端 | 瞎推荐 | App
export const actionGankClassifyDatas = (classify, page) => {
    return (dispatch) => {
        dispatch(actionLoading())
        return Api.getGankClassifyDatas(classify, page).then(res => {
            if (res) {
                let type;
                switch (classify) {
                    case 'Android':
                        type = ActionType.GANK_ANDROID;
                        break
                    case 'iOS':
                        type = ActionType.GANK_IOS;
                        break
                    case '前端':
                        type = ActionType.GANK_FRONT;
                        break
                    case '休息视频':
                        type = ActionType.GANK_VIDEO;
                        break
                    case '福利':
                        type = ActionType.GANK_GIRL;
                        break
                    case '拓展资源':
                        type = ActionType.GANK_MORE;
                        break
                    case '瞎推荐':
                        type = ActionType.GANK_RECON;
                        break
                    case 'App':
                        type = ActionType.GANK_APP;
                        break
                    default:
                        type = ''
                        break
                }
                dispatch({
                    type: type,
                    datas: res.results
                })
            }
        })
    }
}
export const actionGankDates = () => {
    return (dispatch) => {
        return Api.getGankTime().then(res => {
            if (res) {
                let dates = res.results;
                if (dates) {
                    let date = dates[0].replace(/-/g, '/');
                    actionGankToday(date);
                    Api.getLasterGank(date).then(res => {
                        dispatch({
                            type: ActionType.GANK_TODAY,
                            today: res.results,
                            dates: dates,
                            category: res.category
                        })
                    })
                }
            }
        })
    }
}

export const actionGankToday = (date) => {
    return (dispatch) => {
        return Api.getLasterGank(date).then(res => {
            let dates = res.results;
            dispatch({
                type: ActionType.GANK_TODAY,
                datas: dates
            })
        })
    }
}

export const actionGankMachine = (date) => {
    return (dispatch) => {
        return Api.getLasterGank(date).then(res => {
            let dates = res.results;
            dispatch({
                type: ActionType.GANK_TIMEMACHINE,
                today: res.results,
                category: res.category
            })
        })
    }
}
export const actionLoading = () => {
    return{
        type: ActionType.LOADING
    }
}