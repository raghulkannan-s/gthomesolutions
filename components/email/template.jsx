import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Hr,
  Section,
  Row,
  Column,
  Button,
} from "@react-email/components";

export default function EmailTemplate({ name, phone, location, message }) {
  const cleanPhone = String(phone || "").replace(/\s+/g, "");
  const whatsappLink = `https://wa.me/91${cleanPhone.replace(/^(\+91)/, "").replace(/^91/, "")}`;

  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.topBar} />

          <Section style={styles.header}>
            <Text style={styles.brand}>GT HOME SOLUTION</Text>
            <Text style={styles.title}>New Estimation Request</Text>
            <Text style={styles.subtitle}>
              A customer submitted a lead from the website.
            </Text>

            <Section style={styles.actions}>
              <Button
                href={`tel:${cleanPhone}`}
                style={{ ...styles.actionBtn, ...styles.callBtn }}
              >
                Call Now
              </Button>

              <Button
                href={whatsappLink}
                style={{ ...styles.actionBtn, ...styles.waBtn }}
              >
                WhatsApp
              </Button>
            </Section>
          </Section>

          <Hr style={styles.hr} />

          <Section style={styles.card}>
            <Text style={styles.cardTitle}>Customer Details</Text>

            <Section style={styles.table}>
              <Row>
                <Column style={styles.labelCol}>
                  <Text style={styles.label}>Name</Text>
                </Column>
                <Column style={styles.valueCol}>
                  <Text style={styles.value}>{name}</Text>
                </Column>
              </Row>

              <Row>
                <Column style={styles.labelCol}>
                  <Text style={styles.label}>Phone</Text>
                </Column>
                <Column style={styles.valueCol}>
                  <Text style={styles.value}>
                    <a href={`tel:${cleanPhone}`} style={styles.link}>
                      {phone}
                    </a>
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column style={styles.labelCol}>
                  <Text style={styles.label}>Location</Text>
                </Column>
                <Column style={styles.valueCol}>
                  <Text style={styles.value}>{location}</Text>
                </Column>
              </Row>
            </Section>
          </Section>

          <Section style={styles.card}>
            <Text style={styles.cardTitle}>Customer Message</Text>

            <Section style={styles.messageBox}>
              <Text style={styles.messageText}>{message}</Text>
            </Section>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              Submitted via <b>GT Home Solution</b> website.
            </Text>
            <Text style={styles.footerSmall}>
              Reply within 5 minutes for best conversion.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "#f4f6fb",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
  },
  container: {
    maxWidth: 640,
    margin: "0 auto",
    padding: "22px 14px",
  },

  topBar: {
    height: 6,
    borderRadius: 999,
    background:
      "linear-gradient(90deg, #0ea5e9 0%, #6366f1 50%, #f59e0b 100%)",
    marginBottom: 14,
  },

  header: {
    backgroundColor: "#ffffff",
    borderRadius: 9,
    padding: "18px 18px",
    border: "1px solid #e9edf5",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
  },
  brand: {
    margin: 0,
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.9px",
    color: "#334155",
  },
  title: {
    margin: "10px 0 4px",
    fontSize: 22,
    fontWeight: 900,
    color: "#0f172a",
  },
  subtitle: {
    margin: 0,
    fontSize: 13,
    lineHeight: "18px",
    color: "#475569",
  },

  actions: {
    marginTop: 14,
  },
  actionBtn: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 800,
    textDecoration: "none",
    marginRight: 10,
  },
  callBtn: {
    backgroundColor: "#0f172a",
    color: "#ffffff",
  },
  waBtn: {
    backgroundColor: "#22c55e",
    color: "#ffffff",
  },

  hr: {
    borderColor: "#e9edf5",
    margin: "16px 0",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 9,
    padding: "16px 16px",
    border: "1px solid #e9edf5",
    marginBottom: 14,
    boxShadow: "0 6px 18px rgba(15, 23, 42, 0.05)",
  },
  cardTitle: {
    margin: "0 0 10px",
    fontSize: 14,
    fontWeight: 900,
    color: "#0f172a",
  },

  table: {
    width: "100%",
  },
  labelCol: {
    width: "30%",
    paddingRight: 10,
    verticalAlign: "top",
  },
  valueCol: {
    width: "70%",
    verticalAlign: "top",
  },
  label: {
    margin: "8px 0",
    fontSize: 12,
    fontWeight: 800,
    color: "#64748b",
  },
  value: {
    margin: "8px 0",
    fontSize: 13,
    fontWeight: 700,
    color: "#0f172a",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: 900,
  },

  messageBox: {
    borderRadius: 7,
    padding: "12px 12px",
    backgroundColor: "#fff7ed",
    border: "1px solid #fed7aa",
  },
  messageText: {
    margin: 0,
    fontSize: 13,
    lineHeight: "19px",
    color: "#0f172a",
    whiteSpace: "pre-wrap",
    fontWeight: 600,
  },

  footer: {
    padding: "6px 4px",
    textAlign: "center",
  },
  footerText: {
    margin: "8px 0 0",
    fontSize: 12,
    color: "#64748b",
  },
  footerSmall: {
    margin: "6px 0 0",
    fontSize: 11,
    color: "#94a3b8",
  },
};
