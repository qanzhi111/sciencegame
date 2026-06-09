import { motion } from 'framer-motion';
import { FileText, Download, Globe, Calendar, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/Section';
import { useLanguageStore } from '@/store/useStore';
import { whitepaperVersions } from '@/data/mockData';

export default function Whitepaper() {
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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'zh' ? '白皮书' : 'Whitepaper'}
            </h1>
            <p className="text-gray-300 text-lg">
              {language === 'zh'
                ? 'SciChain 完整技术文档，涵盖项目愿景、技术架构、经济模型和治理方案'
                : 'SciChain complete technical documentation, covering project vision, technical architecture, economic model and governance plan'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Chinese Version */}
            <Card variant="featured" className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-400">中</span>
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">
                {language === 'zh' ? '中文版白皮书' : 'Chinese Whitepaper'}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {language === 'zh'
                  ? '完整版白皮书，包含所有技术细节和路线图'
                  : 'Complete whitepaper with all technical details and roadmap'}
              </p>
              <Button className="w-full">
                <Download className="mr-2 w-5 h-5" />
                {language === 'zh' ? '下载 PDF' : 'Download PDF'}
              </Button>
            </Card>

            {/* English Version */}
            <Card variant="featured" className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">
                {language === 'zh' ? '英文版白皮书' : 'English Whitepaper'}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {language === 'zh'
                  ? 'Complete English version for global audience'
                  : '完整英文版，面向全球社区'}
              </p>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 w-5 h-5" />
                {language === 'zh' ? '下载 PDF' : 'Download PDF'}
              </Button>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Document Preview */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '文档内容概览' : 'Document Content Overview'}
          </h2>
          <Card className="p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { num: '01', title: language === 'zh' ? '项目概述' : 'Project Overview', desc: language === 'zh' ? '项目背景、愿景与核心价值' : 'Project background, vision and core values' },
                { num: '02', title: language === 'zh' ? '市场分析' : 'Market Analysis', desc: language === 'zh' ? '公民科学市场现状与机遇' : 'Citizen science market status and opportunities' },
                { num: '03', title: language === 'zh' ? '技术架构' : 'Technical Architecture', desc: language === 'zh' ? '区块链底层技术与系统设计' : 'Blockchain infrastructure and system design' },
                { num: '04', title: language === 'zh' ? '经济模型' : 'Economic Model', desc: language === 'zh' ? '代币经济学与激励机制' : 'Token economics and incentive mechanisms' },
                { num: '05', title: language === 'zh' ? '治理机制' : 'Governance', desc: language === 'zh' ? 'DAO治理与社区决策' : 'DAO governance and community decisions' },
                { num: '06', title: language === 'zh' ? '路线图' : 'Roadmap', desc: language === 'zh' ? '开发计划与里程碑' : 'Development plan and milestones' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-white/5">
                  <span className="font-display text-2xl font-bold text-accent/50">{item.num}</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Version History */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            {language === 'zh' ? '版本迭代记录' : 'Version History'}
          </h2>
          <div className="max-w-3xl mx-auto">
            {whitepaperVersions.map((version, i) => (
              <Card key={version.version} className={`p-6 mb-4 ${i === 0 ? 'border-accent/50' : ''}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      i === 0 ? 'bg-accent/20' : 'bg-white/5'
                    }`}>
                      <Calendar className={`w-5 h-5 ${i === 0 ? 'text-accent' : 'text-gray-400'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-display font-semibold text-white">{version.version}</h3>
                        {i === 0 && (
                          <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs">
                            {language === 'zh' ? '最新' : 'Latest'}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">{version.changelog}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">{version.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-6">
            {language === 'zh'
              ? '还有其他问题？查看常见问题或联系团队'
              : 'Have more questions? Check FAQ or contact team'}
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline">
              {language === 'zh' ? '常见问题' : 'FAQ'}
            </Button>
            <Button>
              {language === 'zh' ? '联系我们' : 'Contact Us'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
