import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Cpu, Users, Coins, Lock, Gamepad2, Dna, Atom, TestTube, Globe, Cpu as CpuIcon, Layers, Zap, Shield } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/Section';
import { useLanguageStore } from '@/store/useStore';
import { advantages, researchTracks, partners } from '@/data/mockData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  dna: Dna,
  atom: Atom,
  flask: TestTube,
  globe: Globe,
  cpu: CpuIcon,
  gamepad: Gamepad2,
  lock: Lock,
  coins: Coins,
  users: Users,
};

export default function Home() {
  const { language } = useLanguageStore();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full opacity-30"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
              }}
              animate={{
                x: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
                y: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">科研赋能链游</span>
              <br />
              <span className="text-gradient">算力创造价值</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10"
          >
            {language === 'zh'
              ? 'Web3 去中心化公民科学生态 —— 让每个人都能参与前沿科学研究，游戏即科研、参与即创收、贡献即持股'
              : 'Web3 Decentralized Citizen Science Ecosystem - Making cutting-edge scientific research accessible to everyone. Play to Research, Earn by Participating, Gain Equity through Contribution'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/game">
              <Button size="lg" className="w-full sm:w-auto group">
                {language === 'zh' ? '开始科研游戏' : 'Start Research Gaming'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/whitepaper">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Download className="mr-2 w-5 h-5" />
                {language === 'zh' ? '查看白皮书' : 'View Whitepaper'}
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: '10M+', label: language === 'zh' ? '算力贡献' : 'Computing Power' },
              { value: '50K+', label: language === 'zh' ? '活跃用户' : 'Active Users' },
              { value: '100+', label: language === 'zh' ? '科研任务' : 'Research Tasks' },
              { value: '5', label: language === 'zh' ? '科研赛道' : 'Research Tracks' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-accent rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Project Introduction */}
      <AnimatedSection className="bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '什么是 SciChain' : 'What is SciChain'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'zh'
              ? 'SciChain 是一个基于区块链技术的去中心化公民科学平台，通过游戏化的方式让全球用户参与前沿科学研究'
              : 'SciChain is a decentralized citizen science platform based on blockchain technology, enabling global users to participate in cutting-edge scientific research through gamification'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Gamepad2,
              title: language === 'zh' ? '游戏即科研' : 'Play to Research',
              desc: language === 'zh'
                ? '将复杂的科研问题转化为有趣的解谜游戏，在娱乐中贡献科学'
                : 'Transform complex scientific problems into engaging puzzle games, contributing to science while having fun',
            },
            {
              icon: Cpu,
              title: language === 'zh' ? '参与即创收' : 'Earn by Participating',
              desc: language === 'zh'
                ? '贡献闲置算力和科研数据，获得代币奖励和NFT成就'
                : 'Earn token rewards and NFT achievements by contributing idle computing power and research data',
            },
            {
              icon: Users,
              title: language === 'zh' ? '贡献即持股' : 'Gain Equity through Contribution',
              desc: language === 'zh'
                ? '对标华为全员持股，長期贡献者可获得生态股权代币'
                : 'Inspired by Huawei employee ownership, long-term contributors receive ecosystem equity tokens',
            },
          ].map((item, i) => (
            <Card key={i} variant="featured" className="p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* Advantages */}
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '核心优势' : 'Core Advantages'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'zh'
              ? '四大核心优势，构建领先的公民科学区块链生态'
              : 'Four core advantages building a leading citizen science blockchain ecosystem'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv) => {
            const Icon = iconMap[adv.icon] || Gamepad2;
            return (
              <Card key={adv.id} variant="interactive" className="p-6 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {language === 'zh' ? adv.title : adv.titleEn}
                </h3>
                <p className="text-gray-400 text-sm">{adv.description}</p>
              </Card>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Research Tracks */}
      <AnimatedSection className="bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '科研赛道' : 'Research Tracks'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'zh'
              ? '覆盖五大前沿科研领域，让每个参与者都能找到感兴趣的课题'
              : 'Covering five cutting-edge research areas, allowing every participant to find topics of interest'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {researchTracks.map((track) => {
            const Icon = iconMap[track.icon] || Atom;
            return (
              <Card key={track.id} variant="interactive" className="p-6 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white mb-1">
                      {language === 'zh' ? track.name : track.nameEn}
                    </h3>
                    <p className="text-gray-400 text-sm">{track.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Game Preview */}
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '游戏玩法' : 'Gameplay Preview'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'zh'
              ? '三大核心玩法，让科研变得有趣'
              : 'Three core gameplay modes making research fun'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Layers,
              title: language === 'zh' ? '解谜科研' : 'Research Puzzles',
              desc: language === 'zh' ? '蛋白质折叠、分子结构分析等解谜任务' : 'Puzzle tasks like protein folding and molecular structure analysis',
            },
            {
              icon: Zap,
              title: language === 'zh' ? '模拟沙盒' : 'Simulation Sandbox',
              desc: language === 'zh' ? '星系演化、气候变迁等复杂现象模拟' : 'Simulations of complex phenomena like galaxy evolution and climate change',
            },
            {
              icon: Shield,
              title: language === 'zh' ? '沉浸式体验' : 'Immersive Experience',
              desc: language === 'zh' ? 'VR/AR技术打造的科研探索空间' : 'Research exploration spaces created with VR/AR technology',
            },
          ].map((game, i) => (
            <Card key={i} variant="featured" className="p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mx-auto mb-4">
                <game.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">{game.title}</h3>
              <p className="text-gray-400 text-sm">{game.desc}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/game">
            <Button variant="outline">
              {language === 'zh' ? '了解更多游戏玩法' : 'Learn More About Gameplay'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </AnimatedSection>

      {/* Data Dashboard Placeholder */}
      <AnimatedSection className="bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '生态数据' : 'Ecosystem Data'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'zh'
              ? '实时展示链上数据，公开透明'
              : 'Real-time display of on-chain data, open and transparent'}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { label: language === 'zh' ? '全网算力' : 'Total Computing', value: '10.5 PFLOPS', change: '+12.3%' },
            { label: language === 'zh' ? '科研任务总量' : 'Total Research Tasks', value: '128,456', change: '+8.7%' },
            { label: language === 'zh' ? '活跃用户数' : 'Active Users', value: '52,341', change: '+15.2%' },
            { label: language === 'zh' ? '代币质押总量' : 'Total Staked', value: '2.4M SC', change: '+6.8%' },
          ].map((item, i) => (
            <Card key={i} className="p-6">
              <div className="text-gray-400 text-sm mb-2">{item.label}</div>
              <div className="font-display text-2xl font-bold text-white mb-2">{item.value}</div>
              <div className="text-accent text-sm">{item.change} (24h)</div>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* Partners */}
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '合作伙伴' : 'Partners'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'zh'
              ? '汇聚全球顶尖科研机构、开源社区和区块链生态'
              : 'Bringing together top global research institutions, open source communities and blockchain ecosystem'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {partners.map((partner) => (
            <Card key={partner.id} className="p-4 flex items-center justify-center h-24 hover:border-accent/30 transition-colors">
              <div className="text-center">
                <div className="font-display font-semibold text-white text-sm">{partner.name}</div>
                <div className="text-gray-500 text-xs mt-1">{partner.type}</div>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="bg-gradient-to-b from-secondary/50 to-primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'zh' ? '加入 SciChain 生态' : 'Join SciChain Ecosystem'}
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            {language === 'zh'
              ? '无论是科研贡献者、算力提供者还是生态建设者，SciChain 都欢迎您的加入'
              : 'Whether you are a research contributor, computing power provider, or ecosystem builder, SciChain welcomes your participation'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cooperation">
              <Button size="lg">
                {language === 'zh' ? '联系我们' : 'Contact Us'}
              </Button>
            </Link>
            <Link to="/opensource">
              <Button size="lg" variant="outline">
                {language === 'zh' ? '参与开源贡献' : 'Contribute to Open Source'}
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
