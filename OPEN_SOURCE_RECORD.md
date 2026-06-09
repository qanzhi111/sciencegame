# 开源项目引用记录 (OPEN_SOURCE_RECORD)

本文档汇总本仓库所有引用的开源项目，按照开源协议要求进行标注。

---

## 1. foldit / foldit

- **GitHub 地址**: https://github.com/foldit/foldit
- **开源协议**: 专用协议 (Foldit End User License Agreement)
- **使用模块**: game/fold-protein/
- **用途**: 蛋白质折叠解谜游戏核心玩法参考
- **引用说明**: 
  - 本项目基于 foldit 开源项目进行网页端轻量化二次开发
  - 保留了蛋白质 3D 模型、折叠操作、解谜评分等核心逻辑
  - 移除了桌面客户端专用模块（账号系统、离线缓存、编译模块等）
  - 仅做网页适配与界面改造

---

## 2. OpenRelativity

- **GitHub 地址**: https://github.com/MITGameLab/OpenRelativity
- **开源协议**: MIT License
- **使用模块**: game/relativity-view/
- **用途**: 相对论物理可视化游戏
- **引用说明**:
  - 基于 OpenRelativity 的相对论光学模拟理念
  - 实现光速运动视觉畸变、时空扭曲效果
  - 针对网页端进行性能优化与简化

---

## 3. OpenGame

- **GitHub 地址**: https://github.com/leigest519/OpenGame
- **开源协议**: MIT License
- **使用模块**: game/quick-demo/
- **用途**: 极速轻量解谜 Demo 生成框架
- **引用说明**:
  - 参考其快速生成科学解谜小游戏的理念
  - 实现生物、物理类选择题与拖拽拼图功能

---

## 4. urchin

- **GitHub 地址**: https://github.com/urchinbrain/urchin
- **开源协议**: BSD License
- **使用模块**: game/common/data-view/
- **用途**: 通用 3D 数据可视化组件
- **引用说明**:
  - 抽取其神经科学 3D 可视化渲染能力
  - 剥离神经科学专属逻辑，适配通用科研数据展示
  - 封装为全局可复用组件

---

## 5. nandgame

- **GitHub 地址**: https://github.com/nandgame/nandgame
- **开源协议**: 定制协议
- **使用模块**: game/extend-puzzle/
- **用途**: 数字逻辑解谜参考
- **引用说明**:
  - 参考其数字逻辑关卡架构与解谜规则设计
  - 不照搬完整代码，仅参考关卡设计思路

---

## 6. hyperrogue

- **GitHub 地址**: https://github.com/zenorogue/hyperrogue
- **开源协议**: GPL (GNU General Public License)
- **使用模块**: game/extend-puzzle/
- **用途**: 非欧几何关卡设计参考
- **引用说明**:
  - 参考其空间几何解谜玩法
  - 不照搬完整代码，仅参考关卡架构

---

## 合规声明

1. 本项目所有开源引用均保留原项目的版权声明与协议
2. 每个引用开源代码的文件头部均添加了中英文溯源注释
3. 如需使用本项目代码，请自行遵循各开源项目的协议要求
4. 本项目仅供学习与研究使用

---

*最后更新: 2024*
