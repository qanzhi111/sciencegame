# 科学游戏中心

基于开源科研游戏项目进行网页端轻量化二次开发，打造可在浏览器运行的科学游戏平台。

## 🎮 游戏列表

| 游戏 | 目录 | 描述 |
|------|------|------|
| 蛋白质折叠解谜 | [game/fold-protein/](game/fold-protein/) | 3D 蛋白结构拖拽折叠解谜 |
| 相对论沉浸可视化 | [game/relativity-view/](game/relativity-view/) | 光速运动视觉畸变体验 |
| 极速轻量解谜 | [game/quick-demo/](game/quick-demo/) | 生物/物理知识选择题 |
| 逻辑几何解谜 | [game/extend-puzzle/](game/extend-puzzle/) | 数字逻辑与几何谜题 |
| 3D 数据可视化组件 | [game/common/data-view/](game/common/data-view/) | 通用 3D 渲染组件 |

## 🚀 快速部署

### 方式一：GitHub Pages（推荐）

1. **Fork 本仓库**
2. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 `main` 分支和 `/(root)` 目录
   - 点击 Save
3. **访问游戏**
   - 等待 1-2 分钟部署完成
   - 访问 `https://你的用户名.github.io/仓库名/`

### 方式二：本地运行

1. 下载或克隆本仓库
2. 直接双击 `index.html` 即可在浏览器中运行
3. 或使用任意静态服务器：
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (npx)
   npx serve .
   ```

### 方式三：嵌入现有官网

使用 iframe 嵌入游戏页面：

```html
<iframe 
    src="https://你的域名/game/fold-protein/index.html"
    width="100%" 
    height="600px" 
    frameborder="0">
</iframe>
```

## 📁 目录结构

```
sciencegame/
├── index.html              # 游戏主页
├── stats.html              # 数据看板
├── game/
│   ├── fold-protein/       # 蛋白质折叠
│   │   ├── index.html
│   │   ├── core/           # 核心算法（禁止修改）
│   │   ├── ui/             # 自定义界面
│   │   ├── api/            # 数据接口
│   │   └── assets/         # 静态资源
│   ├── relativity-view/    # 相对论可视化
│   ├── quick-demo/         # 轻量 Demo
│   ├── common/             # 公共组件
│   │   └── data-view/     # 3D 可视化
│   └── extend-puzzle/      # 逻辑解谜
├── OPEN_SOURCE_RECORD.md   # 开源引用记录
└── README.md              # 本文件
```

## 🎨 视觉规范

- **主色调**: 深蓝 `#1a2a4a`
- **辅助色**: 深空灰 `#2d3436`
- **强调色**: 极光青 `#00d4aa`

## 🔧 技术栈

- HTML5 + CSS3 + JavaScript (ES6+)
- Three.js (3D 渲染，通过 CDN 引入)
- 纯前端静态页面，无后端依赖
- localStorage 本地数据存储

## 📊 数据统计

游戏会自动记录以下数据到 localStorage：
- 游玩时长
- 完成关卡数
- 总得分
- 成就列表

## 📝 开源合规

本项目基于以下开源项目二次开发，详见 [OPEN_SOURCE_RECORD.md](OPEN_SOURCE_RECORD.md)：
- foldit/foldit
- MITGameLab/OpenRelativity
- leigest519/OpenGame
- urchinbrain/urchin
- nandgame/nandgame
- zenorogue/hyperrogue

## 📄 License

本项目仅供学习与研究使用。所有引用的开源项目版权归其各自所有者所有。
