// ============================================================
// 智慧党建平台 - 真实资料源增强版
// 核心原则：具体来源、具体任务、具体提交、具体验收
// ============================================================

const views = {
  dashboard: "工作总览",
  profile: "党员画像",
  learning: "分层学习",
  rolemodels: "科学家精神",
  activities: "活动策划",
  cases: "案例库",
  resources: "资源中心",
  ideology: "思政推送",
  analytics: "数据评估",
};

const sourceLinks = {
  partyConstitution: "https://www.12371.cn/special/zggcdzc/zggcdzcqw/",
  partyDuty: "https://www.12371.cn/2019/10/06/VIDE1570293723099597.shtml",
  partyDayCase1: "https://www.12371.cn/2024/07/14/ARTI1720942502853563.shtml",
  partyDayCase2: "https://www.12371.cn/2024/12/20/ARTI1734687312428403.shtml",
  scienceSelfReliance: "https://www.xuexi.cn/lgpage/detail/index.html?id=18442149474097757397&item_id=18442149474097757397",
  scienceInnovation2026: "https://www.xuexi.cn/lgpage/detail/index.html?id=7215682545386819130&item_id=7215682545386819130",
  peng: "https://www.sastind.gov.cn/n10086200/n10086361/n10615800/n10615815/c10617812/content.html",
  wangdaheng: "https://www.cas.cn/zt/rwzt/gwcyz_1/wangdaheng/201203/t20120330_3546577.shtml",
  huangkun: "https://www.cas.cn/xzfc/202209/t20220914_4847604.shtml",
  zhaozhongxian: "https://iop.cas.cn/2016kxjsj/zjzzxys/201701/t20170112_4734462.html",
  ucasPhysics: "https://physics.ucas.edu.cn/index.php/zh-CN/cooperation/gnhz/6042-2023-303-308",
  academicIntegrity: "https://www.moe.gov.cn/srcsite/A02/s5911/moe_621/201607/t20160718_272156.html",
  probationTransfer: "https://fuwu.12371.cn/2017/08/04/ARTI1501858000650745.shtml",
  cpc: "https://www.12371.cn/",
  peopleTheory: "https://theory.people.com.cn/",
  gov: "https://www.gov.cn/",
  qiushi: "http://www.qstheory.cn/",
};

