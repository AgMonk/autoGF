var t = {}
var p = {};
var config = {
    delay: 500, //基础等待时长
    eatType: "", //强化目标枪种
    eatStart: 0, //强化目标起始位置
    //fixStart: 250, //修理起点坐标,246 = 大破 293 = 掉1编制
    fixMod: 1, //修理模式,0=不检查修理,1=检查修理,2=检查修理并在发现可修理目标时停止
    threshold: 4, //颜色比较灵敏度，0为完全相等，默认4，建议6+
    level: "", //关卡
    minute: 0, //运行时长 在倒计时结束前5分钟停止脚本,设为0时为不停止.
}
var counter = {
    timer_start: 0, //计时器起点
    timer_end: 0, //计时器终点
    timer_last: 0, //本次战斗时长
    times: 1, //当前把数
    timer_sum: 0, //总时长
}
t.p = p;
t.config = config;
t.counter = counter;

//临时用变量

// 初始化
t.defaultPosition = function() { //导入预设坐标
    log("导入预设坐标")
    t.addPoint("返回", 100, 53, 255, 255, 254);
    t.addPoint("开始", 1200, 650, "#ffffe300");
    t.addPoint("补给", 1200, 540, "#ffEED600");
    t.addPoint("妖精自动开", 1180, 220, "#fff76931");
    t.addPoint("妖精自动关", 1180, 220, "#ffe6e3e6");
    t.addPoint("用户界面", 50, 500, 202, 18, 52);
    t.addPoint("计划模式关", 150, 605, "#ffffffff");
    t.addPoint("计划模式开", 150, 605, "#ffffbe3a");
    t.addPoint("妖精指令面板", 1185, 144, 193, 193, 193);
    t.addPoint("部署界面", 1220, 155, "#ff19698c");
    t.addPoint("主线选关", 1216, 105, "#ffd6dbde");
    t.addPoint("结算", 1265, 710, 255, 219, 107);
    t.addPoint("战斗按钮", 860, 490, "#ffde9e08");
    t.addPoint("活动", 100, 525, "#ffde9e08");
    t.addPoint("活动2", 100, 615, "#ffde9e08");
    t.addPoint("取消选中", 50, 300);

    log("导入导航坐标")
    t.addPoint("导航", 215, 65, 255, 255, 255);
    t.addPoint("导航战斗", 145, 232, 255, 255, 255);
    t.addPoint("导航工厂", 424, 235, 253, 253, 253);
    t.addPoint("导航活动", 420, 360);

    t.addPoint("仓库界面", 1160, 380, 255, 255, 255)


    log("导入过滤器坐标")
    t.addPoint("六星", 600, 180);
    t.addPoint("五星", 800, 180);
    t.addPoint("四星", 1000, 180);
    t.addPoint("三星", 600, 270);
    t.addPoint("种类0", 600, 400);
    t.addPoint("HG", 600, 400);
    t.addPoint("种类1", 800, 400);
    t.addPoint("SMG", 800, 400);
    t.addPoint("种类2", 1000, 400);
    t.addPoint("RF", 1000, 400);
    t.addPoint("种类3", 600, 480);
    t.addPoint("AR", 600, 480);
    t.addPoint("种类4", 800, 480);
    t.addPoint("MG", 800, 480);
    t.addPoint("种类5", 1000, 480);
    t.addPoint("SG", 1000, 480);
    t.addPoint("满级", 611, 611);
    t.addPoint("降序", 1200, 477);

    log("导入关卡坐标")
    t.addPoint("关卡1", 700, 300);
    t.addPoint("关卡2", 700, 400);
    t.addPoint("关卡3", 700, 520);
    t.addPoint("关卡4", 700, 650);
    t.addPoint("关卡5", 700, 475);
    t.addPoint("关卡6", 700, 600);
    t.addPoint("普通作战", 1000, 600);
    t.addPoint("小活动关卡1", 600, 200);
    t.addPoint("小活动关卡2", 1000, 300);
    t.addPoint("小活动关卡3", 600, 500);
    t.addPoint("小活动关卡4", 1000, 550);
    t.addPoint("小活动普通作战", 1000, 570, 253, 179, 0);


    log("导入修理")
    t.addPoint("血量缺少", 0, 520, 0, 0, 0);
    t.addPoint("修理确认", 950, 520, 255, 181, 2);

    log("导入重开")
    t.addPoint("终止作战", 320, 45);
    t.addPoint("重新作战", 490, 470, "#ffde4142");
    t.addPoint("撤退", 1000, 650);
    t.addPoint("确定撤退", 760, 495);

    log("导入强化")
    t.addPoint("强化完成", 800, 230, 255, 182, 5);
    t.addPoint("显示种类", 1170, 300)
    t.addPoint("强化目标", 300, 200)
    t.addPoint("强化狗粮", 500, 200)
    t.addPoint("人形强化", 100, 300, 255, 255, 255)
    t.addPoint("人形强化界面", 100, 300, 254, 179, 0)
    t.addPoint("强化界面", 1040, 540, 47, 202, 177)
    t.addPoint("强化按钮", 1170, 620, "#ffffb600");
    t.addPoint("强化确认", 800, 620, "#ffffb600");
    t.addPoint("满仓1", 730, 470, "#ffffffff");
    t.addPoint("满仓2", 480, 470, "#ffffe308");
    t.addPoint("狗粮选择", 1200, 115, "#ffffffff");
    t.addPoint("拆解标签", 100, 400, 254, 179, 0);
    t.addPoint("选择装备", 515, 195, 253, 253, 253);

    log("导入预设梯队")
    t.addPoint("预设1", 1000, 75)
    t.addPoint("预设2", 1000, 200)
    t.addPoint("强制套用白", 585, 435, "#ffffffff")
    t.addPoint("强制套用橙", 585, 435, "#ffffb200")
    t.addPoint("编队", 195, 620, "#fff77d00");
    t.addPoint("预设界面", 1265, 110, 25, 105, 138);
    t.addPoint("预设x", 1265, 260, 255, 125, 2);
    t.addPoint("套用预设", 1200, 650, "#ffFFB200");
    t.addPoint("梯队界面", 1215, 150, 14, 55, 72);
    t.addPoint("预设选择", 682, 360, 253, 136, 0);


    log("导入预设坐标:完成")
}
t.request = function() { //获取截图权限并切换进入游戏
    setScreenMetrics(720, 1280);
    t.sleep(4)
    if (!requestScreenCapture(true)) {
        toastLog("请求截图失败");
        exit();
    }
    log("已获取截图权限")
    t.sleep(2)
    recents()
    t.sleep(3)
    click("少女前线")
    log("进入游戏")
}

