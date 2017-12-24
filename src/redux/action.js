import * as Api from '../api/gankApi';
import * as ActionType from '../redux/actionType';
export const actionGankClassifyDatas = (classify, page) => {
    return (dispatch) => {
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
                dispatch(() => {
                    return {
                        type: ActionType.GANK_TIME,
                        dates: res.results
                    }
                })
            }
        })
    }
}

export const actionGankToday = (date) => {
    return (dispatch) => {
        return Api.getLasterGank(date).then(res => {
            dispatch(() => {
                return {
                    type: ActionType.GANK_TODAY,
                    datas: res.results
                }
            })
        })
    }
}

export const action = (type, datas) => {
    return {
        type: type,
        datas: datas
    }
}