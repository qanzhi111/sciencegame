// 合作伙伴数据
export const partners = [
  { id: '1', name: 'MIT Media Lab', type: 'research' as const, logo: '/logos/mit.png' },
  { id: '2', name: 'BOINC', type: 'opensource' as const, logo: '/logos/boinc.png' },
  { id: '3', name: 'Ethereum Foundation', type: 'blockchain' as const, logo: '/logos/ethereum.png' },
  { id: '4', name: 'Foldit', type: 'game' as const, logo: '/logos/foldit.png' },
  { id: '5', name: 'Stanford Research Institute', type: 'research' as const, logo: '/logos/sri.png' },
  { id: '6', name: 'Polkadot', type: 'blockchain' as const, logo: '/logos/polkadot.png' },
];

// 科研赛道数据
export const researchTracks = [
  {
    id: 'biomedical',
    name: '生物医学',
    nameEn: 'Biomedical',
    description: '蛋白质折叠、基因分析、药物分子模拟',
    icon: 'dna',
  },
  {
    id: 'physics',
    name: '物理天文',
    nameEn: 'Physics & Astronomy',
    description: '相对论可视化、星系演化模拟、宇宙探测',
    icon: 'atom',
  },
  {
    id: 'chemistry',
    name: '化学材料',
    nameEn: 'Chemistry & Materials',
    description: '分子拼接、新材料设计、反应路径优化',
    icon: 'flask',
  },
  {
    id: 'environment',
    name: '环境地理',
    nameEn: 'Environment & Geography',
    description: '气候模拟、生态系统建模、地理数据分析',
    icon: 'globe',
  },
  {
    id: 'computing',
    name: '计算机数学',
    nameEn: 'Computing & Mathematics',
    description: '算法可视化、密码学研究、分布式计算',
    icon: 'cpu',
  },
];

// 优势卡片数据
export const advantages = [
  {
    id: '1',
    title: '科研任务游戏化',
    titleEn: 'Gamified Research Tasks',
    description: '将复杂科研问题转化为有趣的解谜游戏，让每个人都能参与前沿科学研究',
    icon: 'gamepad',
  },
  {
    id: '2',
    title: '区块链底层技术',
    titleEn: 'Blockchain Infrastructure',
    description: '基于分片技术、跨链协议、PBFT+LPoS共识机制构建安全高效的去中心化网络',
    icon: 'lock',
  },
  {
    id: '3',
    title: '双代币经济模型',
    titleEn: 'Dual-Token Economy',
    description: '治理代币用于社区投票决策，实用代币用于游戏交易和任务奖励',
    icon: 'coins',
  },
  {
    id: '4',
    title: '全员持股生态',
    titleEn: 'Employee Ownership Ecosystem',
    description: '对标华为全员持股机制，算力贡献、科研任务、长期投入均可获得股权代币',
    icon: 'users',
  },
];

// 游戏玩法数据
export const gameModes = [
  {
    id: 'puzzle',
    title: '解谜科研',
    titleEn: 'Research Puzzles',
    description: '通过解谜方式参与蛋白质折叠、分子结构分析等科研任务',
    image: '/images/puzzle.jpg',
  },
  {
    id: 'sandbox',
    title: '模拟沙盒',
    titleEn: 'Simulation Sandbox',
    description: '在虚拟环境中模拟星系演化、气候变迁等复杂科学现象',
    image: '/images/sandbox.jpg',
  },
  {
    id: 'immersive',
    title: '沉浸式科学体验',
    titleEn: 'Immersive Science',
    description: 'VR/AR技术打造的沉浸式科研体验，让科学探索更加直观有趣',
    image: '/images/immersive.jpg',
  },
];

// 代币分配数据
export const tokenAllocations = [
  { category: '团队', categoryEn: 'Team', percentage: 20, description: '核心团队长期锁定' },
  { category: '社区空投', categoryEn: 'Airdrop', percentage: 30, description: '社区贡献者激励' },
  { category: '科研基金池', categoryEn: 'Research Fund', percentage: 30, description: '科研项目基金' },
  { category: '全员持股', categoryEn: 'Employee Equity', percentage: 20, description: '生态贡献者分配' },
];

// 技术路线数据
export const roadmap = [
  {
    phase: '第一阶段',
    phaseEn: 'Phase 1',
    title: '技术验证',
    titleEn: 'Technical Validation',
    items: ['完成PBFT+LPoS共识测试', 'BOINC算力接口对接', '蛋白质折叠游戏Demo'],
    status: 'completed' as const,
  },
  {
    phase: '第二阶段',
    phaseEn: 'Phase 2',
    title: '测试网上线',
    titleEn: 'Testnet Launch',
    items: ['开放算力贡献任务', 'NFT成就系统上线', '双代币经济模型测试'],
    status: 'current' as const,
  },
  {
    phase: '第三阶段',
    phaseEn: 'Phase 3',
    title: '主网启动',
    titleEn: 'Mainnet Launch',
    items: ['主网正式上线', '治理代币DAO投票', '科研任务全面开放'],
    status: 'upcoming' as const,
  },
  {
    phase: '第四阶段',
    phaseEn: 'Phase 4',
    title: '生态拓展',
    titleEn: 'Ecosystem Expansion',
    items: ['跨链元宇宙布局', 'AIGC科研生态', '全球科研机构合作'],
    status: 'upcoming' as const,
  },
];

// 开源项目数据
export const openSourceProjects = [
  {
    id: 'foldit',
    name: 'Foldit',
    description: '华盛顿大学开发的蛋白质折叠游戏',
    url: 'https://fold.it',
    license: 'Custom',
  },
  {
    id: 'thrive',
    name: 'Thrive',
    description: '开放源代码的进化模拟游戏',
    url: 'https://revolutionarygamesstudio.com/thrive/',
    license: 'GPLv3',
  },
  {
    id: 'openrelativity',
    name: 'OpenRelativity',
    description: 'MIT开发的相对论可视化工具',
    url: 'https://spacexpress.github.io/OpenRelativity/',
    license: 'MIT',
  },
  {
    id: 'boinc',
    name: 'BOINC',
    description: '加州大学伯克利分校的分布式计算平台',
    url: 'https://boinc.berkeley.edu/',
    license: 'GPLv3',
  },
];

// 白皮书版本数据
export const whitepaperVersions = [
  { version: 'v2.1', date: '2024-12-01', changelog: '更新经济模型细节，新增全员持股机制说明' },
  { version: 'v2.0', date: '2024-09-15', changelog: '重大版本更新，完整披露双代币经济模型' },
  { version: 'v1.5', date: '2024-06-01', changelog: '新增技术架构详细设计' },
  { version: 'v1.0', date: '2024-03-01', changelog: '初始版本发布' },
];

// 案例分析数据
export const caseStudies = [
  {
    id: 'foldit',
    name: 'Foldit',
    nameCn: '蛋白质折叠游戏',
    description: '玩家通过三维拼图游戏帮助预测蛋白质结构，2011年Nature文章发表研究成果',
    lessons: '证明游戏化公民科学的可行性，展示众包激励的有效性',
  },
  {
    id: 'eve',
    name: 'EVE Online',
    nameCn: '星战前夜',
    description: '游戏内嵌科研任务，玩家参与真实星系数据分析',
    lessons: '展示游戏与科研结合的商业模式可能性',
  },
  {
    id: 'boinc',
    name: 'BOINC',
    nameCn: '分布式计算平台',
    description: '志愿者贡献闲置算力给各种科研项目，已运行20年',
    lessons: '证明去中心化算力贡献模式的长期可持续性',
  },
];
