import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguageStore, useMobileMenuStore } from '@/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: '首页', labelEn: 'Home' },
  { path: '/project', label: '项目介绍', labelEn: 'Project' },
  { path: '/game', label: '游戏生态', labelEn: 'Game' },
  { path: '/technology', label: '技术架构', labelEn: 'Technology' },
  { path: '/tokenomics', label: '经济模型', labelEn: 'Tokenomics' },
  { path: '/whitepaper', label: '白皮书', labelEn: 'Whitepaper' },
  { path: '/opensource', label: '开源社区', labelEn: 'Open Source' },
  { path: '/cooperation', label: '合作生态', labelEn: 'Cooperation' },
];

export default function Header() {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguageStore();
  const { isOpen, toggle, close } = useMobileMenuStore();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
              <span className="font-display font-bold text-primary text-lg">SC</span>
            </div>
            <span className="font-display font-bold text-xl text-white hidden sm:block">
              SciChain
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-accent bg-accent/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {language === 'zh' ? link.label : link.labelEn}
              </Link>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-accent/30 text-accent text-sm hover:bg-accent/10 transition-all"
            >
              <Globe size={16} />
              <span>{language === 'zh' ? 'EN' : '中'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggle}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-accent/10"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={close}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive(link.path)
                      ? 'text-accent bg-accent/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {language === 'zh' ? link.label : link.labelEn}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
