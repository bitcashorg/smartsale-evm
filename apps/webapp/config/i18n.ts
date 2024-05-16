import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"

import translations from "../translations"

const locales = ["en", "zh", "es", "vi", "id"]

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound()

  return {
    messages: translations[locale as "en" | "zh" | "es" | "vi" | "id"],
  }
})
