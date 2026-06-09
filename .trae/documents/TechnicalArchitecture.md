# 科学游戏开发技术架构

## 1. 架构设计

```
┌─────────────────────────────────────────────────────────┐
│                      前端静态页面                        │
├─────────────────────────────────────────────────────────┤
│  游戏模块 (game/)          │  公共组件 (common/)         │
│  - fold-protein/           │  - data-view/              │
│  - relativity-view/        │                           │
│  - quick-demo/              │                           │
│  - extend-puzzle/          │                           │
├─────────────────────────────────────────────────────────┤
│                    第三方依赖 (CDN)                      │
│  - Three.js (3D渲染)                                   │
│  - 原生开源项目代码                                       │
└─────────────────────────────────────────────────────────┘
```

## 2. 技术选型

| 类别 | 技术 |
|------|------|
| 页面结构 | HTML5 + CSS3 + JavaScript (ES6+) |
| 3D 渲染 | Three.js (通过 CDN 引入) |
| 状态管理 | 原生 localStorage |
| 数据上报 | Fetch API |
| 构建部署 | 纯静态，无需构建 |

## 3. 目录结构

```
sciencegame/
├── index.html              # 游戏主页入口
├── game/
│   ├── fold-protein/       # 蛋白质折叠解谜
│   │   ├── index.html
│   │   ├── core/           # 原项目核心 (禁止修改)
│   │   ├── ui/             # 自定义 UI
│   │   ├── api/            # 数据接口
│   │   └── assets/         # 静态资源
│   ├── relativity-view/   # 相对论可视化
│   │   ├── index.html
│   │   ├── sim-core/
│   │   ├── scene/
│   │   ├── task/
│   │   └── ui/
│   ├── quick-demo/         # 轻量 Demo
│   ├── common/             # 公共组件
│   │   └── data-view/     # 3D 可视化组件
│   └── extend-puzzle/      # 逻辑解谜
├── stats.html              # 数据看板页面
├── OPEN_SOURCE_RECORD.md   # 开源引用记录
└── README.md               # 部署说明
```

## 4. 路由定义

| 路由 | 用途 |
|------|------|
| `/` | 游戏主页，展示所有游戏入口 |
| `/game/fold-protein/` | 蛋白质折叠解谜游戏 |
| `/game/relativity-view/` | 相对论可视化游戏 |
| `/game/quick-demo/` | 轻量试玩 Demo |
| `/game/extend-puzzle/` | 逻辑几何解谜 |
| `/stats/` | 数据看板 |

## 5. 数据接口定义

### 5.1 前端数据存储

```typescript
interface GameStats {
  playTime: number;          // 游玩时长(秒)
  levelCompleted: number;     // 完成关卡数
  totalScore: number;         // 总得分
  achievements: string[];    // 成就列表
}
```

### 5.2 数据上报接口 (预留)

```typescript
interface ReportPayload {
  gameId: string;
  stats: GameStats;
  timestamp: number;
}

// 接口名称（不涉及实现）
function reportGameStats(payload: ReportPayload): void;
function unlockAchievement(achievementId: string): void;
function awardGameToken(amount: number): void;
```

## 6. 部署架构

- **部署平台**: GitHub Pages
- **部署方式**: GitHub Actions 自动部署或手动推送
- **域名绑定**: 支持自定义域名
- **iframe 嵌入**: 提供嵌入代码支持官网内嵌

## 7. 开源引用清单

| 项目 | GitHub 地址 | 协议 | 用途 |
|------|-------------|------|------|
| foldit | foldit/foldit | 专用协议 | 蛋白折叠核心 |
| OpenRelativity | MITGameLab/OpenRelativity | MIT | 相对论可视化 |
| OpenGame | leigest519/OpenGame | MIT | 快速 Demo 生成 |
| urchin | urchinbrain/urchin | BSD | 3D 数据可视化 |
| nandgame | nandgame/nandgame | 定制 | 逻辑解谜参考 |
| hyperrogue | zenorogue/hyperrogue | GPL | 几何解谜参考 |
