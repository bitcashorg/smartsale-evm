import { uniq } from 'lodash'
import {
  BlogArticleRecord,
  getBlogCategory
} from './datacms-blog-category.service'
import { getLayoutText } from './datocms-layout.service'
import { getPageSeoText } from './datocms-seo.service'
import { BlogAiRecord, SiteLocale } from './graphql/generated/cms'
import * as fs from 'fs'
import path from 'path'

export const getBlogData = async (locale: SiteLocale) => {
  const locales = [locale]
  const [
    i18n,
    pageSeo,
    { bitcoinData, bitcoinError },
    { cryptoData, cryptoError },
    { investingData, investingError },
    { startupData, startupError },
    { aiData, aiError },
    { newsData, newsError },
    { bitcashData, bitcashError },
    { aiResearchData, researchError }
  ] = await Promise.all([
    getLayoutText(locale, locales),
    getPageSeoText('home', locale, locales),
    getBlogCategory('bitcoin', locale, locales, undefined, 5),
    getBlogCategory('crypto', locale, locales, undefined, 5),
    getBlogCategory('investing', locale, locales, undefined, 5),
    getBlogCategory('startup', locale, locales, undefined, 5),
    getBlogCategory('ai', locale, locales, undefined, 5),
    getBlogCategory('news', locale, locales, undefined, 5),
    getBlogCategory('bitcash', locale, locales, undefined, 5),
    getBlogCategory('ai-research', locale, locales, undefined, 5)
  ])
  return {
    i18n,
    pageSeo,
    bitcoinData,
    bitcoinError,
    cryptoData,
    cryptoError,
    investingData,
    investingError,
    startupData,
    startupError,
    aiData,
    aiError,
    newsData,
    newsError,
    bitcashData,
    bitcashError,
    aiResearchData,
    researchError
  }
}

