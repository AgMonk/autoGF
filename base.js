const config = {
    //基础等待时长
    delay: 500,
    //颜色比较灵敏度，0为完全相等，默认4，建议6+
    threshold: 4,
}

const timer = {
    //开始时间
    start: 0,
    //结束时间
    end: 0,
    //结束的提前量
    offset: 2 * 60,
    //当前次数
    current: 1,
    //已运行时长(秒)
    total: 0,
    //已运行时长(分)
    minute: 0,
}

//请求截图权限 切换进游戏
const requestPermission = () => {
    // noinspection JSUnresolvedFunction
    setScreenMetrics(720, 1280);
    sleepX(4);
    // noinspection JSUnresolvedFunction
    if (!requestScreenCapture(true)) {
        info("请求截图失败");
        // noinspection JSUnresolvedFunction
        exit();
    }
    info("已获取截图权限")
    // noinspection JSUnresolvedFunction
    recents()
    sleepX(3)
    // noinspection JSUnresolvedFunction
    click("少女前线")
    info("进入游戏")
}
//获取当前时间（unix秒）
const getNowTime = () => {
    return Math.floor(new Date().getTime() / 1000)
}
//弹出提示
const info = (s) => {
    // noinspection JSUnresolvedFunction
    toastLog(s)
}
//检查已运行时长
const checkTime = () => {
    // noinspection JSUnresolvedVariable
    const thread = threads.start(() => {
        setInterval(function () {
            const now = getNowTime();
            timer.total = now - timer.start
            timer.minute = Math.floor(timer.total / 6) / 10
            if (now > timer.end) {
                info("运行时间已到 总计 " + timer.minute + "分钟")
                // noinspection JSUnresolvedVariable
                device.vibrate(2000);
                // noinspection JSUnresolvedFunction
                home()
                // noinspection JSUnresolvedFunction
                exit();
            }
        }, 2000)
    })
    // noinspection JSUnresolvedFunction
    thread.waitFor();
}
//设置运行时长
const setEnd = () => {
    // noinspection JSUnresolvedFunction
    rawInput("请输入预期运行时长(分钟)", "60", (time) => {
        if (time === null) {
            throw "必须输入运行时长";
        }
        const t = parseInt(time) * 60;
        const now = getNowTime();
        timer.start = now
        timer.end = now + t - timer.offset;
        const endDate = new Date(timer.end * 1000)
        info("预期结束时间：" + endDate.toLocaleString())
    });
}

const sleepX = (x) => {
    // noinspection JSUnresolvedFunction
    sleep(config.delay * x);
}

main = () => {
    setEnd();
    checkTime();
    requestPermission();

    sleepX(999)
}

const m = {
    main: main,
    sleepX: sleepX,
}

module.exports = m;