t.init = function() { //初始化
    t.request()
    t.defaultPosition()
}


//基础性方法
t.to16 = function(x) {
    var s = x.toString(16);
    if (s.length == 1) {
        s = "0" + s;
    }
    return s;
}
t.addPoint = function() { //增加point对象至p
    var a = arguments
    var name = a[0];
    var x = a[1];
    var y = a[2];
    var color = a[3];
    if (a[4]) {
        color = "#ff" + t.to16(a[3]) + t.to16(a[4]) + t.to16(a[5]);
    }
    var point = {
        name: name,
        x: x,
        y: y,
        color: color
    };
    t.p[name] = point;
    log(t.p[name]);
}

function capturescreen() { //稳定截图模块
    var a;
    while (true) {
        if (a = captureScreen()) {
            return a;
        }
    }
}
// point={name:"坐标",x:123,y:321,color:"#ffffffff"}
t.coloris = function(x) { //判断颜色是否为指定值,参数为point对象
    var point = t.checkPoint(x);
    //log("确认颜色开始")
    //截图
    var img, p, c, msg;
    // do {
    img = capturescreen();
    sleep(100)
    //  log("截图")
    // } while (!(img && img.getWidth() > point.x && img.getHeight() > point.y))

    p = findColor(img, point.color, {
        region: [point.x - 2, point.y - 2, 4, 4],
        threshold: t.config.threshold
    });
    c = images.pixel(img, point.x, point.y);
    msg = colors.toString(c);

    // log("确认颜色结束")
    if (p) {
        return true;
    }
    if (colors.isSimilar(msg, point.color, t.config.threshold)) {
        return true
    }
    // log(msg +"   "+ point.x + "  " + point.y)
    return false;
}
t.sleep = function(x) { //x倍延迟
    var ti = x ? x : 1;
    var time = t.config.delay * ti;
    // log("等待(s):" + time / 1000);
    sleep(time);
    // log("等待(s):" + time / 1000+"结束")
}
t.checkPoint = function(x) { //检查是否为可用point
    if (t.p[x]) {
        return t.p[x];
    }
    if (t.p[x.name]) {
        return x;
    }
    if (x.y && x.x) {
        return x;
    }
    toastLog("不存在该颜色： " + x + " 程序停止");
    exit();
}
t.filter = function() { //种类过滤器
    var a = arguments;
    if (!a[0]) {
        a = new Array();
        a[0] = config.eatType;
    }
    t.wait("狗粮选择");
    t.sleep(2);
    t.click("显示种类");
    t.sleep(3);
    for (i = 0; i < a.length; i++) {
        log(a[i]);
        t.click(a[i]);
        t.sleep(0.5);
    }
    t.sleep(2);
    t.click("显示种类");
    t.sleep(4);
}
t.eat = function() { //强化
    var type = t.config.eatType;

    t.click("强化目标");
    t.wait("狗粮选择");
    if (type != "") {
        t.filter(type);
    } else {
        t.sleep(4)
    }
    t.forClick(40);
    t.sleep(2)
    t.click("强化狗粮");
    t.wait("狗粮选择");
    t.sleep(4);
    if (t.config.level != "1-2") {
        switch (type) {
            case "AR":
                t.filter("HG", "AR")
                break;
            case "SMG":
                t.filter("HG", "SMG")
                break;
            case "RF":
                t.filter("HG", "RF", "AR")
                break;
            case "MG":
                t.filter("HG", "AR", "RF")
                break;
            case "HG":
                t.filter("HG", "AR")
                break;
            case "SG":
                t.filter("HG")
                break;
            default:
                t.filter("HG", "AR")
        }
    }
    // t.click("强化按钮");
    // t.sleep(2);

    t.sleep(2);
    t.confirm(1);
    t.wait("强化界面");
}
t.destroy = function() { //拆解人形
    var type = t.config.eatType;

    if (t.config.level != "1-2") {
        //拆2星
        t.click("拆解标签")
        t.sleep(2);
        t.click("强化目标");
        t.sleep(4);
        if (t.coloris("狗粮选择")) {
            switch (type) {
                case "SMG":
                case "RF":
                    t.filter("MG")
                    break;
                case "AR":
                case "MG":
                case "HG":
                case "SG":
                    break;
            }
            t.click("强化按钮")
            t.sleep(4);
            if (t.coloris("强化按钮")) {
                t.confirm();
            } else {
                t.sleep(2);
                t.click("返回");
            }
            t.wait("拆解标签");
        }
        //拆核心

        t.click("强化目标");
        t.sleep(4);
        if (t.coloris("狗粮选择")) {
            switch (type) {
                case "SMG":
                case "RF":
                    t.filter("三星", "四星", "MG")
                    t.config.eatType = t.config.eatType == "RF" ? "SMG" : "RF";
                    log("切换为:" + t.config.eatType);
                    break;
                case "AR":
                case "MG":
                case "HG":
                case "SG":
                default:
                    t.filter(
                        "三星", "四星"
                        //      ,"五星"
                    )

                    break;
            }
            t.forClick();

        }
    }
}