const resourceLibrary = [
  {
    id: "r1", title: "中国共产党章程（全文）", source: "共产党员网", tags: ["党章", "积极分子", "预备党员"],
    fit: "入党积极分子、预备党员、正式党员党章复习", scenario: "入党启蒙、转正准备、组织生活前置学习",
    task: "阅读总纲、第一章党员、第五章党的基层组织，摘录3条与研究生党员相关的要求。",
    submit: "300字党章摘记 + 1个想在支部会上讨论的问题", check: "支委检查摘记完整度，现场抽问党员义务和基层组织职责。", url: sourceLinks.partyConstitution
  },
  {
    id: "r2", title: "党员义务专题微课", source: "共产党员网", tags: ["党员义务", "视频", "积极分子"],
    fit: "入党积极分子、预备党员", scenario: "入党前教育、党章学习后的巩固测试",
    task: "观看党员义务专题，列出最需要在科研训练中落实的2项义务。",
    submit: "义务-科研行为对应表", check: "小组互评是否能把义务转化为具体科研行为。", url: sourceLinks.partyDuty
  },
  {
    id: "r3", title: "《论科技自立自强》出版发行介绍", source: "学习强国", tags: ["科技自立自强", "科技强国", "理论阅读"],
    fit: "全体研究生党员", scenario: "科技报国主题党日、科技强国专题学习",
    task: "阅读专题介绍，提炼“国家强盛之基、安全之要”等关键词背后的科研启示。",
    submit: "我的研究方向与科技自立自强关系表", check: "老师点评是否能从课题出发说明长期价值。", url: sourceLinks.scienceSelfReliance
  },
  {
    id: "r4", title: "习近平论科技创新（2026年）", source: "学习强国", tags: ["科技创新", "科技工作者", "科研报国"],
    fit: "正式党员、预备党员", scenario: "科研报国研讨、党员先锋岗建设",
    task: "选取1句与科技工作者报国情怀相关的内容，结合课题写出行动目标。",
    submit: "100字行动承诺", check: "纳入后续党员先锋岗任务追踪。", url: sourceLinks.scienceInnovation2026
  },
  {
    id: "r5", title: "主题党日案例：5+N+X活动模式", source: "共产党员网", tags: ["主题党日", "案例", "组织生活"],
    fit: "支委、活动主持人、正式党员", scenario: "主题党日方案设计、支部活动机制建设",
    task: "学习“规定动作+自选动作+特色动作”结构，为本支部设计一套60分钟活动流程。",
    submit: "1页活动流程表", check: "流程必须包含会前资料、集中学习、研讨交流、会后反馈。", url: sourceLinks.partyDayCase1
  },
  {
    id: "r6", title: "主题党日案例：观摩+讨论、主题党日+技能培训", source: "共产党员网", tags: ["主题党日", "案例", "研讨"],
    fit: "支部委员、活动策划组", scenario: "改进党日活动吸引力、增强党员参与感",
    task: "提炼案例中的“观摩+讨论”“分类供给”做法，迁移到物理学科支部。",
    submit: "案例迁移表", check: "是否说明物理学科场景和研究生需求。", url: sourceLinks.partyDayCase2
  },
  {
    id: "r7", title: "彭桓武：回国不需要理由", source: "国家国防科技工业局", tags: ["理论物理", "两弹一星", "科学家精神"],
    fit: "理论物理方向党员", scenario: "科研报国榜样导入、理论物理组讨论",
    task: "阅读人物故事，讨论基础理论如何服务国家重大需求。",
    submit: "我的理论研究服务国家需求三栏表", check: "是否能把抽象研究问题转化为可解释的战略价值。", url: sourceLinks.peng
  },
  {
    id: "r8", title: "王大珩生平", source: "中国科学院", tags: ["光学", "两弹一星", "863计划"],
    fit: "光学方向党员", scenario: "光学专业榜样学习、科技战略意识教育",
    task: "梳理王大珩在光学装备、计量科学和高技术战略中的贡献。",
    submit: "光学方向科研报国案例卡", check: "是否包含“专业能力-国家需求-个人行动”三部分。", url: sourceLinks.wangdaheng
  },
  {
    id: "r9", title: "黄昆：成为世界领头的固体物理学家", source: "中国科学院", tags: ["凝聚态", "半导体", "科学家精神"],
    fit: "凝聚态物理方向党员", scenario: "半导体强国、基础研究长期主义研讨",
    task: "阅读黄昆故事，提炼半导体学科建设与国家需求之间的关系。",
    submit: "凝聚态方向行动清单3条", check: "是否体现长期积累、基础研究和人才培养。", url: sourceLinks.huangkun
  },
  {
    id: "r10", title: "赵忠贤院士：五十年超导强国梦", source: "中国科学院物理研究所", tags: ["凝聚态", "超导", "长期主义"],
    fit: "凝聚态方向党员、预备党员", scenario: "板凳要坐十年冷、科研韧性教育",
    task: "围绕“长期坚持一个科学问题”写出自己的科研训练改进计划。",
    submit: "30天科研习惯清单", check: "一个月后在支部会上复盘执行情况。", url: sourceLinks.zhaozhongxian
  },
  {
    id: "r11", title: "高校物理学院支部活动参考", source: "中国科学院大学物理科学学院", tags: ["高校党建", "物理学院", "支部活动"],
    fit: "支委、研究生党员骨干", scenario: "高校物理类党支部活动形式参考",
    task: "学习党员领学、案例讲解、书记总结等高校支部活动环节。",
    submit: "本支部活动流程优化建议", check: "是否能落地到博士第四党支部。", url: sourceLinks.ucasPhysics
  },
  {
    id: "r12", title: "人民网理论频道", source: "人民网", tags: ["理论文章", "思政推送", "学习材料"],
    fit: "正式党员、推送撰写人", scenario: "理论文章选题、支部群推送素材",
    task: "围绕当月主题筛选1篇理论文章，改写成适合研究生阅读的推送。",
    submit: "支部群图文草稿", check: "内容必须包含来源、摘要、问题和行动任务。", url: sourceLinks.peopleTheory
  },
  {
    id: "r13", title: "高等学校预防与处理学术不端行为办法", source: "教育部", tags: ["学术诚信", "科研诚信", "组织生活"],
    fit: "全体研究生党员、预备党员、正式党员", scenario: "学术诚信教育、实验室组会前预习、小组研讨",
    task: "阅读“教育与预防”和“认定”相关条款，列出与论文署名、数据记录、成果引用有关的3条风险提醒。",
    submit: "科研诚信风险提醒清单", check: "支委或导师组查看清单是否能落到论文、实验记录和课题申报场景。", url: sourceLinks.academicIntegrity
  },
  {
    id: "r14", title: "支部大会讨论预备党员转正的主要程序", source: "共产党员网", tags: ["预备党员", "转正准备", "组织生活"],
    fit: "预备党员、支委、正式党员", scenario: "转正准备、组织生活规范、支部大会材料准备",
    task: "梳理转正汇报、党小组意见、支委会审查、党员大会讨论表决等环节，核对个人材料是否齐备。",
    submit: "转正材料核对表", check: "支委按流程核对申请书、思想汇报、培养考察材料和会议记录。", url: sourceLinks.probationTransfer
  }
];

