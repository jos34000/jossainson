import path from "path"
import { fileURLToPath } from "url"

import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: true,
})

const nextConfig = await compat.config({
  extends: ["next/core-web-vitals"],
})

const importConfig = await compat.config({
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
  rules: {
    "import/no-relative-parent-imports": "off",
    "import/no-relative-packages": "error",
    "import/order": [
      "off",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
})

export default [
  {
    ignores: [".next/*", "node_modules/*"],
  },
  ...nextConfig,
  ...importConfig,
]
