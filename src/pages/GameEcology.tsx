import { motion } from 'framer-motion';
import { Gamepad2, Cpu, Database, Trophy, ArrowRight, Layers, Zap, Shield, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/Section';
import { useLanguageStore } from '@/store/useStore';

export default function GameEcology() {
  const { language } = useLanguageStore();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'zh' ? '游戏生态与玩法' : 'Game Ecology & Gameplay'}
            </h1>
            <p className="text-gray-300 text-lg">
              {language === 'zh'
                ? 'SciChain 通过游戏化的方式让每个人都能参与前沿科学研究，在娱乐中为科学发展做出贡献'
                : 'SciChain enables everyone to participate in cutting-edge scientific research through gamification, contributing to scientific development while having fun'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Game Systems */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-4">
            {language === 'zh' ? '核心游戏体系' : 'Core Game Systems'}
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            {language === 'zh'
              ? '两大成熟易落地的核心玩法，优先展示生物解谜和物理可视化'
              : 'Two mature and easy-to-implement core gameplay modes, focusing on biological puzzles and physics visualization'}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card variant="featured" className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-accent/10 flex items-center justify-center">
                <Sparkles className="w-20 h-20 text-emerald-400/50" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-white mb-2">
                  {language === 'zh' ? '生物解谜' : 'Biological Puzzles'}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {language === 'zh'
                    ? '蛋白质折叠解谜游戏，玩家通过三维拼图方式帮助预测蛋白质结构，参与真实生物医学研究'
                    : 'Protein folding puzzle games where players help predict protein structures through 3D puzzle-solving, participating in real biomedical research'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                    {language === 'zh' ? '蛋白质折叠' : 'Protein Folding'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                    {language === 'zh' ? '基因分析' : 'Gene Analysis'}
                  </span>
                </div>
              </div>
            </Card>

            <Card variant="featured" className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-accent/10 flex items-center justify-center">
                <Zap className="w-20 h-20 text-purple-400/50" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-white mb-2">
                  {language === 'zh' ? '物理可视化' : 'Physics Visualization'}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {language === 'zh'
                    ? '相对论可视化与星系演化模拟，让用户通过交互体验理解宇宙奥秘'
                    : 'Relativity visualization and galaxy evolution simulation, allowing users to understand cosmic mysteries through interactive experiences'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">
                    {language === 'zh' ? '相对论模拟' : 'Relativity Simulation'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">
                    {language === 'zh' ? '星系演化' : 'Galaxy Evolution'}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* User Participation Modes */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '用户参与模式' : 'User Participation Modes'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Cpu,
                title: language === 'zh' ? '闲置算力贡献' : 'Idle Computing Contribution',
                desc: language === 'zh'
                  ? '贡献闲置设备的计算能力，参与大规模分布式计算任务，无需手动操作'
                  : 'Contribute computing power from idle devices to participate in large-scale distributed computing tasks without manual operation',
              },
              {
                icon: Database,
                title: language === 'zh' ? '科研数据标注' : 'Research Data Annotation',
                desc: language === 'zh'
                  ? '通过游戏化界面标注科研数据，帮助训练 AI 模型，加速科研进程'
                  : 'Annotate research data through gamified interfaces to help train AI models and accelerate research progress',
              },
              {
                icon: Gamepad2,
                title: language === 'zh' ? '科学解谜闯关' : 'Scientific Puzzle Challenges',
                desc: language === 'zh'
                  ? '参与各类科研主题解谜游戏，在闯关过程中为科学研究提供解决方案'
                  : 'Participate in various research-themed puzzle games, providing solutions for scientific research during gameplay',
              },
            ].map((item, i) => (
              <Card key={i} variant="interactive" className="p-6 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gamification Incentive */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '游戏化激励体系' : 'Gamified Incentive System'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Layers,
                title: language === 'zh' ? '动态代币奖励' : 'Dynamic Token Rewards',
                desc: language === 'zh'
                  ? '根据任务难度、贡献度和完成质量，动态发放代币奖励，多劳多得'
                  : 'Dynamically distribute token rewards based on task difficulty, contribution level, and completion quality',
              },
              {
                icon: Trophy,
                title: language === 'zh' ? 'NFT 成就系统' : 'NFT Achievement System',
                desc: language === 'zh'
                  ? '解锁科研里程碑成就，获得独特 NFT 收藏品，记录你的科学贡献'
                  : 'Unlock research milestones and achievements, receive unique NFT collectibles to record your scientific contributions',
              },
              {
                icon: Shield,
                title: language === 'zh' ? '全员股权兑换' : 'Employee Equity Exchange',
                desc: language === 'zh'
                  ? '长期贡献者可将奖励兑换为生态股权代币，参与生态治理和分红'
                  : 'Long-term contributors can exchange rewards for ecosystem equity tokens to participate in governance and dividends',
              },
            ].map((item, i) => (
              <Card key={i} variant="featured" className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Optimization */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-4">
            {language === 'zh' ? '体验优化方案' : 'Experience Optimization'}
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            {language === 'zh'
              ? 'Web2+Web3 混合架构，降低入门门槛，优先保障游戏趣味性与用户留存'
              : 'Web2+Web3 hybrid architecture, lowering entry barriers, prioritizing game fun and user retention'}
          </p>

          <Card variant="featured" className="p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-semibold text-lg text-white mb-4">
                  {language === 'zh' ? '传统 Web3 门槛' : 'Traditional Web3 Barriers'}
                </h3>
                <ul className="space-y-3">
                  {[
                    language === 'zh' ? '钱包创建复杂，新手望而却步' : 'Complex wallet creation, beginners hesitate',
                    language === 'zh' ? 'Gas 费用高昂，小额操作不经济' : 'High gas fees, small operations uneconomical',
                    language === 'zh' ? '私钥管理风险大，用户担忧资产安全' : 'High private key management risk, users worry about asset safety',
                    language === 'zh' ? '链上操作延迟影响游戏体验' : 'On-chain operation delays affect gaming experience',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-white mb-4">
                  {language === 'zh' ? 'SciChain 解决方案' : 'SciChain Solutions'}
                </h3>
                <ul className="space-y-3">
                  {[
                    language === 'zh' ? '一键社交登录，Web2 用户无缝接入' : 'One-click social login, seamless Web2 user access',
                    language === 'zh' ? '批量交易聚合，降低 Gas 成本90%' : 'Batch transaction aggregation, reducing gas costs by 90%',
                    language === 'zh' ? '托管钱包 + 社交恢复，资产安全无忧' : 'Custodial wallet + social recovery, asset safety guaranteed',
                    language === 'zh' ? '链下游戏 + 链上结算，体验流畅' : 'Off-chain gaming + on-chain settlement, smooth experience',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            {language === 'zh' ? '准备好开始科研之旅了吗？' : 'Ready to Start Your Research Journey?'}
          </h2>
          <Button size="lg">
            {language === 'zh' ? '开始游戏' : 'Start Gaming'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
