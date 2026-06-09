import { motion } from 'framer-motion';
import { Building2, Globe, Mail, Twitter, MessageCircle, Send, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/Section';
import { useLanguageStore } from '@/store/useStore';

export default function Cooperation() {
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
              {language === 'zh' ? '合作与生态' : 'Cooperation & Ecosystem'}
            </h1>
            <p className="text-gray-300 text-lg">
              {language === 'zh'
                ? 'SciChain 欢迎科研机构、企业和开发者加入我们的生态，共同推动去中心化公民科学的发展'
                : 'SciChain welcomes research institutions, enterprises, and developers to join our ecosystem and jointly promote the development of decentralized citizen science'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cooperation Channels */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '合作通道' : 'Cooperation Channels'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Research Institutions */}
            <Card variant="featured" className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-white">
                    {language === 'zh' ? '科研机构合作' : 'Research Institution Partnership'}
                  </h3>
                  <span className="text-purple-400 text-sm">
                    {language === 'zh' ? '高校、实验室、研究组织' : 'Universities, Labs, Research Organizations'}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  language === 'zh' ? '联合开展科研项目，共建科研任务' : 'Jointly conduct research projects, build research tasks',
                  language === 'zh' ? '数据共享与隐私保护方案' : 'Data sharing and privacy protection solutions',
                  language === 'zh' ? '学术论文联合发表' : 'Joint academic paper publication',
                  language === 'zh' ? '科研基金申请支持' : 'Research fund application support',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full">
                <Mail className="mr-2 w-4 h-4" />
                {language === 'zh' ? '联系科研合作' : 'Contact Research Cooperation'}
              </Button>
            </Card>

            {/* Enterprise Cooperation */}
            <Card variant="featured" className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-white">
                    {language === 'zh' ? '企业商务合作' : 'Enterprise Business Cooperation'}
                  </h3>
                  <span className="text-amber-400 text-sm">
                    {language === 'zh' ? '区块链项目、游戏厂商、云服务商' : 'Blockchain Projects, Game Studios, Cloud Providers'}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  language === 'zh' ? '技术集成与 API 对接' : 'Technology integration and API connection',
                  language === 'zh' ? '联合营销与生态推广' : 'Joint marketing and ecosystem promotion',
                  language === 'zh' ? '节点运营与生态共建' : 'Node operation and ecosystem co-building',
                  language === 'zh' ? '投资与战略合作' : 'Investment and strategic cooperation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 w-4 h-4" />
                {language === 'zh' ? '联系商务合作' : 'Contact Business Cooperation'}
              </Button>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Global Ecosystem */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '海外生态布局规划' : 'Global Ecosystem Layout'}
          </h2>
          <Card className="p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { region: language === 'zh' ? '北美' : 'North America', focus: language === 'zh' ? '技术研发与合作' : 'Tech R&D & Partnerships' },
                { region: language === 'zh' ? '欧洲' : 'Europe', focus: language === 'zh' ? '科研机构对接' : 'Research Institution Connection' },
                { region: language === 'zh' ? '亚洲' : 'Asia', focus: language === 'zh' ? '社区运营与游戏厂商' : 'Community & Game Studios' },
                { region: language === 'zh' ? '大洋洲' : 'Oceania', focus: language === 'zh' ? '科研项目合作' : 'Research Project Cooperation' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-white/5">
                  <h3 className="font-display font-semibold text-accent mb-2">{item.region}</h3>
                  <p className="text-gray-400 text-sm">{item.focus}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Compliance */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '合规运营方案' : 'Compliance Operation Plan'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: language === 'zh' ? '地区合规策略' : 'Regional Compliance',
                desc: language === 'zh'
                  ? '根据不同地区法规制定合规运营方案，确保业务合法合规'
                  : 'Formulating compliant operation plans according to different regional regulations to ensure business legality and compliance',
              },
              {
                title: language === 'zh' ? 'KYC/AML 政策' : 'KYC/AML Policy',
                desc: language === 'zh'
                  ? '实施用户身份验证和反洗钱合规流程，保障生态安全'
                  : 'Implementing user identity verification and anti-money laundering compliance processes to ensure ecosystem security',
              },
              {
                title: language === 'zh' ? '税务合规支持' : 'Tax Compliance Support',
                desc: language === 'zh'
                  ? '提供代币税务计算工具，帮助用户合规申报'
                  : 'Providing token tax calculation tools to help users with compliant reporting',
              },
            ].map((item, i) => (
              <Card key={i} variant="interactive" className="p-6">
                <h3 className="font-display font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Community */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '社群矩阵' : 'Community Matrix'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Twitter, name: 'Twitter', handle: '@SciChain', color: 'from-blue-400 to-blue-500' },
              { icon: MessageCircle, name: 'Discord', handle: 'discord.gg/scichain', color: 'from-indigo-400 to-indigo-500' },
              { icon: Send, name: 'Telegram', handle: 't.me/scichain', color: 'from-sky-400 to-sky-500' },
              { icon: Globe, name: 'Website', handle: 'scichain.io', color: 'from-emerald-400 to-emerald-500' },
            ].map((social, i) => (
              <Card key={i} variant="interactive" className="p-6 text-center group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <social.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-semibold text-white mb-1">{social.name}</h3>
                <p className="text-gray-400 text-sm">{social.handle}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              {language === 'zh' ? '联系我们' : 'Contact Us'}
            </h2>
            <p className="text-gray-400 mb-8">
              {language === 'zh'
                ? '有任何问题或合作意向，欢迎通过以下方式联系我们'
                : 'Have any questions or cooperation intentions, welcome to contact us through the following methods'}
            </p>
            <Card className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-gray-400">{language === 'zh' ? '商务合作' : 'Business Cooperation'}</span>
                  <span className="text-white">business@scichain.io</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-gray-400">{language === 'zh' ? '技术支持' : 'Technical Support'}</span>
                  <span className="text-white">tech@scichain.io</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-400">{language === 'zh' ? '媒体合作' : 'Media Cooperation'}</span>
                  <span className="text-white">media@scichain.io</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <div className="container mx-auto px-4 text-center">
          <Button size="lg">
            {language === 'zh' ? '立即加入生态' : 'Join Ecosystem Now'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