const roleModels = {
  theoretical: [
    { name: "彭桓武", title: "理论物理学家 · 两弹一星功勋奖章获得者", source: "国家国防科技工业局", url: sourceLinks.peng, story: "作为中国理论物理学、核物理理论和核爆炸理论的重要奠基人之一，彭桓武参与我国原子弹、氢弹原理突破和理论设计工作。", discussion: ["理论物理如何服务国家重大工程？", "基础研究和任务牵引是否矛盾？", "博士生如何训练长期问题意识？"], action: "写出“我的理论问题-潜在应用场景-下一步训练目标”三栏表。" },
    { name: "周光召", title: "理论物理学家 · 中国科学院院士", source: "中科院/权威人物资料", url: sourceLinks.peopleTheory, story: "周光召在粒子物理、量子场论和国家重大科技事业中作出重要贡献，适合作为理论研究服务国家决策和重大任务的讨论案例。", discussion: ["理论工作者如何承担公共使命？", "如何理解基础理论与科技战略的关系？", "青年党员如何提升理论判断力？"], action: "形成1条本课题服务国家需求的理论解释。" }
  ],
  particle: [
    { name: "王淦昌", title: "核物理学家 · 两弹一星功勋奖章获得者", source: "权威人物资料", url: sourceLinks.cpc, story: "王淦昌长期从事实验原子核物理、宇宙射线和基本粒子物理研究，并投身国家核事业，体现隐姓埋名、国家至上的科学家精神。", discussion: ["大科学工程中的个人贡献如何体现？", "保密纪律与科研协作如何统一？", "粒子核物理如何服务国家安全？"], action: "列出本组方向与大科学装置、国家安全、基础研究的联系。" },
    { name: "赵忠尧", title: "核物理研究先驱", source: "权威人物资料", url: sourceLinks.cpc, story: "赵忠尧是中国核物理和加速器事业的重要开拓者，适合讨论学科从无到有的创建精神。", discussion: ["学科建设需要哪些长期投入？", "实验条件不足时如何推进研究？", "青年党员如何承担学科传承责任？"], action: "提交一份本方向关键实验能力清单。" }
  ],
  condensed: [
    { name: "黄昆", title: "固体物理、半导体物理学家 · 国家最高科学技术奖获得者", source: "中国科学院", url: sourceLinks.huangkun, story: "黄昆是中国固体物理和半导体物理的重要奠基人，其经历适合引导凝聚态方向党员理解基础学科与国家产业需求的关系。", discussion: ["半导体学科为何具有战略意义？", "基础理论如何支撑产业突破？", "博士生如何在细分课题中坚持长期价值？"], action: "完成“研究课题-材料/器件/产业链位置-个人训练目标”清单。" },
    { name: "赵忠贤", title: "超导物理学家 · 国家最高科学技术奖获得者", source: "中国科学院物理研究所", url: sourceLinks.zhaozhongxian, story: "赵忠贤长期推动我国高温超导研究，体现长期坚守、问题导向和团队攻关精神。", discussion: ["如何理解科研长期主义？", "失败和等待在科研训练中有什么价值？", "凝聚态前沿如何服务科技强国？"], action: "制定30天科研习惯清单并在支部复盘。" }
  ],
  optics: [
    { name: "王大珩", title: "应用光学家 · 两弹一星功勋奖章获得者", source: "中国科学院", url: sourceLinks.wangdaheng, story: "王大珩对国防现代化大型光学观测设备、光学事业和计量科学发展作出重要贡献，并参与倡议863计划。", discussion: ["光学仪器如何支撑国家重大工程？", "应用光学与基础光学如何协同？", "光学博士生如何建立工程意识？"], action: "提交一张“光学技术-国家需求-个人课题”映射表。" },
    { name: "潘建伟", title: "量子光学与量子信息科学家", source: "权威科技报道", url: sourceLinks.scienceInnovation2026, story: "潘建伟团队在量子通信和量子科学实验方面取得重要进展，适合引导光学与量子信息方向党员讨论前沿科技与国家战略。", discussion: ["前沿基础研究如何进入国家战略？", "团队协同在大科学任务中为何重要？", "如何理解科技自立自强中的国际竞争？"], action: "写出本课题可能服务信息安全或精密测量的路径。" }
  ],
  quantum: [
    { name: "潘建伟", title: "量子信息科学家 · 中国科学院院士", source: "学习强国/权威科技报道", url: sourceLinks.scienceInnovation2026, story: "量子信息方向可结合量子通信、量子计算和量子精密测量，讨论前沿基础研究服务国家信息安全和未来产业。", discussion: ["量子信息为何属于国家战略科技力量？", "青年科研党员如何面对国际竞争？", "基础实验如何形成长期技术路线？"], action: "完成“量子方向-战略应用-关键能力”任务卡。" },
    { name: "郭光灿", title: "量子光学与量子信息专家", source: "权威人物资料", url: sourceLinks.peopleTheory, story: "郭光灿长期推动我国量子光学和量子信息学科发展，适合讨论学科布局、人才培养和团队传承。", discussion: ["学科共同体如何形成？", "导师制与团队制如何支撑科研攻关？", "研究生党员如何发挥组织作用？"], action: "提出1条本组科研互助机制。" }
  ]
};

const learningByIdentity = {
  activist: {
    reading: ["r1", "r2", "r3"], video: ["r2", "r6", "r11"], discussion: ["r5", "r7", "r9"], quiz: ["r1", "r2", "r5"]
  },
  probationary: {
    reading: ["r1", "r3", "r14"], video: ["r2", "r6", "r11"], discussion: ["r5", "r8", "r13"], quiz: ["r1", "r2", "r6"]
  },
  full: {
    reading: ["r3", "r4", "r12"], video: ["r4", "r6", "r11"], discussion: ["r5", "r13", "r12"], quiz: ["r1", "r3", "r5"]
  }
};

const caseLibrary = [
  {
    title: "科技报国研讨：物理人的使命担当", type: "科研报国类", source: "学习强国 + 科学家精神资料",
    steps: ["会前推送科技自立自强资料", "按专业方向分组", "每组选1位科学家榜样", "形成个人科研行动清单", "会后提交心得和问卷"],
    output: "活动纪要、分组行动清单、个人心得、反馈问卷", url: sourceLinks.scienceSelfReliance
  },
  {
    title: "5+N+X主题党日模式", type: "主题党日规范类", source: "共产党员网案例",
    steps: ["做实规定动作：集中学习和组织生活", "做优自选动作：结合科研成长", "做活特色动作：科学家精神案例", "会后形成任务清单"],
    output: "主题党日菜单、签到表、学习记录、整改台账", url: sourceLinks.partyDayCase1
  },
  {
    title: "观摩+讨论式主题党日", type: "参与提升类", source: "共产党员网案例",
    steps: ["观摩案例或视频", "每名党员围绕问题发言", "主持人提炼共识", "支部书记点评", "纳入下一次活动改进"],
    output: "发言摘编、问题清单、后续改进建议", url: sourceLinks.partyDayCase2
  },
  {
    title: "高校物理类支部活动流程", type: "高校支部参考类", source: "高校物理学院支部活动报道",
    steps: ["党员领学", "结合专业案例讲解", "青年科研党员交流", "支部书记总结", "形成后续学习任务"],
    output: "领学材料、专业案例卡、支部总结", url: sourceLinks.ucasPhysics
  }
];

