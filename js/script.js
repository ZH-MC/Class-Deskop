const divObj = document.getElementsByClassName('box')[0];

setInterval(() => {
    const nowTime = getNowTime();
    divObj.innerText = nowTime;
})

function getNowTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minite = date.getMinutes();

    return `${hour}:${minite<10?'0'+minite:minite}`
}



let nametxt = document.getElementById('nameArea');
let button = document.getElementById('button_text');

var times = 1; // 随机点名动画运行的次数
var hander = undefined;
var runTime = 30; // 初始速度参数（值越大，初始速度越慢）
var minRunTime = 5; // 速度的最小值参数（值越小，最小速度越快）
var runTimeSpeed = 10; // 速度递增参数（值越大，速度加得越快）

var nameAreaCell = document.getElementById('nameArea');
for (var i = 0; i < names.length; i++) {
    namesShow.innerHTML += (i + 1) + '.' + names[i] + '</br>';
}
input.innerHTML = ('已载入 ' + names.length + ' 个人名');

// 参数初始化调用
function init() {
    times = 1;
    runTime = 30;
    minRunTime = 5;
    runTimeSpeed = 10;
    nameAreaCell.style.color = 'black';

}

// 随机点名过程中的动画效果
function run() {
    times--;
    if (runTime > minRunTime) {
        runTime -= runTimeSpeed;
    }
    var tName = names[getRandomNumber(names.length)];
    nameAreaCell.innerHTML = tName;
    if (times < 0) {
        // clearInterval(hander);
        hander = undefined;
        nameAreaCell.style.color = 'black';
        return;
    }
    hander = setTimeout('run()', runTime);
}
// 开始随机点名
function start() {
    if (hander == undefined) {
        init();
        // hander = setInterval('run()', 100);
        hander = setTimeout('run()', runTime);
    }
}
// 获取0到t-1之间的整数
// function getRandomNumber(t) {
// 	t--;
// 	return Math.round(Math.random() * t);
// }
let old = 1;

function getRandomNumber(t) {
    t--
    // 获取随机数
    return Math.round(Math.random() * t);
    // 避免重复
    // if (old == tName) {
    //     while (old == tName) {
    //         Math.round(Math.random() * t);
    //     }
    // }
    // old = tName;
    // console.log(tName);

}


// ------------------
// 为“开始”按钮增加事件响应函数
document.getElementById('startButton').addEventListener('click', start);
// 文件读取

function getrandom(min, max) {
    return Math.floor(Math.random() * (max - min - 1) + min);
}

function clock() {
    // 通过获取一个随机的数组下标实现随机获取一个名字，并将这个名字赋值给变量random
    let random = uname[getrandom(0, uname.length - 1)];
    //将random塞到span里
    nameAreaCell.innerHTML = random;
};
// 打印名字已经实现了，下一步让没点击按钮前名字一直刷新
// 设置不停止时名字的刷新速度为30毫秒
let time = self.setInterval("clock()", 30);
// 将开始与停止按钮绑定到按钮上，并通过按钮控制
let flag = false;
button.onclick = function () {
    // 当flag标志为false时，点击按钮让刷新停止；
    if (flag == false) {
        time = window.clearInterval(time);
        // 按钮文字从stop变为start；
        button.innerHTML = '开始点名';
        // 标志变更
        flag = true;
    } else {
        // 当flag标志为true时，开始刷新，文字变更
        time = self.setInterval("clock()", 30);
        button.innerHTML = '停止';
        flag = false;
    }
}