import { create } from 'zustand';

interface LanguageState {
  language: 'zh' | 'en';
  setLanguage: (lang: 'zh' | 'en') => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'zh',
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () => set((state) => ({ language: state.language === 'zh' ? 'en' : 'zh' })),
}));

interface MobileMenuState {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const useMobileMenuStore = create<MobileMenuState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));
