import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Globe, Lightbulb, ArrowRight, Users, Cpu, Award } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/Section';
import { useLanguageStore } from '@/store/useStore';
import { caseStudies } from '@/data/mockData';

export default function ProjectIntro() {
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
              {language === 'zh' ? '项目介绍' : 'Project Introduction'}
            </h1>
            <p className="text-gray-300 text-lg">
              {language === 'zh'
                ? 'SciChain 致力于打造 Web3 时代公民科学基础设施，实现科研普惠、用户价值共享、去中心化科研协作'
                : 'SciChain is dedicated to building Web3 era citizen science infrastructure, achieving scientific popularization, shared user value, and decentralized research collaboration'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Background */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                {language === 'zh' ? '项目背景' : 'Project Background'}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      {language === 'zh' ? '全球公民科学发展现状' : 'Current State of Global Citizen Science'}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {language === 'zh'
                        ? '公民科学让公众参与科研项目，但传统模式缺乏有效激励机制，参与度有限'
                        : 'Citizen science involves the public in research projects, but traditional models lack effective incentive mechanisms with limited participation'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      {language === 'zh' ? '传统科研众包激励短板' : 'Shortcomings of Traditional Crowdsourcing Incentives'}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {language === 'zh'
                        ? '现有众包平台难以持久运营，志愿者贡献无法获得相应回报，积极性逐渐消退'
                        : 'Existing crowdsourcing platforms struggle to sustain operations, volunteers cannot receive corresponding returns for their contributions, enthusiasm gradually fades'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      {language === 'zh' ? 'Web3 链游行业乱象痛点' : 'Pain Points in Web3 Gaming Industry'}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {language === 'zh'
                        ? '大多数 GameFi 项目缺乏真实价值支撑，同质化严重，难以实现可持续发展'
                        : 'Most GameFi projects lack real value support, homogenization is severe, making sustainable development difficult'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card variant="featured" className="p-8">
              <h3 className="font-display font-semibold text-xl text-white mb-4">
                {language === 'zh' ? 'SciChain 的解决方案' : 'SciChain Solution'}
              </h3>
              <p className="text-gray-300 mb-6">
                {language === 'zh'
                  ? '通过区块链技术将科研贡献Token化，结合游戏化机制，让每个参与者都能获得真实回报，同时为科研事业贡献力量。'
                  : 'Through blockchain technology, we tokenize scientific contributions, combined with gamification mechanisms, allowing every participant to gain real returns while contributing to scientific research.'}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="font-display text-2xl font-bold text-accent mb-1">50K+</div>
                  <div className="text-gray-400 text-sm">{language === 'zh' ? '活跃用户' : 'Active Users'}</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <div className="font-display text-2xl font-bold text-accent mb-1">100+</div>
                  <div className="text-gray-400 text-sm">{language === 'zh' ? '科研任务' : 'Research Tasks'}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Positioning */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '核心定位' : 'Core Positioning'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: language === 'zh' ? '科研普惠' : 'Scientific Popularization',
                desc: language === 'zh'
                  ? '降低科研参与门槛，让全球每个人都能为科学发展做出贡献'
                  : 'Lowering barriers to scientific participation, enabling everyone globally to contribute to scientific advancement',
              },
              {
                icon: Award,
                title: language === 'zh' ? '用户价值共享' : 'Shared User Value',
                desc: language === 'zh'
                  ? '科研贡献者获得代币回报和股权激励，分享生态发展红利'
                  : 'Research contributors receive token rewards and equity incentives, sharing ecological development dividends',
              },
              {
                icon: Globe,
                title: language === 'zh' ? '去中心化协作' : 'Decentralized Collaboration',
                desc: language === 'zh'
                  ? '基于区块链构建透明可信的协作网络，确保公平分配'
                  : 'Building a transparent and trustworthy collaboration network based on blockchain to ensure fair distribution',
              },
            ].map((item, i) => (
              <Card key={i} variant="featured" className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Studies */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '对标经典案例解析' : 'Classic Case Studies'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {caseStudies.map((caseItem) => (
              <Card key={caseItem.id} variant="interactive" className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white">{caseItem.name}</h3>
                    <p className="text-gray-500 text-xs">{caseItem.nameCn}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{caseItem.description}</p>
                <div className="pt-4 border-t border-white/5">
                  <div className="text-xs text-gray-500 mb-1">{language === 'zh' ? '可借鉴经验' : 'Lessons Learned'}</div>
                  <p className="text-gray-300 text-sm">{caseItem.lessons}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Project Goals */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '项目核心目标' : 'Core Project Goals'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                  <span className="font-display font-bold text-primary">S</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-white">
                    {language === 'zh' ? '短期目标' : 'Short-term Goals'}
                  </h3>
                  <span className="text-gray-500 text-sm">2024-2025</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  language === 'zh' ? '完成 PBFT+LPoS 共识机制技术验证' : 'Complete PBFT+LPoS consensus mechanism technical validation',
                  language === 'zh' ? '上线蛋白质折叠首批科研任务' : 'Launch first batch of protein folding research tasks',
                  language === 'zh' ? '建立 5+ 科研机构合作伙伴关系' : 'Establish partnerships with 5+ research institutions',
                  language === 'zh' ? '社区用户突破 10 万' : 'Community users exceed 100,000',
                ].map((goal, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                  <span className="font-display font-bold text-primary">L</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-white">
                    {language === 'zh' ? '长期愿景' : 'Long-term Vision'}
                  </h3>
                  <span className="text-gray-500 text-sm">2025-2027</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  language === 'zh' ? '构建跨链元宇宙科研生态' : 'Build cross-chain metaverse research ecosystem',
                  language === 'zh' ? '实现 AIGC 科研内容生成' : 'Achieve AIGC research content generation',
                  language === 'zh' ? '覆盖 10+ 科研赛道' : 'Cover 10+ research tracks',
                  language === 'zh' ? '成为全球领先的去中心化科研平台' : 'Become the leading global decentralized research platform',
                ].map((goal, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            {language === 'zh' ? '了解更多项目详情' : 'Learn More About Project Details'}
          </h2>
          <div className="flex gap-4 justify-center">
            <Link to="/technology">
              <Button>
                {language === 'zh' ? '技术架构' : 'Technology'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/whitepaper">
              <Button variant="outline">
                {language === 'zh' ? '阅读白皮书' : 'Read Whitepaper'}
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
