import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import { getTranslations } from "next-intl/server"

interface ThankYouContactEmailProps {
  userFirstname?: string
  email: string
  message: string
  reason: string
}

export default async function ThankYouContactEmail({
  userFirstname,
  email,
  message,
  reason,
}: Readonly<ThankYouContactEmailProps>) {
  const icons = {
    clock:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/clock.svg",
    calendar:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/calendar.svg",
    phone:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/phone.svg",
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

  const t = await getTranslations("Mail.thanks")

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
                {t("title")}
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
                    src={icons.clock}
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
                    {t("expectedResponseTime")}
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
                    src={icons.calendar}
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
                    {t("responseHours")}
                  </Text>
                </div>
              </Section>

              <Section
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  marginBottom: "32px",
                }}
              >
                <Text
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#ffffff",
                    marginBottom: "16px",
                    textAlign: "center" as const,
                  }}
                >
                  {t("summary")}
                </Text>

                {email && (
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      padding: "12px",
                      borderRadius: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0",
                      }}
                    >
                      <strong style={{ color: "#ffffff" }}>Email:</strong>{" "}
                      {email}
                    </Text>
                  </div>
                )}

                {reason && (
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      padding: "12px",
                      borderRadius: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0",
                      }}
                    >
                      <strong style={{ color: "#ffffff" }}>Reason:</strong>{" "}
                      {reason}
                    </Text>
                  </div>
                )}

                {message && (
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      padding: "12px",
                      borderRadius: "8px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0 0 8px 0",
                      }}
                    >
                      <strong style={{ color: "#ffffff" }}>Message:</strong>
                    </Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0",
                        lineHeight: "1.5",
                      }}
                    >
                      {message}
                    </Text>
                  </div>
                )}
              </Section>

              <Section
                style={{
                  textAlign: "center" as const,
                  marginBottom: "32px",
                }}
              >
                <Text
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "24px",
                  }}
                >
                  {t("immediateAssistance")}
                </Text>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Button
                    href="tel:+33625649572"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      padding: "20px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      maxWidth: "320px",
                      border: "none",
                    }}
                  >
                    {t("callNow")}
                  </Button>

                  <Button
                    href="https://calendly.com/jocelyn-sainson/30min"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "#ffffff",
                      padding: "20px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      maxWidth: "320px",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    {t("scheduleMeeting")}
                  </Button>
                </div>
              </Section>

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
                  {t("commonQuestions")}
                </Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "13px",
                      textDecoration: "none",
                      padding: "8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      textAlign: "center" as const,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <Img
                      src={icons.book}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    {t("servicePackages")}
                  </Link>
                  <Link
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "13px",
                      textDecoration: "none",
                      padding: "8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      textAlign: "center" as const,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <Img
                      src={icons.globe}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    {t("rates")}
                  </Link>
                  <Link
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "13px",
                      textDecoration: "none",
                      padding: "8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      textAlign: "center" as const,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <Img
                      src={icons.device}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    {t("howSoonCanWeStart")}
                  </Link>
                </div>
              </Section>

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
                  {t("joinOurGrowingCommunity")}
                </Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "24px",
                    flexWrap: "wrap" as const,
                  }}
                >
                  <div
                    style={{
                      textAlign: "center" as const,
                      minWidth: "100px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffffff",
                        margin: "0",
                      }}
                    >
                      500+
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "4px 0 0 0",
                      }}
                    >
                      {t("satisfiedClients")}
                    </Text>
                  </div>
                  <div
                    style={{
                      textAlign: "center" as const,
                      minWidth: "100px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffffff",
                        margin: "0",
                      }}
                    >
                      4.9/5
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "4px 0 0 0",
                      }}
                    >
                      {t("averageRating")}
                    </Text>
                  </div>
                  <div
                    style={{
                      textAlign: "center" as const,
                      minWidth: "100px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffffff",
                        margin: "0",
                      }}
                    >
                      98%
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "4px 0 0 0",
                      }}
                    >
                      {t("responseRate")}
                    </Text>
                  </div>
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
                    marginBottom: "16px",
                    textAlign: "center" as const,
                  }}
                >
                  {t("connectWithUs")}
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
                      src={icons.globe}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    Twitter
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
                      src={icons.lock}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    LinkedIn
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
                      src={icons.device}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    Instagram
                  </Link>
                </div>
              </Section>
            </Section>

            <Text
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                textAlign: "center" as const,
                margin: "0",
              }}
            >
              {t("thankYouAgain")}
            </Text>
          </Container>
        </Container>
      </Body>
    </Html>
  )
}