const tasks = [
  "核对本月主题党日资料链接是否可打开",
  "更新入党积极分子党章学习任务清单",
  "收集各专业组科研成长问题",
  "整理科技报国主题党日活动纪要模板",
  "检查活动方案时间轴是否超出设定时长"
];

const suggestions = [
  "建议本周围绕“科技报国·物理人的使命担当”开展60分钟主题党日：会前资料包+专业分组+科学家案例+行动清单，避免只做口号式学习。",
  "积极分子推荐先完成党章全文和党员义务专题，提交300字摘记；预备党员至少承担一次主持、记录或汇报任务。",
  "光学和量子信息方向可优先推送王大珩、潘建伟相关材料，将专业学习与国家战略需求相连接。",
  "活动方案生成后应检查“总时长、资料来源、提交材料、归档成果”四项，缺一项不建议进入正式通知。"
];

const labels = {
  major: { theoretical: "理论物理", particle: "粒子物理与原子核物理", condensed: "凝聚态物理", optics: "光学", quantum: "量子信息" },
  identity: { activist: "入党积极分子", probationary: "预备党员", full: "正式党员" },
  mode: { reading: "理论阅读", video: "视频学习", discussion: "案例研讨", quiz: "知识竞赛" }
};

function byId(id) { return document.getElementById(id); }
function showToast(text) { const toast = byId("toast"); toast.textContent = text; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 1800); }
function sourceBadge(name) { return `<span class="source-badge">${name}</span>`; }

function switchView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  byId(name).classList.add("active");
  document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === name));
  byId("viewTitle").textContent = views[name];
  if (name === "analytics") { drawChart(); drawSourceChart(); drawPreferenceChart(); }
}

function renderTasks() { byId("taskList").innerHTML = tasks.map((t, i) => `<li><input type="checkbox" ${i === 0 ? "checked" : ""}/><span>${t}</span></li>`).join(""); }
function renderSuggestion() { const text = suggestions[Math.floor(Math.random() * suggestions.length)]; byId("aiSuggestion").innerHTML = `<p>${text}</p><p><strong>下一步：</strong>进入“活动策划”生成可执行流程，或进入“资源中心”复制具体学习任务。</p>`; }

function resourceCard(r) {
  return `<article class="resource-card detailed-card">
    <div class="card-top"><h4>${r.title}</h4>${sourceBadge(r.source)}</div>
    <p><strong>适合对象：</strong>${r.fit}</p>
    <p><strong>使用场景：</strong>${r.scenario}</p>
    <p><strong>学习任务：</strong>${r.task}</p>
    <p><strong>提交材料：</strong>${r.submit}</p>
    <p><strong>验收方式：</strong>${r.check}</p>
    <div class="tag-row">${r.tags.map(t => `<span>${t}</span>`).join("")}</div>
    <a href="${r.url}" target="_blank" rel="noopener">打开具体资料</a>
  </article>`;
}

function renderResources(filter = "") {
  const key = filter.trim().toLowerCase();
  const identity = byId("resourceIdentity")?.value || "";
  const type = byId("resourceType")?.value || "";
  const scene = byId("resourceScene")?.value || "";
  const list = resourceLibrary.filter(r => {
    const haystack = [r.title, r.source, r.fit, r.scenario, r.task, r.submit, r.check, ...r.tags].join(" ");
    return (!key || haystack.toLowerCase().includes(key))
      && (!identity || haystack.includes(identity))
      && (!type || haystack.includes(type))
      && (!scene || haystack.includes(scene));
  });
  byId("resourceGrid").innerHTML = list.map(resourceCard).join("") || `<p class="empty">没有匹配资料，请换一个关键词。</p>`;
}

function renderLearning(identity = "activist", mode = "reading") {
  const ids = learningByIdentity[identity][mode] || [];
  const list = ids.map(id => resourceLibrary.find(r => r.id === id)).filter(Boolean);
  byId("learningGrid").innerHTML = list.map(r => `<article class="learning-card detailed-card">
    <div class="card-top"><h4>${r.title}</h4>${sourceBadge(r.source)}</div>
    <div class="card-meta"><span class="profile-tag tag-gold">${labels.identity[identity]}</span><span class="profile-tag tag-green">${labels.mode[mode]}</span></div>
    <p><strong>为什么推荐：</strong>${r.scenario}</p>
    <p><strong>本次任务：</strong>${r.task}</p>
    <p><strong>提交材料：</strong>${r.submit}</p>
    <p><strong>验收：</strong>${r.check}</p>
    <a class="text-link" href="${r.url}" target="_blank" rel="noopener">打开学习资料</a>
  </article>`).join("");
}

