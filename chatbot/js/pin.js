// Q: h5 生成 全为数字的6位 PIN 码
function generatePIN() {
    var pin = Math.floor(Math.random() * 900000 + 100000);
    return pin.toString(); // 将数字转换为字符串并返回
}

// h5 提供一个获取函数PIN码的函数, 当key PIN 在 localstorage 存在时, 返回对应的 value， 如果不存在，则 生成上面的 PIN码 后，再返回PIN码
function getPIN() {
    var pin = localStorage.getItem('PIN'); // 从 localStorage 中读取 PIN 码
    if (!pin) {  // 如果 PIN 码不存在，则生成一个新的PIN码
        pin = generatePIN();
        localStorage.setItem('PIN', pin);  // 将新的 PIN 码存储到 localStorage 中
    }
    return pin;
}

function generatePIN() {
    var pin = Math.floor(Math.random() * 900000 + 100000);
    return pin.toString(); // 将数字转换为字符串并返回
}

var pinTxt = document.getElementById("pin");

function initPin() {
    pinTxt.innerText = "PIN: " + getPIN();
    
}