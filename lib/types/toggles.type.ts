type Language = {
  code: string
  label: string
}

type Direction = "top" | "bottom" | "left" | "right"
type Orientation = "vertical" | "horizontal"

type ToggleProps = {
  direction?: Direction
  orientation?: Orientation
}

type SupportedLanguage = "en" | "fr" | "es"