function renderRoleModels(major = "theoretical") {
  const models = roleModels[major] || [];
  byId("rolemodelGrid").innerHTML = models.map(m => `<article class="rolemodel-card detailed-card">
    <div class="rm-header"><div class="rm-avatar">${m.name[0]}</div><div><p class="rm-name">${m.name}</p><p class="rm-title">${m.title}</p>${sourceBadge(m.source)}</div></div>
    <p class="rm-story"><strong>主要贡献：</strong>${m.story}</p>
    <p><strong>学习要点：</strong>${m.keyPoint || "把个人科研选择放到国家需求、学科建设和长期训练中理解。"}</p>
    <p><strong>适用场景：</strong>${m.useScene || `适合用于${labels.major[major]}方向主题党日导入、党课领学和小组研讨。`}</p>
    <div class="rm-block"><strong>导学问题：</strong><ol>${m.discussion.map(q => `<li>${q}</li>`).join("")}</ol></div>
    <div class="rm-spirit"><strong>现场任务：</strong>${m.action}</div>
    <a class="text-link" href="${m.url}" target="_blank" rel="noopener">资料来源：${m.source}</a>
  </article>`).join("");
}

function renderCases() {
  byId("caseGrid").innerHTML = caseLibrary.map(c => `<article class="case-card detailed-card">
    <div class="card-top"><h4>${c.title}</h4><span class="case-type">${c.type}</span></div>
    <p><strong>参考来源：</strong>${c.source}</p>
    <p><strong>流程结构：</strong></p><ol>${c.steps.map(s => `<li>${s}</li>`).join("")}</ol>
    <p><strong>可归档成果：</strong>${c.output}</p>
    <a class="text-link" href="${c.url}" target="_blank" rel="noopener">查看案例来源</a>
  </article>`).join("");
}

function generateProfileRecommendation() {
  const major = byId("profileMajor").value;
  const identity = byId("profileIdentity").value;
  const preference = byId("profilePreference").value;
  const output = byId("profileOutput").value;
  const model = (roleModels[major] || [])[0];
  const resources = (learningByIdentity[identity][preference] || []).map(id => resourceLibrary.find(r => r.id === id)).filter(Boolean);
  const outputText = { self: "个人学习", meeting: "党会研讨", report: "心得归档" }[output];
  byId("profileResult").innerHTML = `<div class="profile-card detailed-card">
    <h4>画像摘要</h4>
    <div><span class="profile-tag tag-red">${labels.major[major]}</span><span class="profile-tag tag-gold">${labels.identity[identity]}</span><span class="profile-tag tag-green">${labels.mode[preference]}</span><span class="profile-tag tag-blue">${outputText}</span></div>
    <p><strong>推荐逻辑：</strong>先用身份阶段确定理论深度，再用学习偏好确定呈现形式，最后按专业方向匹配科研报国榜样。</p>
  </div>
  <div class="profile-card detailed-card">
    <h4>专业榜样</h4>
    <p><strong>${model.name}</strong>｜${model.title}</p><p>${model.story}</p><p><strong>建议任务：</strong>${model.action}</p>
    <a class="text-link" href="${model.url}" target="_blank" rel="noopener">打开榜样资料</a>
  </div>
  <div class="profile-card detailed-card">
    <h4>学习资料包</h4>
    ${resources.map(r => `<div class="mini-resource"><strong>${r.title}</strong>${sourceBadge(r.source)}<p>任务：${r.task}</p><p>提交：${r.submit}</p><a href="${r.url}" target="_blank" rel="noopener">打开资料</a></div>`).join("")}
  </div>
  <div class="profile-card detailed-card">
    <h4>提交建议</h4>
    <p>${output === "meeting" ? "建议将个人任务转化为小组研讨题，活动后提交小组行动清单。" : output === "report" ? "建议形成可归档心得，包含资料来源、学习收获、科研行动三部分。" : "建议按资料包顺序学习，每完成一项提交对应材料。"}</p>
  </div>`;
  showToast("个性化推荐已生成");
}

const commonActivityStart = {
  title: "开场说明",
  detail: "主持人说明主题、纪律要求、学习目标和材料提交要求。",
  min: 5,
  weight: 1
};

const commonActivityEnd = {
  title: "总结与任务发布",
  detail: "主持人总结，发布资料包、心得提交入口和反馈问卷。",
  min: 3,
  weight: 1
};

