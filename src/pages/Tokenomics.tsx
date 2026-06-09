import { motion } from 'framer-motion';
import { Vote, Coins, TrendingUp, Shield, AlertTriangle, ArrowRight, Lock, Zap, Users } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/Section';
import { useLanguageStore } from '@/store/useStore';
import { tokenAllocations } from '@/data/mockData';

export default function Tokenomics() {
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
              {language === 'zh' ? '经济模型' : 'Tokenomics'}
            </h1>
            <p className="text-gray-300 text-lg">
              {language === 'zh'
                ? '双代币经济模型 + 全员持股机制，构建可持续的科研生态激励体系'
                : 'Dual-token economic model + employee ownership mechanism, building a sustainable research ecosystem incentive system'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dual Token System */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '双代币体系' : 'Dual Token System'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card variant="featured" className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Vote className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-white">
                    {language === 'zh' ? '治理代币' : 'Governance Token'}
                  </h3>
                  <span className="text-blue-400 text-sm">$GOV</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  language === 'zh' ? 'DAO 社区投票治理' : 'DAO community voting governance',
                  language === 'zh' ? '科研项目提案决策' : 'Research project proposal decisions',
                  language === 'zh' ? '协议升级投票权' : 'Protocol upgrade voting rights',
                  language === 'zh' ? '生态基金使用监督' : 'Ecosystem fund usage supervision',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card variant="featured" className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                  <Coins className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-white">
                    {language === 'zh' ? '实用代币' : 'Utility Token'}
                  </h3>
                  <span className="text-accent text-sm">$SCI</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  language === 'zh' ? '游戏内交易支付' : 'In-game transaction payments',
                  language === 'zh' ? '科研任务奖励兑换' : 'Research task reward redemption',
                  language === 'zh' ? 'NFT 铸造与交易' : 'NFT minting and trading',
                  language === 'zh' ? '质押获取收益' : 'Staking for earnings',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Token Allocation */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '代币分配机制' : 'Token Allocation'}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Visual Pie Chart */}
            <Card className="p-8 flex flex-col items-center">
              <h3 className="font-display font-semibold text-lg text-white mb-6">
                {language === 'zh' ? '分配占比可视化' : 'Allocation Visualization'}
              </h3>
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {(() => {
                    let currentAngle = 0;
                    const colors = ['#00D9FF', '#3B82F6', '#10B981', '#F59E0B'];
                    return tokenAllocations.map((item, i) => {
                      const angle = (item.percentage / 100) * 360;
                      const startAngle = currentAngle;
                      currentAngle += angle;
                      const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                      const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                      const x2 = 50 + 40 * Math.cos((currentAngle * Math.PI) / 180);
                      const y2 = 50 + 40 * Math.sin((currentAngle * Math.PI) / 180);
                      const largeArc = angle > 180 ? 1 : 0;
                      return (
                        <path
                          key={i}
                          d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                          fill={colors[i]}
                          stroke="#0A1628"
                          strokeWidth="2"
                        />
                      );
                    });
                  })()}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-white">100%</div>
                    <div className="text-gray-400 text-xs">{language === 'zh' ? '总量恒定' : 'Total Fixed'}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Allocation Details */}
            <Card className="p-8">
              <h3 className="font-display font-semibold text-lg text-white mb-6">
                {language === 'zh' ? '分配详情' : 'Allocation Details'}
              </h3>
              <div className="space-y-4">
                {tokenAllocations.map((item, i) => {
                  const colors = ['bg-accent', 'bg-blue-500', 'bg-emerald-500', 'bg-amber-500'];
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${colors[i]} flex-shrink-0`} />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white text-sm">{item.categoryEn}</span>
                          <span className="font-display font-bold text-accent">{item.percentage}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percentage}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className={`h-full rounded-full ${colors[i]}`}
                          />
                        </div>
                        <p className="text-gray-500 text-xs mt-1">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Economic Balance */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '经济平衡机制' : 'Economic Balance Mechanism'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: language === 'zh' ? '动态供需调节' : 'Dynamic Supply & Demand',
                desc: language === 'zh'
                  ? '智能调节代币流通量，通过任务奖励池和质押释放机制维持代币价值稳定'
                  : 'Intelligently adjusting token circulation through task reward pools and staking release mechanisms to maintain token value stability',
              },
              {
                icon: Zap,
                title: language === 'zh' ? '代币销毁机制' : 'Token Burn Mechanism',
                desc: language === 'zh'
                  ? '每笔交易手续费的部分用于代币销毁，通缩模型长期支撑代币价值'
                  : 'Portion of each transaction fee used for token burning, deflation model supports long-term token value',
              },
              {
                icon: Lock,
                title: language === 'zh' ? '质押锁仓机制' : 'Staking Lock-up Mechanism',
                desc: language === 'zh'
                  ? '长期质押获得更高收益，锁仓代币减少市场流通，规避短期抛售风险'
                  : 'Long-term staking yields higher returns, locked tokens reduce market circulation, avoiding short-term selling risks',
              },
            ].map((item, i) => (
              <Card key={i} variant="interactive" className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Employee Ownership */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-4">
            {language === 'zh' ? '全员持股模式' : 'Employee Ownership Model'}
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            {language === 'zh'
              ? '对标华为全员持股，算力贡献、科研任务参与、长期生态投入均可获得股权代币'
              : 'Inspired by Huawei employee ownership, computing contributions, research task participation, and long-term ecosystem investment all receive equity tokens'}
          </p>

          <Card variant="featured" className="p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">
                  {language === 'zh' ? '算力兑换' : 'Computing Power'}
                </h3>
                <p className="text-gray-400 text-sm">
                  {language === 'zh'
                    ? '贡献闲置算力，按计算量获得股权积分'
                    : 'Contribute idle computing power, earn equity points based on computation volume'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">
                  {language === 'zh' ? '任务贡献' : 'Task Contribution'}
                </h3>
                <p className="text-gray-400 text-sm">
                  {language === 'zh'
                    ? '完成科研任务，按难度和质量获得股权积分'
                    : 'Complete research tasks, earn equity points based on difficulty and quality'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">
                  {language === 'zh' ? '长期投入' : 'Long-term Investment'}
                </h3>
                <p className="text-gray-400 text-sm">
                  {language === 'zh'
                    ? '长期持币和参与治理，获得额外股权加成'
                    : 'Long-term token holding and governance participation receive additional equity bonuses'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Risk Control */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '风险防控机制' : 'Risk Control Mechanism'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: language === 'zh' ? '经济风险' : 'Economic Risk',
                items: [
                  language === 'zh' ? '动态平衡机制防止通胀' : 'Dynamic balance mechanism prevents inflation',
                  language === 'zh' ? '质押锁仓减少抛售压力' : 'Staking locks reduce selling pressure',
                ],
              },
              {
                icon: Shield,
                title: language === 'zh' ? '技术风险' : 'Technical Risk',
                items: [
                  language === 'zh' ? '多重签名钱包保障资产' : 'Multi-signature wallet protects assets',
                  language === 'zh' ? '智能合约安全审计' : 'Smart contract security audits',
                ],
              },
              {
                icon: AlertTriangle,
                title: language === 'zh' ? '合规风险' : 'Compliance Risk',
                items: [
                  language === 'zh' ? '合规法律顾问审查' : 'Compliance legal counsel review',
                  language === 'zh' ? '地区化合规策略' : 'Regional compliance strategies',
                ],
              },
            ].map((item, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                  <h3 className="font-display font-semibold text-white">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((ritem, ri) => (
                    <li key={ri} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {ritem}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <div className="container mx-auto px-4 text-center">
          <Button size="lg">
            {language === 'zh' ? '下载完整经济白皮书' : 'Download Full Tokenomics Paper'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