t.destroyeq = function() { //拆解装备
    t.click("导航");
    t.sleep(4);
    t.click("导航工厂");
    t.sleep(3);
    t.wait("人形强化")
    t.sleep(3);
    t.click("拆解标签");
    t.sleep(3);
    //拆解2星
    t.click("选择装备");
    t.sleep(4);
    t.click("强化按钮")
    t.sleep(4);
    // if (t.coloris("强化按钮")) {
    t.confirm();
    // } else {
    //    t.sleep(2);
    //     t.click("返回");
    //   }
    t.wait("拆解标签");
    //拆解3/4星
    t.click("选择装备");
    t.sleep(4);
    //   t.filter("三星", "四星")
    t.forClick();
}
t.forClick = function() { //遍历人形
    var x0 = 100;
    var y0 = 250;
    var width = 180;
    var height = 300;
    var eatStart = t.config.eatStart;
    var x = arguments[0] ? arguments[0] : 1;
    //选择强化目标
    log("遍历目标" + eatStart)
    for (var i = Math.floor(eatStart / 6); i < 2; i++) {
        for (var j = (eatStart % 6); j < 6; j++) {
            if (t.coloris("强化界面")) {
                return
            }
            t.click(x0 + width * j, y0 + height * i);
            t.sleep(0.1 * x);
        }

    }
    t.sleep(2);
    if (t.coloris("强化按钮")) {
        t.click("强化按钮");
        t.confirm();
    } else {
        t.click("返回");
    }
    log("核心已选中");
}
t.confirm = function(x) { //确认拆解/强化
    t.click("强化按钮");
    t.sleep(1);
    t.click("强化按钮");
    t.sleep(2);
    t.click("强化按钮");
    t.sleep(2);
    if (x) {
        t.wait("强化完成");
    }
    t.click("强化确认");
    t.sleep(2);
    t.click("强化确认");
    t.sleep(2);
    t.click("强化确认");
    t.sleep(2);
    t.click("强化确认");
    t.sleep(2);
}