const activitySteps = {
  "科研报国研讨": [
    commonActivityStart,
    { title: "资料领学", detail: "领学会前资料包，引用权威来源，提炼与科技自立自强相关的学习要点。", min: 8, weight: 2 },
    { title: "专业榜样导入", detail: "各组选择1位对应学科科学家，讨论其科研选择如何落实到科研训练。", min: 10, weight: 3 },
    { title: "小组研讨", detail: "围绕“我的研究方向如何服务科技自立自强”形成3条行动清单。", min: 10, weight: 3 },
    { title: "代表汇报与点评", detail: "各组代表汇报，老师点评，明确后续任务。", min: 7, weight: 2 },
    commonActivityEnd
  ],
  "强化理论学习": [
    commonActivityStart,
    { title: "党章党规领学", detail: "领学党章重点段落和党员义务，标注资料来源。", min: 10, weight: 2 },
    { title: "问题梳理", detail: "围绕学习材料提出事实性、理解性和行动性问题。", min: 8, weight: 2 },
    { title: "分层交流", detail: "积极分子、预备党员、正式党员分别说明本阶段要落实的学习任务。", min: 10, weight: 3 },
    { title: "测评反馈", detail: "完成简短测评或口头抽问，支委记录薄弱点和后续补学任务。", min: 6, weight: 1 },
    commonActivityEnd
  ],
  "学术诚信教育": [
    commonActivityStart,
    { title: "规范领学", detail: "领学科研诚信和学术规范要求，明确引用、署名、数据记录等底线。", min: 8, weight: 2 },
    { title: "案例辨析", detail: "围绕论文署名、数据复核、实验记录等场景判断风险点。", min: 10, weight: 3 },
    { title: "情景讨论", detail: "分组讨论实验室常见问题，形成可执行的提醒清单。", min: 10, weight: 3 },
    { title: "承诺与点评", detail: "每名成员写出科研诚信承诺，老师点评并提出执行建议。", min: 7, weight: 2 },
    commonActivityEnd
  ],
  "组织生活规范": [
    commonActivityStart,
    { title: "流程说明", detail: "支委说明主题党日、组织生活会和学习记录的基本要求。", min: 8, weight: 2 },
    { title: "案例参考", detail: "学习共产党员网主题党日案例，提炼可迁移的流程结构。", min: 10, weight: 2 },
    { title: "角色分工", detail: "明确主持人、记录人、资料员、反馈问卷负责人和新闻稿撰写人。", min: 8, weight: 2 },
    { title: "流程演练", detail: "按本支部实际情况演练一次活动通知、签到、记录和归档流程。", min: 10, weight: 3 },
    commonActivityEnd
  ],
  "红色实践研学": [
    commonActivityStart,
    { title: "研学背景领学", detail: "介绍实践地点、相关历史材料和本次研学的学习目标。", min: 8, weight: 2 },
    { title: "现场任务分配", detail: "按专业组分配观察记录、资料整理、访谈提问和照片归档任务。", min: 8, weight: 2 },
    { title: "分组研讨", detail: "结合实践材料讨论科研训练、党员身份和服务国家需求之间的关系。", min: 12, weight: 3 },
    { title: "交流汇报", detail: "各组汇报1条学习收获和1条后续行动，支委记录可归档内容。", min: 8, weight: 2 },
    commonActivityEnd
  ]
};

function getStepsByGoal(goal) {
  return activitySteps[goal] || activitySteps["科研报国研讨"];
}

function buildTimeline(totalMinutes, goal) {
  const steps = getStepsByGoal(goal);
  const minSum = steps.reduce((sum, step) => sum + step.min, 0);
  if (!Number.isFinite(totalMinutes) || totalMinutes <= 0) {
    throw new Error("活动时长不是有效数字");
  }
  if (totalMinutes < minSum) {
    throw new Error(`活动时长${totalMinutes}分钟不足，至少需要${minSum}分钟`);
  }

  const remaining = totalMinutes - minSum;
  const weightSum = steps.reduce((sum, step) => sum + step.weight, 0);
  const allocations = steps.map((step, index) => {
    const rawExtra = remaining * step.weight / weightSum;
    return { index, rawExtra, duration: step.min + Math.floor(rawExtra) };
  });
  let used = allocations.reduce((sum, item) => sum + item.duration, 0);
  allocations
    .slice()
    .sort((a, b) => (b.rawExtra - Math.floor(b.rawExtra)) - (a.rawExtra - Math.floor(a.rawExtra)))
    .forEach(item => {
      if (used < totalMinutes) {
        allocations[item.index].duration += 1;
        used += 1;
      }
    });

  let cursor = 0;
  return steps.map((step, index) => {
    const start = cursor;
    const end = start + allocations[index].duration;
    cursor = end;
    return { start, end, title: step.title, detail: step.detail };
  });
}

function validateTimeline(timeline, totalMinutes) {
  if (!Array.isArray(timeline) || !timeline.length) return { ok: false, message: "时间轴为空" };
  if (timeline[0].start !== 0) return { ok: false, message: "第一项未从0分钟开始" };

  for (let i = 0; i < timeline.length; i++) {
    const item = timeline[i];
    if (!Number.isFinite(item.start) || !Number.isFinite(item.end)) {
      return { ok: false, message: `第${i + 1}项时间不是有效数字` };
    }
    if (item.end <= item.start) {
      return { ok: false, message: `第${i + 1}项时长无效` };
    }
    if (!item.title || !item.detail) {
      return { ok: false, message: `第${i + 1}项缺少任务内容` };
    }
    if (item.end > totalMinutes) {
      return { ok: false, message: `第${i + 1}项超过总时长` };
    }
    if (i > 0 && item.start !== timeline[i - 1].end) {
      return { ok: false, message: `第${i + 1}项与上一项时间不连续` };
    }
  }

  const last = timeline[timeline.length - 1];
  if (last.end !== totalMinutes) {
    return { ok: false, message: "最后一项未等于总时长" };
  }

  return { ok: true, message: "时间校验通过" };
}

