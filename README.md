# 科学游戏中心 · Science Game Center

基于开源科研游戏项目进行网页端轻量化二次开发，打造可在浏览器运行的科学游戏平台。
深度增强两个主力游戏：**蛋白质折叠解谜**（可玩的折叠模拟）与 **相对论沉浸可视化**（真实相对论效应演示）。

## 🎮 游戏列表（主力游戏突出）

| 优先级 | 游戏 | 目录 | 深度开发亮点 |
|--------|------|------|----------|
| 🌟 **P0 主力** | **蛋白质折叠解谜** | [game/fold-protein/](game/fold-protein/) | **真实氨基酸物理模拟**：疏水塌缩、盐键、电荷相互作用、6 关卡逐步教学、折叠能量计分 |
| 🌟 **P0 主力** | **相对论沉浸可视化** | [game/relativity-view/](game/relativity-view/) | **真实光学效应**：光行差、多普勒红移蓝移、聚束效应、长度收缩、4 任务观测引导 |
| P1 | 极速轻量解谜 | [game/quick-demo/](game/quick-demo/) | 生物/物理知识选择题 + 拖拽排序 |
| P2 | 逻辑几何解谜 | [game/extend-puzzle/](game/extend-puzzle/) | 数字逻辑门 + 几何推理 |
| 组件 | 3D 数据可视化 | [game/common/data-view/](game/common/data-view/) | 通用 3D 渲染复用组件 |

## 🧬 蛋白质折叠解谜 · 亮点

- **科学的能量函数**：每一次拖拽会实时计算疏水作用、盐键（+/− 配对）、空间位阻、紧凑度
- **6 关渐进关卡**：从简单交替链到完整电荷序列
- **教学引导**：首次启动有分步讲解，每关通关附带科学知识卡片
- **进度与最佳记录**：每关最高分持久化，自动解锁下一关
- **空格摇一摇**：帮助跳出局部最优，让玩家体验"退火"过程

## 🚀 相对论沉浸可视化 · 亮点

- **实时物理读数**：当前速度 c、洛伦兹因子 γ、时间膨胀、长度收缩、多普勒因子全部实时显示
- **连续速度调节**：滑杆无级调速（0 ~ 0.999c），也有预设档位
- **四个观察任务**：
  1. 观察星光光行差（光向运动前方汇聚）
  2. 观察前方蓝移 / 后方红移（多普勒效应）
  3. 体验极端相对论下的聚束效应（整个天空收缩到一个圆盘）
  4. 穿越高速运动天体（观察长度收缩）
- **天体随速度变色**：恒星高温时变蓝，行星高速度时呈现冷色调

## 🚀 快速部署

### 方式一：GitHub Pages（推荐）

1. **Fork 本仓库**
2. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 `main` 分支和 `/(root)` 目录
   - 点击 Save
3. 访问 `https://你的用户名.github.io/仓库名/`

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
├── index.html              # 游戏主页入口
├── stats.html              # 数据看板（带成就展示与数据重置）
├── game/
│   ├── fold-protein/       # 🧬 蛋白质折叠 · 主力游戏
│   │   └── index.html     # 完整可玩：6 关 + 教学引导 + 能量计分
│   ├── relativity-view/    # 🚀 相对论可视化 · 主力游戏
│   │   └── index.html     # 完整可玩：滑杆调速 + 物理读数 + 4 任务
│   ├── quick-demo/         # ⚡ 轻量 Demo（选择题/拖拽）
│   ├── extend-puzzle/      # 🧩 逻辑与几何谜题
│   └── common/data-view/  # 📊 通用 3D 可视化组件
├── OPEN_SOURCE_RECORD.md   # 开源引用记录
└── README.md              # 本文件
```

## 🎨 视觉规范

- **主色调**: 深蓝 `#1a2a4a`
- **辅助色**: 深空灰 `#2d3430`
- **强调色**: 极光青 `#00d4aa`
- **光晕**: 极光青辉 `#00ffcc`

## 🔧 技术栈

- HTML5 + CSS3 + JavaScript (ES6+)
- Three.js (3D 渲染，通过 CDN 引入)
- 纯前端静态页面，无后端依赖
- localStorage 本地数据存储（自动记录游玩时长、关卡、最高得分、成就）

## 📊 数据统计

所有游戏自动记录到本地 localStorage：
- 游玩时长（秒，持续累加）
- 完成关卡数
- 总得分
- 成就列表（如蛋白质折叠的关卡通关）
- 数据看板页 `stats.html` 提供总览与一键清空

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
