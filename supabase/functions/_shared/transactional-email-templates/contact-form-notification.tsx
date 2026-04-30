import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Mortgage By Design, LLC'

interface ContactFormNotificationProps {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const ContactFormNotificationEmail = ({
  name,
  email,
  phone,
  message,
}: ContactFormNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New inquiry from {name || 'a website visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={brand}>{SITE_NAME}</Text>
          <Heading style={h1}>New Contact Inquiry</Heading>
        </Section>

        <Section style={card}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || '—'}</Text>

          <Hr style={divider} />

          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>

          <Hr style={divider} />

          <Text style={label}>Phone</Text>
          <Text style={value}>{phone || 'Not provided'}</Text>

          <Hr style={divider} />

          <Text style={label}>Message</Text>
          <Text style={messageStyle}>{message || '—'}</Text>
        </Section>

        <Text style={footer}>
          This inquiry was submitted through the contact form on mortgagebydesign.net.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New inquiry from ${data?.name || 'website visitor'}`,
  to: 'erobinson@adaxahome.com',
  displayName: 'Contact form notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '(555) 123-4567',
    message: 'Hi Erika, I would like to learn more about refinancing options.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '"DM Sans", Helvetica, Arial, sans-serif',
  margin: 0,
  padding: 0,
}

const container = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '32px 24px',
}

const header = {
  textAlign: 'center' as const,
  marginBottom: '24px',
}

const brand = {
  fontSize: '12px',
  letterSpacing: '0.25em',
  textTransform: 'uppercase' as const,
  color: '#c9a96e',
  margin: '0 0 12px',
  fontWeight: 600,
}

const h1 = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: '32px',
  fontWeight: 600,
  color: '#1a2942',
  margin: '0',
  lineHeight: 1.2,
}

const card = {
  backgroundColor: '#faf6f0',
  border: '1px solid #ece4d4',
  borderRadius: '4px',
  padding: '28px 24px',
  margin: '0 0 24px',
}

const label = {
  fontSize: '11px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: '#8a7c5e',
  margin: '0 0 4px',
  fontWeight: 600,
}

const value = {
  fontSize: '16px',
  color: '#1a2942',
  margin: '0 0 4px',
  lineHeight: 1.5,
}

const messageStyle = {
  fontSize: '15px',
  color: '#1a2942',
  margin: '0',
  lineHeight: 1.6,
  whiteSpace: 'pre-wrap' as const,
}

const divider = {
  borderColor: '#ece4d4',
  margin: '16px 0',
}

const footer = {
  fontSize: '12px',
  color: '#8a7c5e',
  textAlign: 'center' as const,
  margin: '24px 0 0',
  lineHeight: 1.5,
}