function generateFullPlan() {
  const theme = byId("activityTheme").value.trim() || "科技报国·物理人的使命担当";
  const goal = byId("activityGoal").value;
  const audience = byId("activityAudience").value;
  const format = byId("activityFormat").value;
  const total = parseInt(byId("activityDuration").value, 10);
  let timeline = [];
  let validation;
  try {
    timeline = buildTimeline(total, goal);
    validation = validateTimeline(timeline, total);
  } catch (err) {
    validation = { ok: false, message: err.message };
  }
  if (!validation.ok) {
    byId("planOutput").innerHTML = `<div class="plan-section"><h4>时间校验未通过</h4><p class="time-check-error">${validation.message}</p><p>请调整活动时长或活动目标后重新生成。系统不会输出未通过校验的时间表。</p></div>`;
    showToast("时间校验未通过，请调整后重试");
    return;
  }
  const checkText = `${validation.message}：共${timeline.length}个环节，时间轴0-${total}分钟连续闭合，无重叠、无空档、无超时、无0分钟环节。`;
  const selectedCases = goal === "科研报国研讨" ? caseLibrary.slice(0, 4) : caseLibrary.slice(1, 4);
  const modelGroups = Object.entries(labels.major).map(([key, name]) => {
    const m = (roleModels[key] || [])[0];
    const tasks = {
      theoretical: "讨论基础理论研究如何服务国家战略需求，并写出一个长期问题意识训练目标。",
      particle: "讨论大科学装置、核技术与国家安全、能源、医学之间的关系。",
      condensed: "讨论材料、半导体、超导、量子器件与科技自立自强的关系。",
      optics: "讨论光电检测、激光技术、光学仪器与高端装备之间的关系。",
      quantum: "讨论量子通信、量子计算、量子精密测量与信息安全之间的关系。"
    };
    return `<li><strong>${name}组：</strong>${tasks[key]}参考案例：${m.name}。</li>`;
  }).join("");
  byId("planOutput").innerHTML = `<div class="plan-section"><h4>一、活动基本信息</h4>
    <p><strong>${theme}</strong><br/>目标：${goal}<br/>对象：${audience}<br/>形式：${format}<br/>时长：${total}分钟</p></div>
    <div class="plan-section"><h4>二、会前准备</h4><ol>
      <li>资料员提前3天推送资料包：学习强国“科技自立自强”专题、共产党员网主题党日案例、中国科学院/国防科工等权威科学家故事。</li>
      <li>按专业方向分组：理论物理、粒子核物理、凝聚态、光学、量子信息。</li>
      <li>每组指定主持人、记录人、汇报人；预备党员至少承担1项组织任务。</li>
      <li>每名成员提交1个科研成长问题，用于现场讨论。</li>
    </ol></div>
    <div class="plan-section"><h4>三、时间校验结果</h4><p class="time-check-ok">${checkText}</p></div>
    <div class="plan-section"><h4>四、活动流程（按${total}分钟自动分配并校验）</h4><ol>${timeline.map((p, idx) => `<li><strong>环节${idx + 1}｜${p.start}-${p.end}分钟（${p.end - p.start}分钟）｜${p.title}</strong>：${p.detail}</li>`).join("")}</ol></div>
    <div class="plan-section"><h4>五、分组任务</h4><ul>${modelGroups}</ul></div>
    <div class="plan-section"><h4>六、经典案例参考</h4>${selectedCases.map(c => `<p><strong>${c.title}</strong>：${c.steps.join(" → ")}。<br/><a href="${c.url}" target="_blank" rel="noopener">查看来源</a></p>`).join("")}</div>
    <div class="plan-section"><h4>七、会后归档</h4><ol><li>签到表。</li><li>领学材料截图或链接清单。</li><li>小组行动清单。</li><li>代表发言记录。</li><li>老师点评记录。</li><li>活动照片。</li><li>反馈问卷结果。</li><li>新闻稿或支部简报。</li></ol><p>心得提交要求：不少于300字，包含“学习资料来源、专业榜样启发、个人科研行动”。</p></div>`;
  showToast("活动方案已生成并完成时间校验");
}

function generatePush() {
  const topic = byId("ideologyTopic").value;
  const type = byId("pushType").value;
  const identity = byId("pushIdentity").value;
  const matched = topic.includes("科技") || topic.includes("报国") ? [resourceLibrary[2], resourceLibrary[3], resourceLibrary[6]] : topic.includes("诚信") ? [resourceLibrary[0], resourceLibrary[11], resourceLibrary[5]] : [resourceLibrary[0], resourceLibrary[2], resourceLibrary[4]];
  const model = topic.includes("诚信") ? roleModels.condensed[0] : roleModels.theoretical[0];
  byId("pushPreview").innerHTML = `<h4>推送标题：博士生如何把“小课题”做进“大需求”？</h4>
    <p><strong>适用对象：</strong>${identity}</p>
    <p><strong>使用场景：</strong>${type}，可用于会前预习、支部群通知或活动后提醒。</p>
    <p><strong>导语：</strong>各位同志，本周学习围绕“${topic}”展开。请先完成资料阅读，再结合自己的研究方向准备一个可讨论的问题，活动现场将按专业方向交流。</p>
    <p><strong>权威资料：</strong></p><ol>${matched.map(r => `<li>${r.title}（${r.source}）<a href="${r.url}" target="_blank" rel="noopener">打开</a></li>`).join("")}</ol>
    <p><strong>专业榜样案例：</strong>${model.name}，${model.title}。可重点讨论其科研选择与国家需求之间的关系。</p>
    <p><strong>行动任务：</strong>填写“我的研究方向-可能服务的需求-下一步训练目标”三栏表，并在下次组织生活中交流。</p>
    <p><strong>互动问题：</strong>你的研究方向最可能在哪个国家需求或未来技术领域产生长期价值？目前还缺哪一项训练？</p>
    <p><strong>提交要求：</strong>150字留言或300字心得，写明阅读资料名称、个人问题和下一步行动。</p>
    <p><strong>资料链接：</strong>${matched.map(r => `<a href="${r.url}" target="_blank" rel="noopener">${r.source}</a>`).join("　")}</p>`;
  showToast("推送内容已生成");
}

