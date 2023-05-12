const output = document.getElementById('output');

function appendOutput(content) {
  output.innerHTML += `<pre>${content}</pre>`;
  output.scrollTop = output.scrollHeight;
}

var testDoc = `Welcome to Alibaba Cloud Elastic Compute Service !

[root@k8s-master-001 ~]# kubectl get nodes
NAME             STATUS                     ROLES    AGE    VERSION
k8s-master-001   Ready                      master   359d   v1.16.7
k8s-node-001     Ready,SchedulingDisabled   <none>   359d   v1.16.7
k8s-node-002     Ready                      <none>   359d   v1.16.7
k8s-node-003     Ready                      <none>   359d   v1.16.7
k8s-node-004     Ready                      <none>   248d   v1.16.7
k8s-node-005     Ready                      <none>   248d   v1.16.7
[root@k8s-master-001 ~]# kubectl  uncordon k8s-node-001
node/k8s-node-001 uncordoned
[root@k8s-master-001 ~]# kubectl get nodes
NAME             STATUS   ROLES    AGE    VERSION
k8s-master-001   Ready    master   359d   v1.16.7
k8s-node-001     Ready    <none>   359d   v1.16.7
k8s-node-002     Ready    <none>   359d   v1.16.7
k8s-node-003     Ready    <none>   359d   v1.16.7
k8s-node-004     Ready    <none>   248d   v1.16.7
k8s-node-005     Ready    <none>   248d   v1.16.7
[root@k8s-master-001 ~]#
[root@k8s-master-001 ~]# kubectl get nodes
NAME             STATUS                     ROLES    AGE    VERSION
k8s-master-001   Ready                      master   359d   v1.16.7
k8s-node-001     Ready,SchedulingDisabled   <none>   359d   v1.16.7
k8s-node-002     Ready                      <none>   359d   v1.16.7
k8s-node-003     Ready                      <none>   359d   v1.16.7
k8s-node-004     Ready                      <none>   248d   v1.16.7
k8s-node-005     Ready                      <none>   248d   v1.16.7
[root@k8s-master-001 ~]# kubectl  uncordon k8s-node-001
node/k8s-node-001 uncordoned
[root@k8s-master-001 ~]# kubectl get nodes
NAME             STATUS   ROLES    AGE    VERSION
k8s-master-001   Ready    master   359d   v1.16.7
k8s-node-001     Ready    <none>   359d   v1.16.7
k8s-node-002     Ready    <none>   359d   v1.16.7
k8s-node-003     Ready    <none>   359d   v1.16.7
k8s-node-004     Ready    <none>   248d   v1.16.7
k8s-node-005     Ready    <none>   248d   v1.16.7
[root@k8s-master-001 ~]#
[root@k8s-master-001 ~]# kubectl get nodes
NAME             STATUS                     ROLES    AGE    VERSION
k8s-master-001   Ready                      master   359d   v1.16.7
k8s-node-001     Ready,SchedulingDisabled   <none>   359d   v1.16.7
k8s-node-002     Ready                      <none>   359d   v1.16.7
k8s-node-003     Ready                      <none>   359d   v1.16.7
k8s-node-004     Ready                      <none>   248d   v1.16.7
k8s-node-005     Ready                      <none>   248d   v1.16.7
[root@k8s-master-001 ~]# kubectl  uncordon k8s-node-001
node/k8s-node-001 uncordoned
[root@k8s-master-001 ~]# kubectl get nodes
NAME             STATUS   ROLES    AGE    VERSION
k8s-master-001   Ready    master   359d   v1.16.7
k8s-node-001     Ready    <none>   359d   v1.16.7
k8s-node-002     Ready    <none>   359d   v1.16.7
k8s-node-003     Ready    <none>   359d   v1.16.7
k8s-node-004     Ready    <none>   248d   v1.16.7
k8s-node-005     Ready    <none>   248d   v1.16.7
[root@k8s-master-001 ~]#
[root@k8s-master-001 ~]# kubectl get nodes
NAME             STATUS                     ROLES    AGE    VERSION
k8s-master-001   Ready                      master   359d   v1.16.7
k8s-node-001     Ready,SchedulingDisabled   <none>   359d   v1.16.7
k8s-node-002     Ready                      <none>   359d   v1.16.7
k8s-node-003     Ready                      <none>   359d   v1.16.7
k8s-node-004     Ready                      <none>   248d   v1.16.7
k8s-node-005     Ready                      <none>   248d   v1.16.7
[root@k8s-master-001 ~]# kubectl  uncordon k8s-node-001
node/k8s-node-001 uncordoned
[root@k8s-master-001 ~]# kubectl get nodes
NAME             STATUS   ROLES    AGE    VERSION
k8s-master-001   Ready    master   359d   v1.16.7
k8s-node-001     Ready    <none>   359d   v1.16.7
k8s-node-002     Ready    <none>   359d   v1.16.7
k8s-node-003     Ready    <none>   359d   v1.16.7
k8s-node-004     Ready    <none>   248d   v1.16.7
k8s-node-005     Ready    <none>   248d   v1.16.7
[root@k8s-master-001 ~]#
`
appendOutput(testDoc);

// // 示例：每3秒钟向展示框追加一条随机内容
// let count = 0;
// setInterval(() => {
//   if (count < 1)
//     count=1;
//     console.log(`${++count})`)
//     appendOutput(testDoc);
// }, 100);