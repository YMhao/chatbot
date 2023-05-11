var lang='cn';

var summaryi18n = {
//     cn: `
// 欢迎使用ONES AIOps 聊天助手小蓝！小蓝是一个集智能化运维、数据分析和交互式聊天于一身的终极工具，让您从繁琐的运维工作中解放出来，享受轻松愉悦的工作体验。

// 只需通过和小蓝简单的交互，您就可以快速了解集群的运行情况、故障原因等信息，快速排除故障，提高服务可用性和稳定性。小蓝的AI智能还可以为您自动完成监控告警、日志分析、异常检测等工作，让您在第一时间获知系统状态变化和存在的问题。

// 同时，小蓝拥有丰富的运维指令和功能，您可以通过和小蓝简单的对话完成系统的管理、配置、部署等任务。无论您是运维高手还是初学者，小蓝都能为您提供个性化的运维指导和建议，让您轻松驾驭复杂的系统环境。

// 基于ONES强大的计算和数据分析能力，小蓝可以智能分析运维工作中出现的问题以及历史数据，为您提供预测性维护和优化方案，帮助您更好地实现运维效率和服务价值的提升。快来和小蓝聊天，让您的工作更加高效、智能和愉悦！
// `,
    cn: `欢迎使用ONES AIOps 聊天助手小蓝！小蓝是一个集智能化运维、数据分析和交互式聊天于一身的终极工具，让您从繁琐的运维工作中解放出来，享受轻松愉悦的工作体验。
`,
    en: `
Welcome to using the ONES AIOps Chatbot - Little Blue! Little Blue is the ultimate tool that combines intelligent operations, data analysis, and interactive chat, enabling you to be liberated from tedious operational work and experience a pleasant work experience.

With simple interactions with Little Blue, you can quickly understand the running status and fault causes of your clusters, quickly troubleshoot issues, and improve the availability and stability of your services. Little Blue’s AI intelligence can also automatically complete tasks such as monitoring alerts, log analysis, and anomaly detection, allowing you to be aware of system status changes and problems as soon as possible.

In addition, Little Blue has a rich set of operational commands and functions that enable you to complete tasks such as systems management, configuration, and deployment through simple conversations. Whether you are an expert or a beginner, Little Blue can provide you with personalized operational guidance and recommendations, allowing you to easily handle complex system environments.

Based on ONES’s strong computing and data analysis capabilities, Little Blue can intelligently analyze operational issues and historical data, providing you with predictive maintenance and optimization solutions that help improve operational efficiency and service value. Come chat with Little Blue and make your work more efficient, intelligent, and enjoyable!
`,
    jp: `
ONES AIOps チャットボット - リトルブルーをご利用いただきありがとうございます！リトルブルーは、インテリジェントなオペレーション、データ分析、およびインタラクティブなチャットを組み合わせた究極のツールであり、手間のかかるオペレーション作業から解放され、快適な仕事体験を提供します。

リトルブルーと簡単なやり取りをするだけで、クラスターの実行状況や故障原因などをすばやく理解し、問題を迅速にトラブルシューティングし、サービスの可用性と安定性を向上させることができます。リトルブルーのAIインテリジェンスにより、監視アラート、ログ解析、異常検出などのタスクを自動的に完了することもでき、システムの状態変化や問題をすばやく把握できます。

また、リトルブルーには豊富なオペレーションコマンドや機能があり、シンプルな会話を通じてシステムの管理、設定、デプロイメントなどのタスクを完了できます。エキスパートでも初心者でも、リトルブルーは個別のオペレーションガイダンスや推奨事項を提供し、複雑なシステム環境を簡単に扱えるようになります。

ONESの強力なコンピューティングおよびデータ分析能力を活用したリトルブルーは、オペレーションの問題とこれまでのデータをインテリジェントに分析し、予測メンテナンスおよび最適化ソリューションを提供することができ、オペレーション効率とサービスの価値を向上させます。リトルブルーとチャットして、作業をより効率的でスマートで、快適なものにしましょう！
`,
}



var summaryTxt = document.getElementById("summary");

function initSumary() {
    summaryTxt.innerText = summaryi18n[lang];
}