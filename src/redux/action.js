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
                    case 'Ios':
                    type = ActionType.GANK_IOS;
                        break
                    case '前端':
                    type = ActionType.GANK_FRONT;
                        break
                }
                dispatch(() => {
                    return {
                        type: type,
                        datas: res.results
                    }
                })
            }
        })
    }
    // return {
    //     type: 'GANK/ANDROID',
    //     datas:[
    //         {
    //             "_id": "5a30a105421aa90fe2f02cd8", 
    //             "createdAt": "2017-12-13T11:39:49.295Z", 
    //             "desc": "\u56fe\u89e3ConcurrentHashMap", 
    //             "publishedAt": "2017-12-19T12:00:28.893Z", 
    //             "source": "web", 
    //             "type": "Android", 
    //             "url": "https://mp.weixin.qq.com/s?__biz=MzIwMzYwMTk1NA==&mid=2247488667&idx=1&sn=9f17d205c9deff7b571c3280ca2b1e10", 
    //             "used": true, 
    //             "who": "\u9648\u5b87\u660e"
    //           }, 
    //           {
    //             "_id": "5a33790f421aa90fe2f02ce0", 
    //             "createdAt": "2017-12-15T15:26:07.407Z", 
    //             "desc": "Android\u57ce\u5e02\u9009\u62e9\u5668\u6e90\u7801\u5b9e\u73b0", 
    //             "publishedAt": "2017-12-19T12:00:28.893Z", 
    //             "source": "web", 
    //             "type": "Android", 
    //             "url": "https://mp.weixin.qq.com/s/ndc2vSlQ0cG7uxj_eV5M1w", 
    //             "used": true, 
    //             "who": "D_clock"
    //           }
    //     ]
    // }
}
export const actionGankDates = () => {
    return (dispatch) => {
        return Api.getGankTime().then(res => {
            if(res){
                dispatch(() => {
                    return{
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