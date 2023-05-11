const output = document.getElementById('output');

function appendOutput(content) {
  output.innerHTML += `<pre>${content}</pre>`;
  output.scrollTop = output.scrollHeight;
}

// 示例：每3秒钟向展示框追加一条随机内容
let count = 0;
setInterval(() => {
  if (count < 20)
    appendOutput(`[root@s00 ones-chat-aiops]# ls
    chatbot  chatbot.tar.gz  deploy.sh  screen  screen.tar.gz
[root@s00 ones-chat-aiops]# ${++count}`);
}, 100);