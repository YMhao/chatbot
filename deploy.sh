# tar -czvf chatbot.tar.gz chatbot
# tar -czvf screen.tar.gz screen
# scp -r -P 28292 chatbot.tar.gz root@ali.yuminghao.top:/data/ones-rocket/chatAIOps-web/
# scp -r -P 28292 screen.tar.gz root@ali.yuminghao.top:/data/ones-rocket/chatAIOps-web/
# ssh -p 28292 root@ali.yuminghao.top "cd /data/ones-rocket/chatAIOps-web/ && tar -xzf chatbot.tar.gz"
# ssh -p 28292 root@ali.yuminghao.top "cd /data/ones-rocket/chatAIOps-web/ && tar -xzf screen.tar.gz"
# rm -rf chatbot.tar.gz screen.tar.gz

src="screen"
scp -r -P 28292 ${src}/images  root@ali.yuminghao.top:/data/ones-rocket/chatAIOps-web/${src}/
scp -r -P 28292 ${src}/css  root@ali.yuminghao.top:/data/ones-rocket/chatAIOps-web/${src}/
scp -r -P 28292 ${src}/js  root@ali.yuminghao.top:/data/ones-rocket/chatAIOps-web/${src}/
scp -r -P 28292 ${src}/index.html root@ali.yuminghao.top:/data/ones-rocket/chatAIOps-web/${src}/