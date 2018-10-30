import $ from 'jquery';

export const getLasterGank = (date) => {
    return $.ajax({
        type:'get',
        url:`https://gank.io/api/day/${date}`,
        timeout: 10000,
    })
}
export const getGankTime = () => {
    return $.ajax({
        type:'get',
        url:'https://gank.io/api/day/history',
        timeout: 10000,
    })
}

export const getGankClassifyDatas = (classify,page) => {
    return $.ajax({
        type:'get',
        url:`https://gank.io/api/data/${classify}/10/${page}`,
        timeout: 10000,
    })
}