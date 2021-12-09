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
//坐标点
const points = {}

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
//记录日志
const l = (s) => {
    // noinspection JSUnresolvedFunction
    log(s)
}
//RGB数字转换为2位16进制数
const intTo16 = (s) => {
    // noinspection JSCheckFunctionSignatures
    let x = s.toString(16);
    return (x.length === 1 ? "0" : "") + x;
}
const addDefaultPoints = () => {
    l("导入预设坐标")
    addPoint("返回", 100, 53, 255, 255, 254);
    addPoint("开始", 1200, 650, "#ffffe300");
    addPoint("补给", 1200, 540, "#ffEED600");
    addPoint("妖精自动开", 1180, 220, "#fff76931");
    addPoint("妖精自动关", 1180, 220, "#ffe6e3e6");
    addPoint("用户界面", 50, 500, 202, 18, 52);
    addPoint("计划模式关", 150, 605, "#ffffffff");
    addPoint("计划模式开", 150, 605, "#ffffbe3a");
    addPoint("妖精指令面板", 1185, 144, 193, 193, 193);
    addPoint("部署界面", 1220, 155, "#ff19698c");
    addPoint("主线选关", 1216, 105, "#ffd6dbde");
    addPoint("结算", 1265, 710, 255, 219, 107);
    addPoint("战斗按钮", 860, 490, "#ffde9e08");
    addPoint("活动", 100, 525, "#ffde9e08");
    addPoint("活动2", 100, 615, "#ffde9e08");
    addPoint("取消选中", 50, 300);

    l("导入导航坐标")
    addPoint("导航", 215, 65, 255, 255, 255);
    addPoint("导航战斗", 145, 232, 255, 255, 255);
    addPoint("导航工厂", 424, 235, 253, 253, 253);
    addPoint("导航活动", 420, 360);

    addPoint("仓库界面", 1160, 380, 255, 255, 255)


    l("导入过滤器坐标")
    addPoint("六星", 600, 180);
    addPoint("五星", 800, 180);
    addPoint("四星", 1000, 180);
    addPoint("三星", 600, 270);
    addPoint("种类0", 600, 400);
    addPoint("HG", 600, 400);
    addPoint("种类1", 800, 400);
    addPoint("SMG", 800, 400);
    addPoint("种类2", 1000, 400);
    addPoint("RF", 1000, 400);
    addPoint("种类3", 600, 480);
    addPoint("AR", 600, 480);
    addPoint("种类4", 800, 480);
    addPoint("MG", 800, 480);
    addPoint("种类5", 1000, 480);
    addPoint("SG", 1000, 480);
    addPoint("满级", 611, 611);
    addPoint("降序", 1200, 477);

    l("导入关卡坐标")
    addPoint("关卡1", 700, 300);
    addPoint("关卡2", 700, 400);
    addPoint("关卡3", 700, 520);
    addPoint("关卡4", 700, 650);
    addPoint("关卡5", 700, 475);
    addPoint("关卡6", 700, 600);
    addPoint("普通作战", 1000, 600);
    addPoint("小活动关卡1", 600, 200);
    addPoint("小活动关卡2", 1000, 300);
    addPoint("小活动关卡3", 600, 500);
    addPoint("小活动关卡4", 1000, 550);
    addPoint("小活动普通作战", 1000, 570, 253, 179, 0);


    l("导入修理")
    addPoint("血量缺少", 0, 520, 0, 0, 0);
    addPoint("修理确认", 950, 520, 255, 181, 2);

    l("导入重开")
    addPoint("终止作战", 320, 45);
    addPoint("重新作战", 490, 470, "#ffde4142");
    addPoint("撤退", 1000, 650);
    addPoint("确定撤退", 760, 495);

    l("导入强化")
    addPoint("强化完成", 800, 230, 255, 182, 5);
    addPoint("显示种类", 1170, 300)
    addPoint("强化目标", 300, 200)
    addPoint("强化狗粮", 500, 200)
    addPoint("人形强化", 100, 300, 255, 255, 255)
    addPoint("人形强化界面", 100, 300, 254, 179, 0)
    addPoint("强化界面", 1040, 540, 47, 202, 177)
    addPoint("强化按钮", 1170, 620, "#ffffb600");
    addPoint("强化确认", 800, 620, "#ffffb600");
    addPoint("满仓1", 730, 470, "#ffffffff");
    addPoint("满仓2", 480, 470, "#ffffe308");
    addPoint("狗粮选择", 1200, 115, "#ffffffff");
    addPoint("拆解标签", 100, 400, 254, 179, 0);
    addPoint("选择装备", 515, 195, 253, 253, 253);

    l("导入预设梯队")
    addPoint("预设1", 1000, 75)
    addPoint("预设2", 1000, 200)
    addPoint("强制套用白", 585, 435, "#ffffffff")
    addPoint("强制套用橙", 585, 435, "#ffffb200")
    addPoint("编队", 195, 620, "#fff77d00");
    addPoint("预设界面", 1265, 110, 25, 105, 138);
    addPoint("预设x", 1265, 260, 255, 125, 2);
    addPoint("套用预设", 1200, 650, "#ffFFB200");
    addPoint("梯队界面", 1215, 150, 14, 55, 72);
    addPoint("预设选择", 682, 360, 253, 136, 0);


    l("导入预设坐标:完成")
}

const addPoint = (name, x, y, r, g, b) => {
    let color = g ? ("#ff" + intTo16(r) + intTo16(g) + intTo16(b)) : r;
    points[name] = {
        name: name,
        x: x,
        y: y,
        color: color
    };
    l("加载坐标点 " + name + " x:" + x + " y:" + y)
}
//定时检查已运行时长
const checkTimeInterval = () => {
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

const init = () => {
    setEnd();
    checkTimeInterval();
    requestPermission();
    addDefaultPoints();
}

const main = () => {
    init();

    sleepX(999)
}

const m = {
    main: main,
    sleepX: sleepX,
    addPoint: addPoint,
}

module.exports = m;