export async function getArticleSections(
  locale: SiteLocale
): Promise<ArticlesSection[]> {
  const {
    bitcoinData,
    cryptoData,
    investingData,
    startupData,
    aiData,
    newsData,
    bitcashData,
    aiResearchData
  } = await getBlogData(locale)
  console.log('__dirname', __dirname)
  const dirPath = path.resolve(
    __dirname.replace('[project]/', ''),
    `../../../../../dictionaries/${locale}/blog/`
  )
  const fileName = `blog-index.json`
  const filePath = path.resolve(dirPath, fileName)
  console.log({ dirPath, filePath })
  // return []
  // return cached translations
  try {
    const fileContents = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    return fileContents.sections
  } catch (error) {
    console.log('error', error)
    try {
      const englishVersion = JSON.parse(
        fs.readFileSync(
          path.resolve(
            __dirname.replace('[project]/', ''),
            `../../../dictionaries/en/blog/${fileName}`
          ),
          'utf8'
        )
      )
      if (englishVersion) return englishVersion.sections
    } catch (error) {
      console.log('error', error)
    }
  }

  const sections: ArticlesSection[] = [
    {
      name: 'AI',
      slug: 'ai',
      articles: (aiData?.slice(0, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'AI Research',
      slug: 'ai-research',
      articles: (aiResearchData?.slice(0, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'News',
      slug: 'news',
      articles: (newsData?.slice(0, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'Bitcash',
      slug: 'bitcash',
      articles: (bitcashData?.slice(0, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'Startup',
      slug: 'startup',
      articles: (startupData?.slice(1, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'Crypto',
      slug: 'crypto',
      articles: (cryptoData?.slice(1, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'Bitcoin',
      slug: 'bitcoin',
      articles: (bitcoinData?.slice(1, 5) || []) as BlogArticleRecord[]
    },
    {
      name: 'Investing',
      slug: 'investing',
      articles: (investingData?.slice(1, 5) || []) as BlogArticleRecord[]
    }
  ]

  sections.forEach(section => {
    section.articles.forEach(article => {
      article.contentBlock = []
    })
  })

  fs.mkdirSync(dirPath, { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify({ sections }, null, 2))

  return sections
}

export async function getRecentArticleSections(
  locale: SiteLocale
): Promise<ArticlesSection[]> {
  const {
    bitcoinData,
    cryptoData,
    investingData,
    startupData,
    aiData,
    newsData,
    bitcashData,
    aiResearchData
  } = await getBlogData(locale)

  const recentsArticles = [
    {
      name: 'Bitcoin',
      slug: 'bitcoin',
      articles: (bitcoinData?.slice(0) || []) as BlogArticleRecord[]
    },
    {
      name: 'Crypto',
      slug: 'crypto',
      articles: (cryptoData?.slice(0) || []) as BlogArticleRecord[]
    },
    {
      name: 'Startup',
      slug: 'startup',
      articles: (startupData?.slice(0) || []) as BlogArticleRecord[]
    },

    {
      name: 'Investment',
      slug: 'investing',
      articles: (investingData?.slice(0) || []) as BlogArticleRecord[]
    }
  ]

  return recentsArticles
}

export async function getBlogCategoryLandingData(
  locale: SiteLocale,
  category: string
) {
  const [i18n, categories, pageSeo] = await Promise.all([
    getLayoutText(locale, [locale]),
    getBlogCategory(category, locale, [locale], undefined, 100),
    getPageSeoText(category, locale, [locale])
  ])

  const dirPath = path.resolve(
    __dirname.replace('[project]/', ''),
    `../../../../../dictionaries/${locale}/blog/${category}`
  )
  const fileName = `${category}-index.json`
  const filePath = path.resolve(dirPath, fileName)
  console.log({ dirPath, filePath })

  // return cached translations
  try {
    const fileContents = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    return fileContents
  } catch (error) {
    // console.log('error', error)
    try {
      const englishVersion = JSON.parse(
        fs.readFileSync(
          path.resolve(
            __dirname.replace('[project]/', ''),
            `../../../dictionaries/en/blog/${category}/${fileName}`
          ),
          'utf8'
        )
      )
      if (englishVersion) return englishVersion
    } catch (error) {}
  }

  // replacing category kebab case with camel case
  const blogCategory = category.replace(/(\-\w)/g, (m: string) =>
    m[1].toUpperCase()
  )
  const categoryContent: BlogArticleRecord[] | undefined = categories[
    `${blogCategory}Data`
  ] as BlogArticleRecord[] | undefined

  if (!categoryContent) return null
  // get topics
  const allTopics: string[] = []

  categoryContent.forEach(blog => {
    blog?.topics?.forEach((topic: string) => {
      allTopics.push(topic)
    })
  })

  // section topics & blogs content
  const topics = uniq(allTopics)

  const sections: ArticlesSection[] = topics?.map((tp, index) => {
    const articles = categoryContent.filter(content =>
      content.topics.includes(tp)
    )
    articles.forEach(article => {
      article.contentBlock = []
    })

    return {
      name: tp,
      slug: `${tp.toLocaleLowerCase()}`,
      articles
    }
  })

  const result = { sections, pageSeo }

  fs.mkdirSync(dirPath, { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify(result, null, 2))

  return result
}

export type BlogArticleData = {
  relatedBlogs: BlogArticleRecord[]
  blogContent: BlogArticleRecord
  topics: string[]
}

export async function getBlogArticleData(
  locale: SiteLocale,
  category: string,
  slug: string
) {
  const dirPath = path.resolve(
    __dirname.replace('[project]/', ''),
    `../../../../../dictionaries/${locale}/blog/${category}`
  )
  const fileName = `${slug}.json`
  const filePath = path.resolve(dirPath, fileName)
  console.log({ dirPath, filePath })

  // return cached translations
  try {
    const fileContents: BlogArticleData = JSON.parse(
      fs.readFileSync(filePath, 'utf8')
    )
    return fileContents
  } catch (error) {
    // console.log('__dirname', __dirname)
    const englishVersion: BlogArticleData = JSON.parse(
      fs.readFileSync(
        path.resolve(
          __dirname.replace('[project]/', ''),
          `../../../dictionaries/en/blog/${category}/${slug}.json`
        ),
        'utf8'
      )
    )
    if (englishVersion) return englishVersion
  }

  // console.log('getBlogArticleData', { locale, category, slug })
  const [i18n, categories] = await Promise.all([
    getLayoutText(locale, [locale]),
    getBlogCategory(category, locale, [locale], {
      slug: {
        eq: slug
      }
    })
  ])

  // replacing category kebab case with camel case
  const blogCategory = category.replace(/(\-\w)/g, (m: string) =>
    m[1].toUpperCase()
  )
  const data: any = categories[`${blogCategory}Data`]
  const error: any = categories[`${blogCategory}Error`]

  let categoryContent: any[]
  categoryContent = data
  if (categoryContent.length < 1 || error) return null

  let relatedBlogs: any = []
  const blogContent = categoryContent[0]

  const topics = blogContent?.topics

  if (topics.length > 0) {
    relatedBlogs = await getBlogCategory(category, locale, [locale], {
      slug: {
        neq: slug
      }
    })
    const escapeRegExp = (string: string): string => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
    }

    // Prepare the regex pattern outside the filter function for efficiency
    const escapedTitle = escapeRegExp(blogContent.title).replace(/\s+/g, '|')
    const titleRegex = new RegExp(`(${escapedTitle})`, 'gi')

    relatedBlogs = relatedBlogs[`${blogCategory}Data`]
      .map((blog: any) => {
        const { contentBlock, ...rest } = blog
        return rest
      })
      .filter(
        (blog: BlogAiRecord) =>
          (blog.topics as string[]).some((topic: string) =>
            topics.includes(topic)
          ) &&
          blog.description?.match(titleRegex) &&
          blog.title?.match(titleRegex)
      )
  }

  // always create an english dictionary
  const result: BlogArticleData = { relatedBlogs, blogContent, topics }

  fs.mkdirSync(dirPath, { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify(result, null, 2))

  return result
}

export type ArticlesSection = {
  name: string
  slug: string
  articles: BlogArticleRecord[]
}
