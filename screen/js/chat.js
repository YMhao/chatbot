const chatWSS = new WebSocket('wss://screen.yuminghao.top/ws');

function initWebSocket() {
  const pin = getPIN()
  if (pin !== null) {
    return new WebSocket('wss://screen.yuminghao.top/ws');
  } else {
    return null;
  }
}

chatWSS.onopen = () => {
  console.log('Connected to server');
  const pin = getPIN();
  const message = JSON.stringify({ pin });
  chatWSS.send(message);
};

chatWSS.onclose = () => {
  console.log('Disconnected from server');
};

chatWSS.onerror = (error) => {
  console.error('WebSocket error: ', error);
};

chatWSS.onmessage = (event) => {
  console.log('Received message: ', event);
  const obj = event.data;
  const data = JSON.parse(obj);
  const msg = data['message'];
  appendMessage(msg);
};

const chatbody = document.querySelector('#chat-history');

function appendMessage(msg) {
  appendMeMessage(msg['me']);
  appendBotMessage(msg['bot']);
  appendCmd(msg['cmd']);
}

function appendCmd(cmd) {
  if (cmd['exec_cmd'] !== "") {
    appendCmdOutput(cmd['exec_cmd'] + '\n' + cmd['cmd_result']);
    return;
  }
}

function appendMeMessage(msg) {
  if (msg === "") {
    return;
  }
  const parent = document.getElementById("chat-body"); // 获取父级元素
  const child = document.createElement("div"); // 创建子级元素
  child.classList.add("message");
  child.classList.add("my-message"); // 添加类名
  child.innerHTML = `
      <div class="message-text">${msg}</div>
      <div class="avatar"><img src="images/me.png" alt=""></div>
      `; // 设置子级元素的 HTML 内容
  parent.appendChild(child); // 将子级元素追加到父级元素中
  parent.scrollTop = parent.scrollHeight;
}

function appendBotMessage(msg) {
  if (msg === "") {
    return;
  }
  const parent = document.getElementById("chat-body"); // 获取父级元素
  const child = document.createElement("div"); // 创建子级元素
  child.classList.add("message");
  child.classList.add("other-message"); // 添加类名
  child.innerHTML = `
    <div class="avatar"><img src="images/chatbot.png" alt=""></div>
    <div class="message-text">${msg}</div>
    `; // 设置子级元素的 HTML 内容
  parent.appendChild(child); // 将子级元素追加到父级元素中
  parent.scrollTop = parent.scrollHeight;
}


const output = document.getElementById('output');

function appendCmdOutput(content) {
  if (content === "") {
    return;
  }
  output.innerHTML += `<pre>[chatbot@localhost ~]$ ${content}</pre>`;
  output.scrollTop = output.scrollHeight;
}

function initCmd() {
  output.innerHTML += `<pre>Welcome to Alibaba Cloud Elastic Compute Service !
[chatbot@localhost ~]$ </pre>`;
  output.scrollTop = output.scrollHeight;
}

initCmd();


function displayPin() {
  const pinCode = getPIN();
  if (pinCode !== null) {
    const pin = document.getElementById("pin");
    pin.innerText = "PIN: " + pinCode;
  }
}

function getPIN() {
  return localStorage.getItem("PIN");
}

document.addEventListener("DOMContentLoaded", function(event) { 
  displayPin();
  initWebSocket();
  // 获取localstorage中的PIN码
  const pin = getPIN();
  // 判断是否存在PIN码
  if (pin === null) {
    // 存在则显示遮罩层
    const maskLayer = document.createElement("div");
    maskLayer.classList.add("mask-layer");
    document.body.appendChild(maskLayer);
    maskLayer.style.display = "block";

    const maskContent = document.createElement("div");
    maskContent.classList.add("mask-content");
    maskLayer.appendChild(maskContent);
    
    const inputBox = document.createElement("input");
    inputBox.classList.add("input-box");
    inputBox.type = 'text';
    inputBox.placeholder = '请输入6位PIN码';
    maskContent.appendChild(inputBox);
  
    const confirmBtn = document.createElement("button");
    confirmBtn.classList.add("confirm-btn");
    confirmBtn.innerText = '确认';
    maskContent.appendChild(confirmBtn);
    
    confirmBtn.addEventListener("click", function() {
      const inputVal = inputBox.value.trim();
      if (inputVal.length === 6) {
        // 输入PIN码必须是6位数，符合要求则将PIN码写入localstorage
        localStorage.setItem("PIN", inputVal);
        // 隐藏遮罩层
        displayPin();
        initWebSocket();
        maskLayer.style.display = "none";
      } else {
        // 如果PIN码为空或者不是6位数，则提示用户重新输入
        alert("请输入6位数字的PIN码！");
      }
    });

  } else {
    // 不存在则隐藏遮罩层
    const maskLayers = document.querySelectorAll(".mask-layer");
    maskLayers.forEach(layer => {
      layer.style.display = "none";
    });
  }
});