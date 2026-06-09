import { motion } from 'framer-motion';
import { Github, ExternalLink, BookOpen, Users, Code, Award, ArrowRight, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/Section';
import { useLanguageStore } from '@/store/useStore';
import { openSourceProjects } from '@/data/mockData';

export default function OpenSource() {
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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'zh' ? '开源社区' : 'Open Source Community'}
            </h1>
            <p className="text-gray-300 text-lg">
              {language === 'zh'
                ? 'SciChain 坚持开源精神，与全球开发者共同推动公民科学发展'
                : 'SciChain adheres to open source spirit, working with global developers to advance citizen science'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Source Projects */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-4">
            {language === 'zh' ? '核心复用开源项目' : 'Core Open Source Projects'}
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            {language === 'zh'
              ? '我们复用并贡献于以下优秀开源科研项目，遵循其开源协议'
              : 'We reuse and contribute to the following excellent open source research projects, following their open source agreements'}
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {openSourceProjects.map((project) => (
              <Card key={project.id} variant="interactive" className="p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <Github className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white">{project.name}</h3>
                      <span className="text-gray-500 text-xs">{project.license}</span>
                    </div>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-400 hover:text-accent hover:bg-accent/10 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* GitHub Repositories */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold text-white">
              {language === 'zh' ? '官方 GitHub 仓库' : 'Official GitHub Repositories'}
            </h2>
            <Button variant="outline" size="sm">
              <Github className="mr-2 w-4 h-4" />
              {language === 'zh' ? '访问主页' : 'Visit Profile'}
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'scichain-core', desc: language === 'zh' ? '核心区块链协议' : 'Core blockchain protocol', lang: 'Rust', stars: '2.3k' },
              { name: 'scichain-sdk', desc: language === 'zh' ? 'JavaScript SDK' : 'JavaScript SDK', lang: 'TypeScript', stars: '1.8k' },
              { name: 'scichain-contracts', desc: language === 'zh' ? '智能合约' : 'Smart contracts', lang: 'Solidity', stars: '956' },
            ].map((repo, i) => (
              <Card key={i} variant="interactive" className="p-6 group">
                <div className="flex items-center gap-2 mb-3">
                  <Github className="w-5 h-5 text-gray-400" />
                  <h3 className="font-mono text-white font-medium">{repo.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{repo.desc}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-400">{repo.lang}</span>
                  <span className="text-gray-400">★ {repo.stars}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Developer Guide */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '开发者贡献指南' : 'Developer Contribution Guide'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: language === 'zh' ? '阅读文档' : 'Read Docs',
                desc: language === 'zh' ? '了解项目架构和开发规范' : 'Learn project architecture and development standards',
              },
              {
                icon: Code,
                title: language === 'zh' ? 'Fork 仓库' : 'Fork Repository',
                desc: language === 'zh' ? '创建你的开发分支' : 'Create your development branch',
              },
              {
                icon: Users,
                title: language === 'zh' ? '提交贡献' : 'Submit Contribution',
                desc: language === 'zh' ? '通过 Pull Request 贡献代码' : 'Contribute code through Pull Request',
              },
              {
                icon: Award,
                title: language === 'zh' ? '获得奖励' : 'Earn Rewards',
                desc: language === 'zh' ? '贡献者获得代币和 NFT 奖励' : 'Contributors receive tokens and NFT rewards',
              },
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contribution Rewards */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '社区贡献激励' : 'Community Contribution Incentives'}
          </h2>
          <Card variant="featured" className="p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-accent mb-2">$50K</div>
                <div className="text-gray-400 text-sm">
                  {language === 'zh' ? '季度开源基金' : 'Quarterly Open Source Fund'}
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-gray-400 text-sm">
                  {language === 'zh' ? '活跃贡献者' : 'Active Contributors'}
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-accent mb-2">1000+</div>
                <div className="text-gray-400 text-sm">
                  {language === 'zh' ? '已合并 PR' : 'Merged PRs'}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Heart className="w-5 h-5 text-red-400" />
                <span>
                  {language === 'zh'
                    ? '感谢每一位为 SciChain 贡献代码的开发者'
                    : 'Thanks to every developer who contributed code to SciChain'}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg">
            {language === 'zh' ? '加入开发者社区' : 'Join Developer Community'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
