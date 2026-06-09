import { motion } from 'framer-motion';
import { Shuffle, Link2, Shield, Lock, Cpu, Database, Coins, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/Section';
import { useLanguageStore } from '@/store/useStore';
import { roadmap } from '@/data/mockData';

export default function Technology() {
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
              {language === 'zh' ? '技术架构' : 'Technology Architecture'}
            </h1>
            <p className="text-gray-300 text-lg">
              {language === 'zh'
                ? '基于分片技术、跨链协议、PBFT+LPoS 共识机制，构建安全高效的去中心化科研网络'
                : 'Building a secure and efficient decentralized research network based on sharding technology, cross-chain protocols, and PBFT+LPoS consensus mechanism'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Tech Stack */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '底层技术栈' : 'Core Tech Stack'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shuffle,
                title: language === 'zh' ? '分片技术' : 'Sharding Technology',
                desc: language === 'zh'
                  ? '采用状态分片方案，将网络划分为多个并行处理的分片，显著提升 TPS 和网络容量'
                  : 'Adopting state sharding scheme, dividing the network into multiple parallel processing shards to significantly improve TPS and network capacity',
              },
              {
                icon: Link2,
                title: language === 'zh' ? '跨链协议' : 'Cross-chain Protocol',
                desc: language === 'zh'
                  ? '支持与 Ethereum、Polkadot、Cosmos 等主流公链互操作，实现资产跨链和生态互通'
                  : 'Supporting interoperability with Ethereum, Polkadot, Cosmos and other mainstream public chains, achieving cross-chain assets and ecosystem compatibility',
              },
              {
                icon: Shield,
                title: language === 'zh' ? 'PBFT+LPoS 共识' : 'PBFT+LPoS Consensus',
                desc: language === 'zh'
                  ? '结合实用拜占庭容错和租赁权益证明，在安全性和效率间取得平衡，支持快速出块'
                  : 'Combining Practical Byzantine Fault Tolerance and Leased Proof of Stake to achieve balance between security and efficiency, supporting fast block production',
              },
            ].map((item, i) => (
              <Card key={i} variant="featured" className="p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Privacy & Security */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '隐私安全技术' : 'Privacy & Security Technology'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Lock,
                title: language === 'zh' ? '零知识证明' : 'Zero-Knowledge Proof',
                desc: language === 'zh'
                  ? 'ZK-SNARKs 技术实现交易验证的同时保护用户隐私，验证者无需知道交易细节'
                  : 'ZK-SNARKs technology protects user privacy while verifying transactions, verifiers do not need to know transaction details',
              },
              {
                icon: Shield,
                title: language === 'zh' ? '同态加密' : 'Homomorphic Encryption',
                desc: language === 'zh'
                  ? '在加密状态下进行科研计算，确保敏感数据在整个处理过程中保持机密性'
                  : 'Perform research calculations in encrypted state, ensuring sensitive data remains confidential throughout the entire processing',
              },
              {
                icon: Cpu,
                title: language === 'zh' ? '抗量子加密' : 'Quantum-Resistant Encryption',
                desc: language === 'zh'
                  ? '采用格基密码学算法，为未来量子计算威胁提供长期安全保障'
                  : 'Adopting lattice-based cryptographic algorithms to provide long-term security guarantees against future quantum computing threats',
              },
            ].map((item, i) => (
              <Card key={i} variant="interactive" className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Core System Architecture */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '核心系统架构' : 'Core System Architecture'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Cpu,
                title: language === 'zh' ? 'BOINC 算力接口' : 'BOINC Computing Interface',
                desc: language === 'zh'
                  ? '对接 BOINC 分布式计算网络，复用成熟算力基础设施'
                  : 'Connecting to BOINC distributed computing network, reusing mature computing infrastructure',
              },
              {
                icon: Database,
                title: language === 'zh' ? '科研任务分发' : 'Research Task Distribution',
                desc: language === 'zh'
                  ? '智能任务分解与分发系统，将复杂问题拆分为可并行处理的子任务'
                  : 'Intelligent task decomposition and distribution system, splitting complex problems into parallel sub-tasks',
              },
              {
                icon: Coins,
                title: language === 'zh' ? '智能合约奖励' : 'Smart Contract Rewards',
                desc: language === 'zh'
                  ? '自动化奖励分发合约，确保奖励公正透明、即时到账'
                  : 'Automated reward distribution contracts ensuring fair, transparent, and instant reward distribution',
              },
              {
                icon: Trophy,
                title: language === 'zh' ? 'NFT 动态属性' : 'NFT Dynamic Attributes',
                desc: language === 'zh'
                  ? '动态 NFT 系统，成就NFT随用户贡献动态升级，具稀有度属性'
                  : 'Dynamic NFT system, achievement NFTs dynamically upgrade with user contributions, with rarity attributes',
              },
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center">
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

      {/* Open Source */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-4">
            {language === 'zh' ? '开源资源复用' : 'Open Source Resource Reuse'}
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            {language === 'zh'
              ? '我们遵循开源精神，复用并贡献于优秀的开源科研项目'
              : 'Following the open source spirit, we reuse and contribute to excellent open source research projects'}
          </p>
          <Card variant="featured" className="p-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                { name: 'Foldit', usage: language === 'zh' ? '蛋白质折叠游戏机制参考' : 'Protein folding game mechanism reference' },
                { name: 'Thrive', usage: language === 'zh' ? '进化模拟算法借鉴' : 'Evolution simulation algorithm reference' },
                { name: 'OpenRelativity', usage: language === 'zh' ? '相对论可视化工具集成' : 'Relativity visualization tool integration' },
                { name: 'BOINC', usage: language === 'zh' ? '算力网络深度集成' : 'Deep computing network integration' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-medium text-white">{item.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{item.usage}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6 text-center">
              {language === 'zh'
                ? '所有开源使用均遵循原项目协议，并会在合规文档中详细说明'
                : 'All open source usage follows original project agreements and will be detailed in compliance documentation'}
            </p>
          </Card>
        </div>
      </AnimatedSection>

      {/* Roadmap */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '技术迭代路线图' : 'Technical Roadmap'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {roadmap.map((item, i) => (
              <Card
                key={i}
                className={`p-6 relative overflow-hidden ${
                  item.status === 'current' ? 'border-accent/50' : ''
                }`}
              >
                {item.status === 'current' && (
                  <div className="absolute top-0 right-0 px-2 py-1 bg-accent text-primary text-xs font-medium">
                    {language === 'zh' ? '进行中' : 'In Progress'}
                  </div>
                )}
                <div className="mb-4">
                  <span className="text-gray-500 text-sm">{item.phaseEn}</span>
                  <h3 className="font-display font-semibold text-lg text-white">{item.titleEn}</h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((ritem, ri) => (
                    <li key={ri} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        item.status === 'completed' ? 'bg-accent' : 'bg-gray-600'
                      }`} />
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
            {language === 'zh' ? '查看开源仓库' : 'View Open Source Repositories'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
