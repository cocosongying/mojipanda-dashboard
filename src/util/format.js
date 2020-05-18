const Format = {
    getDate(timestamp, format) {
        let date = new Date(timestamp);
        let dateMap = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1,
                (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let key in dateMap) {
            if (new RegExp("(" + key + ")").test(format)) {
                format = format.replace(RegExp.$1,
                    (RegExp.$1.length == 1) ? (dateMap[key]) :
                        (("00" + dateMap[key]).substr(("" + dateMap[key]).length)));
            }
        }
        return format;
    }
}

export default Format