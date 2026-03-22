import { createHighlighter } from 'shiki'

let highlighter: any

export async function useShiki() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: ['vue', 'html', 'ts', 'js']
    })
  }

  const highlight = (code: string, lang = 'vue', isDark = false) => {
    return highlighter.codeToHtml(code, {
      lang,
      theme: isDark ? 'github-dark' : 'github-light'
    })
  }

  return { highlight }
}