//功能性方法
t.scale = function() { //缩放
    log("缩放")
    gestures([500, [800, 600],
        [500, 300]
    ], [500, [200, 100],
        [400, 300]
    ]);
    t.sleep(3)
}
t.click = function(x, y) { //点击
    if (y) {
        click(x, y)
        log("点击：" + "(" + x + "," + y + ")" + " " + "<" + counter.times + ">")
    } else {
        var point = t.checkPoint(x);
        click(point.x, point.y);
        log("点击：" + "(" + point.x + "," + point.y + ") " + point.name + " <" + counter.times + ">")
    }
    sleep(50);
}
t.wait = function(x) { //等待
    var point = t.checkPoint(x);

    log("等待: " + point.name);
    while (!t.coloris(point)) {
        t.sleep(1);
    }
    log("通过: " + point.name);
}
t.stableClick = function() { //稳定点击
    //点击直到颜色消失
    var a = arguments
    var p1 = t.p[a[0]];
    var p2 = t.p[a[1]] ? t.p[a[1]] : p1;
    var time = a[2] ? a[2] : 2; //缺省为2倍延迟
    t.wait(p1);
    //  t.sleep()
    log("机场开始")
    do {
        t.click(p2)
        t.sleep(time);
        if (t.coloris("修理确认")) {
            t.click(730, 480);
            t.sleep(1);
        }
    } while (t.coloris(p1))
    log("机场结束")
}
t.sc = t.stableClick;
t.plan = function(x) { //计划模式
    t.wait("用户界面");
    log("计划模式");

    do {
        t.sc("计划模式关", "计划模式关", 3);
    } while (!t.coloris("计划模式开"))


}
t.airport = function(x) { //点击机场
    var point = t.checkPoint(x);
    do {
        t.sc("用户界面", x, 4);
        t.sleep(3)
    } while (!t.coloris("部署界面"))
    //t.wait("部署界面")
}
t.fix = function(startpoint) { //修理检查
    if (t.config.level == "8-1n") {
        return
    }
    var fixm = (new Date().getHours() >= 0 && new Date().getHours() <= 7) ? 1 : 2
    fixm = (t.config.fixMod == 1) ? 1 : fixm;
    if (t.config.fixMod == 0) return;
    log(startpoint)
    log("修理检查");
    var img;
    var width = 186;
    var point = t.p["血量缺少"];

    do {
        img = captureScreen();
        sleep(100)
    } while (!img)
    t.sleep()

    for (var i = 0; i <= 4; i++) {
        var p = findColor(captureScreen(), point.color, {
            region: [startpoint + point.x + i * width - 2, point.y - 1, 5, 3],
            threshold: t.config.threshold
        });
        log((startpoint + point.x + i * width - 2) + " " + (point.y - 2))
        if (p) {
            if (fixm == 2) {
                toastLog("发现低血量,程序停止")
                device.vibrate(2000);
                exit();
            }
            t.click(p.x, p.y);
            t.wait("修理确认")
            t.click("修理确认");
            t.sleep(4);
        }

    }
    t.wait("部署界面")
}
t.autoSkill = function(x) { //妖精自动技能
    if (x == "on") {
        if (t.coloris("妖精自动关")) {
            t.click("妖精自动开");
            log("开启自动");
        }

    } else {
        if (t.coloris("妖精自动开")) {
            t.click("妖精自动关");
            log("关闭自动");
        } else {
            log("自动技能出于关闭");
        }
    }
    t.wait("用户界面");
}
t.retreat = function() { //撤退
    t.click("撤退");
    t.sleep(4);
    t.click("确定撤退");
    t.wait("用户界面");
    log("撤退完毕");
}
t.restart = function() { //重开
    do {
        t.click("终止作战");
        t.sleep(2);
    } while (!t.coloris("重新作战"))
    t.click("重新作战");
    log("重新作战");
    t.sleep(6);
}
t.up = function() { //上拉
    log("上拉");
    gestures([500, [800, 150],
        [800, 1000]
    ]);
    t.sleep();
}
t.down = function() { //下拉
    log("下拉");
    gestures([500, [800, 710],
        [800, 50]
    ]);
    t.sleep();
}
t.eatCheck = function() { //满仓检查
    t.sleep(2);
    if (t.coloris("满仓1") && t.coloris("满仓2")) {
        t.click("满仓1");
        if (t.config.level == "8-1n") {
            t.wait("强化界面");
        } else {
            t.wait("人形强化界面");
        }
        if (t.config.level == "12-4e") {
            toastLog("统计掉落")
            device.vibrate(2000);
            // exit();
        }

        if (t.config.level.indexOf("n") == -1) {
            //   t.eat();
            t.destroy();
        } else {
            t.destroyeq();
        }
        t.sleep(4);

        t.go();
        //如果为撤退练级,需要重新部署
        switch (t.config.level) {
            case "11-5":
            case "10-4e":
            case "8-1n":
            case "4-4n":
                bushu();
        }
    }
    t.wait("用户界面");
}
t.go = function() { //进入主线关卡
    var level = t.config.level
    var i = level[level.indexOf('-') + 1]

    t.click("导航")
    t.sleep(3)

    if (level.indexOf('-') != -1) {
        t.click("导航战斗");
        t.wait("主线选关");
        t.sleep(3);
        if (i == "5" || i == "6") {
            t.down();
        }
        t.sleep(2);
        t.click("关卡" + i);
        t.sleep(6);
        t.click("普通作战");
        t.sleep(4);
        t.eatCheck();

    }

    if (level.indexOf('活动') != -1) {
        t.click("导航活动");
        goEvent();
    }
}
t.accounts = function() { //战役结算
    t.wait("结算");
    t.sleep(6);
    for (i = 0; i < 6; i++) {
        t.click("结算");
        t.sleep(2);
    }
    t.click("结算");
    t.sleep(4);
    t.click("结算");
    t.sleep(4);
}
t.combat = function() { //等待战斗结束
    toastLog("等待战斗" + "<" + counter.times + ">");
    while (true) {
        if (t.coloris("计划模式关") && t.coloris("用户界面")) {
            toastLog("发现界面")
            t.sleep(8);
            if (t.coloris("计划模式关")) {
                break;
            }
        }
        t.sleep(2);
    }

    log("战斗结束" + "<" + counter.times + ">")
    t.sleep(2);
}
t.setteam = function(x) { //切换预设梯队

    if (x == 1) {
        log("打手检修")
        t.fix(212);
    }
    if (x == 2) {
        log("老板检修")
        t.fix(284);
    }
    toastLog("编队切换");
    t.sc("编队", "编队");
    t.sc("梯队界面", "套用预设", 6);
    t.wait("预设界面")
    t.sleep(2);
    t.click("预设x")
    // t.sc("预设", "预设", 4);

    t.wait("预设选择")
    t.sleep(2);
    t.click("预设" + x);
    t.sleep(3);
    t.click("套用预设");
    t.sleep(4);


    if (t.coloris("强制套用白")) {
        t.click("强制套用白")
        t.sleep(1);
    }
    if (t.coloris("强制套用橙")) {
        t.sleep(1);
        t.click("套用预设");
        t.sleep(1);
    }
    //  t.sc("预设", "套用预设");
    t.wait("预设界面")
    t.sleep(2);
    t.click("套用预设");
    t.sc("梯队界面", "返回");
    toastLog("编队切换完毕")
    t.wait("用户界面")
}

//main
t.main = function() {
    if (t.config.level == "") {
        toastLog("请填写关卡名");
        exit();
    }
    if (t.config.minute > 0) {
        toastLog("运行开始,预计运行:" + t.config.minute + "分钟");
    }
    do {
        counter.timer_start = new Date()
        toastLog("第" + counter.times + "把开始")
        t.sleep(4)
        t.wait("用户界面")
        core()

        counter.timer_end = new Date()
        counter.timer_last = counter.timer_end - counter.timer_start;
        counter.timer_sum += counter.timer_last;
        log("第" + counter.times + "把结束")
        log("耗时" + Math.floor(counter.timer_last / 1000) + "秒")
        log("总耗时" + Math.floor(counter.timer_sum / 1000 / 60) + "分钟")
        counter.times += 1;

        if (t.config.minute > 0) {
            var maxMinute = t.config.minute;
            var currentMinute = counter.timer_sum / 1000 / 60;
            if (maxMinute - currentMinute < counter.timer_last / 1000 / 60) {
                toastLog("运行时间到,停止")

                break;
            }
        }
        toastLog("剩余电量" + device.getBattery())
    } while (device.getBattery() > 30)
    device.vibrate(2000);
    home()
    exit();
}

module.exports = t;