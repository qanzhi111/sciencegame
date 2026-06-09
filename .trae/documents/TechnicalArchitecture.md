# 科研区块链公民科学游戏官网 - 技术架构文档

## 1. 架构设计

### 1.1 前端技术选型

- **框架**：React@18 + Vite
- **样式**：Tailwind CSS@3 + 自定义 CSS 变量
- **动画**：Framer Motion + CSS 动画
- **图标**：Lucide React
- **字体**：Google Fonts（Orbitron + Inter）

### 1.2 项目初始化

使用 `npm create vite@latest` 初始化项目

### 1.3 目录结构

```
src/
├── components/          # 公共组件
│   ├── layout/         # 布局组件（Header, Footer, Nav）
│   ├── ui/             # UI 组件（Button, Card, Modal）
│   └── sections/       # 页面区块组件
├── pages/              # 页面组件
│   ├── Home/           # 首页
│   ├── ProjectIntro/   # 项目介绍
│   ├── GameEcology/    # 游戏生态
│   ├── Technology/     # 技术架构
│   ├── Tokenomics/     # 经济模型
│   ├── Whitepaper/     # 白皮书
│   ├── OpenSource/     # 开源社区
│   └── Cooperation/    # 合作生态
├── hooks/              # 自定义 Hooks
├── styles/             # 全局样式
├── utils/              # 工具函数
├── data/               # Mock 数据
└── App.tsx             # 根组件
```

---

## 2. 路由定义

| 路由 | 页面名称 | 描述 |
|------|----------|------|
| / | Home | 首页落地页 |
| /project | ProjectIntro | 项目介绍页 |
| /game | GameEcology | 游戏生态与玩法页 |
| /technology | Technology | 技术架构页 |
| /tokenomics | Tokenomics | 经济模型页 |
| /whitepaper | Whitepaper | 白皮书下载页 |
| /opensource | OpenSource | 开源社区页 |
| /cooperation | Cooperation | 合作与生态页 |

---

## 3. 页面组件结构

### 3.1 首页（Home）

```
Home/
├── HeroSection          # 首屏横幅
├── ProjectIntro         # 项目核心简介
├── AdvantagesSection    # 四大优势卡片
├── ResearchTracks       # 科研赛道展示
├── GamePreview          # 游戏玩法预览
├── DataDashboard        # 数据看板预留位
├── PartnersSection      # 合作伙伴板块
└── Footer               # 底部导航
```

### 3.2 其他页面结构

每个页面包含：
- 页面 Header（页面标题 + 面包屑）
- 页面内容区块
- 相关页面推荐/返回导航

---

## 4. 全局组件设计

### 4.1 Layout 组件

| 组件 | 功能 |
|------|------|
| Header | 顶部导航，含 Logo、语言切换、导航链接 |
| Footer | 底部导航，含链接矩阵、版权信息 |
| MobileNav | 移动端导航菜单 |

### 4.2 UI 组件

| 组件 | 变体 |
|------|------|
| Button | primary, secondary, outline, ghost |
| Card | default, featured, animated |
| Badge | default, success, warning, info |
| Modal | default, fullscreen |
| Section | container, fluid |

### 4.3 动画效果

- **页面加载**：Staggered fade-in（交错淡入）
- **滚动触发**：Intersection Observer 驱动
- **Hover 效果**：Scale + Glow
- **背景特效**：Canvas 粒子动画、数据流动画

---

## 5. 数据层

### 5.1 Mock 数据

使用本地 JSON/JS 文件模拟数据，后续可对接真实 API

### 5.2 数据结构

```typescript
// 合作伙伴
interface Partner {
  id: string;
  name: string;
  logo: string;
  type: 'research' | 'blockchain' | 'game' | 'opensource';
}

// 科研赛道
interface ResearchTrack {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// 代币分配
interface TokenAllocation {
  category: string;
  percentage: number;
  description: string;
}

// 技术路线
interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}
```

---

## 6. 响应式策略

| 断点 | 宽度 | 布局调整 |
|------|------|----------|
| Desktop | >= 1280px | 全功能展示 |
| Tablet | 768px - 1279px | 适配平板 |
| Mobile | < 768px | 简化导航，单列布局 |

---

## 7. 后续拓展接口

| 接口名称 | 用途 |
|----------|------|
| /api/wallet/connect | 钱包登录 |
| /api/user/assets | 链上资产查询 |
| /api/staking | 质押挖矿数据 |
| /api/user/tasks | 个人任务数据中心 |
| /api/chain/stats | 全网生态数据 |

---

## 8. 性能优化

- 图片懒加载
- 组件按需加载（React.lazy）
- CSS 动画优先（避免 JS 动画）
- 第三方库按需引入
