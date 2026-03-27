import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tokimura.jp',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es', 'it', 'zh-cn', 'zh-tw', 'ko', 'th'],
    routing: {
      prefixDefaultLocale: false, // ルートは英語を表示
      fallbackType: 'redirect'    // 存在しない言語はデフォルトへ
    }
  }
});