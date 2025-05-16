import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import { getTranslations } from "next-intl/server"

interface VerifyEmailProps {
  verificationUrl: string
  userFirstname?: string
  deviceInfo?: {
    device: string
    browser: string
    ip: string
  }
}

export default async function VerifyEmail({
  verificationUrl,
  userFirstname,
  deviceInfo,
}: Readonly<VerifyEmailProps>) {
  const icons = {
    lock: "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/lock-simple.svg",
    globe:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/globe.svg",
    book: "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/book-open.svg",
    lightbulb:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/lightbulb.svg",
    users:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/users.svg",
    device:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/device-mobile.svg",
  }

  const t = await getTranslations("Mail.verifyEmail")
  return (
    <Html>
      <Head>
        <Preview>{t("preview")}</Preview>
      </Head>
      <Body
        style={{
          margin: "0",
          padding: "0",
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          WebkitTextSizeAdjust: "100%",
          textSizeAdjust: "100%",
        }}
      >
        <Container
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#000000",
            padding: "40px 20px",
          }}
        >
          <Container
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
              backgroundColor: "#000000",
            }}
          >
            <Section
              style={{
                textAlign: "center" as const,
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  padding: "16px",
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <Img
<<<<<<< HEAD
                  src="https://jossainson.dev/static/Logos/logo-light.png"
=======
                  src="https://jossainson.dev/static/logo-light.png"
>>>>>>> 907bed09a76160ea7a26b81e284ff59cbc188af8
                  width="60"
                  height="60"
                  alt="Logo"
                  style={{
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.2)",
                  }}
                />
              </div>
            </Section>

            <Section
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                padding: "40px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                marginBottom: "20px",
              }}
            >
              <Text
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: "#ffffff",
                  marginBottom: "24px",
                  textAlign: "center" as const,
                }}
              >
                {userFirstname
                  ? t("welcomeUser", { userFirstname })
                  : t("welcome")}
              </Text>

              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "32px",
                  textAlign: "center" as const,
                }}
              >
                {t("message")}
              </Text>

              <Section
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <Img
                    src={icons.lock}
                    width="20"
                    height="20"
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      margin: "0",
                    }}
                  >
                    {t("message2")}
                  </Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <Img
                    src={icons.globe}
                    width="20"
                    height="20"
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      margin: "0",
                    }}
                  >
                    {t("message3")}
                  </Text>
                </div>
              </Section>

              <Section
                style={{
                  textAlign: "center" as const,
                  marginBottom: "32px",
                }}
              >
                <Button
                  href={verificationUrl}
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    padding: "20px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                    display: "inline-block",
                    minWidth: "200px",
                  }}
                >
                  {t("link")}
                </Button>
              </Section>

              <Text
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "32px",
                  textAlign: "center" as const,
                  fontStyle: "italic",
                }}
              >
                {t("message4")}
              </Text>

              <Section
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "32px",
                  marginBottom: "32px",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "16px",
                    textAlign: "center" as const,
                  }}
                >
                  {t("quickLinks")}
                </Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Img
                      src={icons.book}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    {t("documentation")}
                  </Link>
                  <Link
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Img
                      src={icons.lightbulb}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    {t("gettingStarted")}
                  </Link>
                  <Link
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Img
                      src={icons.users}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    {t("community")}
                  </Link>
                </div>
              </Section>

              <Section
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "32px",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "8px",
                    textAlign: "center" as const,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <Img
                    src={icons.device}
                    width="20"
                    height="20"
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  {t("message5")}
                </Text>
                <Text
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.7)",
                    textAlign: "center" as const,
                    margin: "4px 0 0 0",
                  }}
                >
                  {`${deviceInfo?.device ?? t("unknown")} • ${deviceInfo?.browser ?? t("unknown")} • ${deviceInfo?.ip ?? t("unknown")}`}
                </Text>
              </Section>
            </Section>

            <Section
              style={{
                textAlign: "center" as const,
                marginTop: "20px",
              }}
            >
              <Text
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "16px",
                }}
              >
                {t("copyright")}
              </Text>

              <Hr
                style={{
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  margin: "16px 0",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <Link
                  href="#"
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "12px",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {t("privacyPolicy")}
                </Link>
                <Link
                  href="#"
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "12px",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {t("unsubscribe")}
                </Link>
              </div>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  )
}
