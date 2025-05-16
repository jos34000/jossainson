import { expect, test } from "@playwright/test"

const locales = [
  {
    code: "fr",
    languageTestId: "onboarding-language-fr",
    themeTestId: "onboarding-theme-light",
    interestsTestId: "onboarding-interests-projects",
    cookiesTestId: "onboarding-cookies-functional",
  },
  {
    code: "en",
    languageTestId: "onboarding-language-en",
    themeTestId: "onboarding-theme-light",
    interestsTestId: "onboarding-interests-projects",
    cookiesTestId: "onboarding-cookies-functional",
  },
  {
    code: "es",
    languageTestId: "onboarding-language-es",
    themeTestId: "onboarding-theme-light",
    interestsTestId: "onboarding-interests-projects",
    cookiesTestId: "onboarding-cookies-functional",
  },
]

for (const locale of locales) {
  test.describe(`Onboarding complet (${locale.code})`, () => {
    test(`doit permettre de compléter l'onboarding`, async ({ page }) => {
      await test.step("Accède à la page d'onboarding", async () => {
        await page.goto(`http://localhost:3000/${locale.code}/onboarding`)
      })

      await test.step("Passe l'étape 1 : intro", async () => {
        await page.waitForSelector('[data-testid="onboarding-next"]', {
          state: "visible",
        })
        await page.getByTestId("onboarding-next").click()
      })

      await test.step("Passe l'étape 2 : choix de la langue", async () => {
        await page.waitForSelector(`[data-testid='${locale.languageTestId}']`, {
          state: "visible",
        })
        await page.waitForSelector('[data-testid="onboarding-next"]', {
          state: "visible",
        })
        await page.getByTestId("onboarding-next").click()
      })

      await test.step("Passe l'étape 3 : choix du thème", async () => {
        await page.waitForSelector(`[data-testid='${locale.themeTestId}']`, {
          state: "visible",
        })
        await page.waitForSelector('[data-testid="onboarding-next"]', {
          state: "visible",
        })
        await page.getByTestId("onboarding-next").click()
      })

      await test.step("Passe l'étape 4 : sélection des intérêts", async () => {
        await page.waitForSelector(
          `[data-testid='${locale.interestsTestId}']`,
          { state: "visible" }
        )
        await page.waitForSelector('[data-testid="onboarding-next"]', {
          state: "visible",
        })
        await page.getByTestId("onboarding-next").click()
      })

      await test.step("Passe l'étape 5 : gestion des cookies", async () => {
        await page.waitForSelector(`[data-testid='${locale.cookiesTestId}']`, {
          state: "visible",
        })
        await page.waitForSelector('[data-testid="onboarding-finish"]', {
          state: "visible",
        })
        await page.getByTestId("onboarding-finish").click()
      })

      await test.step("Vérifie la présence du cookie et la redirection finale", async () => {
        await page.waitForTimeout(2000)
        const cookies = await page.context().cookies()
        expect(
          cookies.some((c) => c.name === "onboarding-completed")
        ).toBeTruthy()
        await expect(page).toHaveURL(`http://localhost:3000/${locale.code}`)
      })
    })
  })
}