function drawChart() {
  const canvas = byId("effectChart"); if (!canvas) return; const ctx = canvas.getContext("2d");
  const values = [92, 95, 94, 96, 93]; const names = ["资料具体", "任务清楚", "流程可执行", "归档完整", "用户可用"];
  ctx.clearRect(0,0,canvas.width,canvas.height); ctx.font = "24px Microsoft YaHei"; ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--text"); ctx.fillText("提交前模拟可用性评估",36,48);
  const baseY = 300, gap = 116;
  values.forEach((v,i)=>{ const x=54+i*gap, h=v*2.2; const g=ctx.createLinearGradient(0,baseY-h,0,baseY); g.addColorStop(0,"#a92323"); g.addColorStop(1,"#c79a3a"); ctx.fillStyle=g; ctx.fillRect(x,baseY-h,54,h); ctx.fillStyle=getComputedStyle(document.body).getPropertyValue("--muted"); ctx.font="16px Microsoft YaHei"; ctx.fillText(names[i],x-8,334); ctx.fillStyle=getComputedStyle(document.body).getPropertyValue("--text"); ctx.fillText(`${v}%`,x+4,baseY-h-12); });
}
function drawSourceChart() {
  const canvas = byId("sourceChart"); if (!canvas) return; const ctx = canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height);
  const data = [{label:"共产党员网",pct:32,color:"#a92323"},{label:"学习强国",pct:24,color:"#c79a3a"},{label:"中国科学院",pct:28,color:"#236b55"},{label:"高校案例",pct:16,color:"#2d5f8b"}];
  ctx.font="20px Microsoft YaHei"; ctx.fillStyle=getComputedStyle(document.body).getPropertyValue("--text"); ctx.fillText("资料来源使用占比",36,36);
  data.forEach((d,i)=>{ const y=70+i*56, w=d.pct*12; ctx.fillStyle=d.color; ctx.fillRect(60,y,w,34); ctx.fillStyle=getComputedStyle(document.body).getPropertyValue("--text"); ctx.font="16px Microsoft YaHei"; ctx.fillText(`${d.label} ${d.pct}%`,w+74,y+24); });
}
function drawPreferenceChart() {
  const canvas = byId("preferenceChart"); if (!canvas) return; const ctx = canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height);
  const data = [{label:"理论阅读",pct:34,color:"#a92323"},{label:"视频学习",pct:26,color:"#c79a3a"},{label:"案例研讨",pct:28,color:"#236b55"},{label:"知识竞赛",pct:12,color:"#2d5f8b"}];
  ctx.font="20px Microsoft YaHei"; ctx.fillStyle=getComputedStyle(document.body).getPropertyValue("--text"); ctx.fillText("学习偏好分布",36,36);
  data.forEach((d,i)=>{ const y=70+i*56, w=d.pct*12; ctx.fillStyle=d.color; ctx.fillRect(60,y,w,34); ctx.fillStyle=getComputedStyle(document.body).getPropertyValue("--text"); ctx.font="16px Microsoft YaHei"; ctx.fillText(`${d.label} ${d.pct}%`,w+74,y+24); });
}

// events
let currentIdentity = "activist"; let currentMode = "reading";
document.querySelectorAll(".nav-item").forEach(item => item.addEventListener("click", () => switchView(item.dataset.view)));
document.querySelectorAll("[data-view-jump]").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.viewJump)));
byId("themeToggle").addEventListener("click", () => { document.body.classList.toggle("dark"); drawChart(); drawSourceChart(); drawPreferenceChart(); });
byId("generateBrief").addEventListener("click", () => { renderSuggestion(); showToast("已生成本周简报建议"); });
byId("generateProfile").addEventListener("click", generateProfileRecommendation);
byId("makePlan").addEventListener("click", generateFullPlan);
byId("copyPlan").addEventListener("click", async () => { const text = byId("planOutput").innerText.trim(); if (!text) return showToast("请先生成活动方案"); try { await navigator.clipboard.writeText(text); showToast("方案文本已复制"); } catch { showToast("复制失败，请手动选择文本"); } });
byId("activityDuration").addEventListener("input", e => { byId("durationLabel").textContent = `${e.target.value} 分钟`; });
byId("makePush").addEventListener("click", generatePush);
byId("resourceSearch").addEventListener("input", e => renderResources(e.target.value));
["resourceIdentity", "resourceType", "resourceScene"].forEach(id => byId(id)?.addEventListener("change", () => renderResources(byId("resourceSearch").value)));
document.querySelectorAll("#identityTabs button").forEach(btn => btn.addEventListener("click", () => { document.querySelectorAll("#identityTabs button").forEach(b => b.classList.remove("active")); btn.classList.add("active"); currentIdentity = btn.dataset.identity; renderLearning(currentIdentity, currentMode); }));
document.querySelectorAll("#modeTabs button").forEach(btn => btn.addEventListener("click", () => { document.querySelectorAll("#modeTabs button").forEach(b => b.classList.remove("active")); btn.classList.add("active"); currentMode = btn.dataset.mode; renderLearning(currentIdentity, currentMode); }));
document.querySelectorAll("#majorTabs button").forEach(btn => btn.addEventListener("click", () => { document.querySelectorAll("#majorTabs button").forEach(b => b.classList.remove("active")); btn.classList.add("active"); renderRoleModels(btn.dataset.major); }));

renderTasks(); renderSuggestion(); renderLearning(); renderRoleModels(); renderCases(); renderResources(); generateFullPlan(); generatePush();
