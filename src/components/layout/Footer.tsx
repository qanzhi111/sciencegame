import { Link } from 'react-router-dom';
import { Github, Twitter, MessageCircle, Send } from 'lucide-react';
import { useLanguageStore } from '@/store/useStore';

const footerLinks = {
  project: [
    { label: '关于我们', labelEn: 'About Us', path: '/project', key: 'project-about' },
    { label: '技术架构', labelEn: 'Technology', path: '/technology', key: 'project-tech' },
    { label: '经济模型', labelEn: 'Tokenomics', path: '/tokenomics', key: 'project-token' },
  ],
  resources: [
    { label: '白皮书', labelEn: 'Whitepaper', path: '/whitepaper', key: 'resource-whitepaper' },
    { label: '技术文档', labelEn: 'Documentation', path: '/technology', key: 'resource-doc' },
    { label: '开源仓库', labelEn: 'Open Source', path: '/opensource', key: 'resource-oss' },
  ],
  community: [
    { label: '开发者社区', labelEn: 'Developers', path: '/opensource', key: 'community-dev' },
    { label: '合作生态', labelEn: 'Partnership', path: '/cooperation', key: 'community-coop' },
    { label: '联系我们', labelEn: 'Contact', path: '/cooperation', key: 'community-contact' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/scichain', label: 'Twitter' },
  { icon: MessageCircle, href: 'https://discord.gg/scichain', label: 'Discord' },
  { icon: Send, href: 'https://t.me/scichain', label: 'Telegram' },
  { icon: Github, href: 'https://github.com/scichain', label: 'GitHub' },
];

export default function Footer() {
  const { language } = useLanguageStore();

  return (
    <footer className="bg-secondary border-t border-accent/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <span className="font-display font-bold text-primary text-lg">SC</span>
              </div>
              <span className="font-display font-bold text-xl text-white">SciChain</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              {language === 'zh'
                ? '科研赋能链游，算力创造价值 —— Web3去中心化公民科学生态，让每个人都能参与前沿科学研究'
                : 'Web3 Decentralized Citizen Science Ecosystem - Empowering scientific research through gaming and distributed computing'}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              {language === 'zh' ? '项目' : 'Project'}
            </h4>
            <ul className="space-y-2">
              {footerLinks.project.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-accent transition-colors"
                  >
                    {language === 'zh' ? link.label : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              {language === 'zh' ? '资源' : 'Resources'}
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-accent transition-colors"
                  >
                    {language === 'zh' ? link.label : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              {language === 'zh' ? '社区' : 'Community'}
            </h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-accent transition-colors"
                  >
                    {language === 'zh' ? link.label : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 SciChain. {language === 'zh' ? '保留所有权利' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
