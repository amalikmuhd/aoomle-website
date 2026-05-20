import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const brand = JSON.parse(readFileSync(join(root, 'src/data/brand.json'), 'utf8'))

function fill(template) {
  return template
    .replaceAll('{{COMPANY_FULL}}', brand.nameFull)
    .replaceAll('{{COMPANY_SHORT}}', brand.name)
    .replaceAll('{{COMPANY_SUFFIX}}', brand.nameWeight)
    .replaceAll('{{WEBSITE}}', brand.website)
    .replaceAll('{{EMAIL}}', brand.email)
    .replaceAll('{{PHONE}}', brand.phone)
    .replaceAll('{{PHONE_HREF}}', brand.phoneHref)
    .replaceAll('{{ADDRESS}}', brand.address)
    .replaceAll('{{LAST_UPDATED}}', brand.legalLastUpdated)
}

const contactBlock = `
      <p class="contact-block">
        Email: <a href="mailto:{{EMAIL}}">{{EMAIL}}</a><br />
        Phone: <a href="{{PHONE_HREF}}">{{PHONE}}</a><br />
        Address: {{ADDRESS}}
      </p>`.trim()

const header = `
    <header class="site-header">
      <a href="/"><strong>{{COMPANY_SHORT}}</strong> <span>{{COMPANY_SUFFIX}}</span></a>
    </header>`.trim()

function pageShell({ title, body }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} - {{COMPANY_FULL}}</title>
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/legal-styles.css" />
  </head>
  <body>
${header}
    <main>
${body}
    </main>
  </body>
</html>
`
}

const privacyBody = `
      <h1>Privacy Policy</h1>
      <p class="updated">Last Updated: {{LAST_UPDATED}}</p>

      <h2>Introduction</h2>
      <p>
        At {{COMPANY_FULL}}, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you. Please read this privacy policy carefully before using our services.
      </p>

      <h2>Information We Collect</h2>
      <p>We collect several types of information from and about users of our website, including:</p>
      <ul>
        <li>Personal identifiers such as name, postal address, email address, telephone number</li>
        <li>Professional or employment-related information</li>
        <li>Internet activity information, including browser type, IP address, and pages visited</li>
        <li>Feedback and correspondence, such as when you report a problem or contact us</li>
      </ul>

      <h2>How We Collect Your Information</h2>
      <p>We collect information directly from you when you provide it to us, automatically as you navigate through the site, and from third-party sources such as business partners or analytics providers.</p>
      <ul>
        <li>Information you provide by filling in forms on our website</li>
        <li>Records and copies of your correspondence with us</li>
        <li>Details of transactions you carry out through our website</li>
        <li>Information collected through cookies and tracking technologies</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect about you to:</p>
      <ul>
        <li>Provide, maintain, and improve our services</li>
        <li>Process and complete transactions, and send related information</li>
        <li>Send transactional messages, including responses to your comments, questions, and requests</li>
        <li>Send promotional communications, such as providing you with information about services, features, surveys, newsletters, offers, promotions, contests, and events</li>
        <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
        <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of {{COMPANY_FULL}} and others</li>
      </ul>

      <h2>How We Share Your Information</h2>
      <p>We may disclose aggregated information about our users without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
      <ul>
        <li>To our subsidiaries and affiliates</li>
        <li>To contractors, service providers, and other third parties we use to support our business</li>
        <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of {{COMPANY_FULL}}'s assets</li>
        <li>To fulfill the purpose for which you provide it</li>
        <li>For any other purpose disclosed by us when you provide the information</li>
        <li>With your consent</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
      </p>

      <h2>Your Data Protection Rights</h2>
      <p>You have rights regarding your personal data, including:</p>
      <ul>
        <li>The right to access – You have the right to request copies of your personal data.</li>
        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or incomplete.</li>
        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
        <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
        <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
        <li>The right to data portability – You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.
      </p>

      <h2>Changes to Our Privacy Policy</h2>
      <p>
        We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last Updated' date at the top of this page. You are advised to review this privacy policy periodically for any changes.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
${contactBlock}
`

const termsBody = `
      <h1>Terms and Conditions</h1>
      <p class="updated">Last Updated: {{LAST_UPDATED}}</p>

      <h2>Introduction</h2>
      <p>
        Welcome to {{COMPANY_FULL}}'s website. These Terms and Conditions govern your use of our website located at {{WEBSITE}} ("the Website") and all related services, features, content, and applications offered by {{COMPANY_FULL}} (collectively, "the Services"). By accessing or using our Services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our Services.
      </p>

      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy. These Terms and Conditions constitute a legally binding agreement between you and {{COMPANY_FULL}}. If you are using our Services on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms and Conditions.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        {{COMPANY_FULL}} reserves the right to modify or replace these Terms and Conditions at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms.
      </p>

      <h2>Access and Use of the Services</h2>
      <p>Subject to these Terms and Conditions, {{COMPANY_FULL}} grants you a non-exclusive, non-transferable, limited right to access and use the Services for your personal or internal business purposes.</p>
      <ul>
        <li>You may not use the Services for any illegal or unauthorized purpose</li>
        <li>You must not attempt to gain unauthorized access to any portion of the Services</li>
        <li>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Services without express written permission from {{COMPANY_FULL}}</li>
        <li>You must not transmit any worms, viruses, or code of a destructive nature</li>
        <li>You agree not to interfere with or disrupt the Services or servers or networks connected to the Services</li>
      </ul>

      <h2>Intellectual Property Rights</h2>
      <p>
        The Services and their original content, features, and functionality are and will remain the exclusive property of {{COMPANY_FULL}} and its licensors. The Services are protected by copyright, trademark, and other laws of both Nigeria and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of {{COMPANY_FULL}}. All content, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of {{COMPANY_FULL}} or its content suppliers and protected by intellectual property laws.
      </p>

      <h2>User Accounts</h2>
      <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Services.</p>
      <ul>
        <li>You are responsible for safeguarding the password that you use to access the Services</li>
        <li>You agree not to disclose your password to any third party</li>
        <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account</li>
        <li>You may not use as a username the name of another person or entity or that is not lawfully available for use</li>
      </ul>

      <h2>User Content</h2>
      <p>
        Our Services may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the Services, including its legality, reliability, and appropriateness. By posting content to the Services, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Services.
      </p>

      <h2>Payment Terms</h2>
      <p>For paid Services, you agree to pay all fees or charges to your account based on our fees, charges, and billing terms in effect. If you don't cancel your subscription before your billing date, you authorize us to charge your payment method for the next billing period. You are responsible for maintaining current payment information. All payments are non-refundable except as expressly provided in these Terms.</p>
      <ul>
        <li>Payments are due at the time of purchase or as otherwise specified during the checkout process</li>
        <li>We use third-party payment processors and your use is subject to their terms of service</li>
        <li>You are responsible for any taxes that may apply to your purchase</li>
        <li>We reserve the right to change our prices with 30 days' advance notice</li>
      </ul>

      <h2>Service Level Agreement</h2>
      <p>
        {{COMPANY_FULL}} strives to provide reliable and high-quality Services, but we cannot guarantee that the Services will be available at all times. We may experience hardware, software, or other problems, resulting in service interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time without notice. We will not be liable for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        In no event shall {{COMPANY_FULL}}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the Services; (iii) any content obtained from the Services; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to defend, indemnify and hold harmless {{COMPANY_FULL}} and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of (i) your use and access of the Services, (ii) your violation of any term of these Terms, (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right, or (iv) any claim that your content caused damage to a third party.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
      </p>

      <h2>Termination</h2>
      <p>
        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services or contact us to request account deletion.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
${contactBlock}
`

const returnBody = `
      <h1>Return Policy</h1>
      <p class="updated">Last Updated: {{LAST_UPDATED}}</p>

      <h2>Introduction</h2>
      <p>
        At {{COMPANY_FULL}}, customer satisfaction is our top priority. This Return Policy outlines the guidelines and procedures for requesting refunds for software, subscriptions, and professional services purchased from {{COMPANY_FULL}}. Please read this policy carefully before making a purchase or requesting a refund.
      </p>

      <h2>Software Products</h2>
      <p>For software products and licenses purchased from {{COMPANY_FULL}}, the following conditions apply:</p>
      <ul>
        <li>Software products carry a 14-day money-back guarantee from the date of purchase</li>
        <li>Software that has been downloaded, activated, or used may not be eligible for refund</li>
        <li>Custom-developed software is not eligible for refund once development has begun</li>
        <li>Software upgrades, add-ons, and plugins are non-refundable after activation</li>
        <li>Subscription-based software services can be canceled at any time, with prorated refunds for unused periods</li>
      </ul>

      <h2>Professional Services</h2>
      <p>For consulting, implementation, training, and other professional services:</p>
      <ul>
        <li>Scheduled services can be canceled up to 48 hours before the scheduled time for a full refund</li>
        <li>Cancellations within 48 hours of the scheduled service are subject to a 50% cancellation fee</li>
        <li>Services that have been partially or fully delivered are not eligible for refund</li>
        <li>Service packages and retainers may be refunded for the unused portion, less a 10% administration fee</li>
        <li>Project-based services require written cancellation and are subject to billing for work completed</li>
      </ul>

      <h2>Subscription Services</h2>
      <p>For recurring subscription services offered by {{COMPANY_FULL}}:</p>
      <ul>
        <li>Monthly subscriptions can be canceled at any time, effective at the end of the current billing cycle</li>
        <li>Annual subscriptions canceled before the 12-month term is complete are eligible for a prorated refund of unused months, less a 15% early termination fee</li>
        <li>Free trial conversions to paid subscriptions can be canceled within 7 days of the first charge for a full refund</li>
        <li>Service level downgrades will take effect on the next billing cycle with no partial refunds</li>
        <li>Promotional or discounted subscriptions may have different cancellation terms as specified at the time of purchase</li>
      </ul>

      <h2>Custom Development Projects</h2>
      <p>For custom development projects and tailored solutions:</p>
      <ul>
        <li>Deposits for custom development projects are non-refundable once work has begun</li>
        <li>Project cancellations are billed for all work completed up to the cancellation date</li>
        <li>Deliverables that have been approved and accepted are not eligible for refund</li>
        <li>Projects canceled before completion may incur an early termination fee as outlined in the service agreement</li>
        <li>Change requests outside the original scope of work are not grounds for refunds</li>
      </ul>

      <h2>Return Process</h2>
      <p>To initiate a return or request a refund, please follow these steps:</p>
      <ul>
        <li>Contact our team at <a href="mailto:{{EMAIL}}">{{EMAIL}}</a> with your order or project reference and reason for the request</li>
        <li>We will review your request and confirm eligibility based on this policy and any signed service agreement</li>
        <li>Once approved, we will process your refund within 5-7 business days</li>
      </ul>

      <h2>Refund Processing</h2>
      <p>Upon approval of your return request, refunds will be processed as follows:</p>
      <ul>
        <li>Credit card payments will be refunded to the original credit card used for the purchase</li>
        <li>Bank transfers will be refunded to the originating account</li>
        <li>Processing time for refunds typically takes 5-7 business days, but may vary depending on your payment provider</li>
        <li>For purchases made using multiple payment methods, refunds will be processed proportionally to each payment method</li>
      </ul>

      <h2>Exceptions</h2>
      <p>The following exceptions apply to our Return Policy:</p>
      <ul>
        <li>Services marked as 'Final Sale' or 'Non-Refundable' at the time of purchase</li>
        <li>Digital content that has been accessed, downloaded, or streamed</li>
        <li>Services that have been fully rendered or completed</li>
        <li>Products or services purchased during special promotional events may have modified return terms</li>
        <li>Enterprise-level solutions with customized terms as specified in the service agreement</li>
      </ul>

      <h2>Changes to Return Policy</h2>
      <p>
        {{COMPANY_FULL}} reserves the right to modify or update this Return Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our Return Policy, please contact us at:</p>
${contactBlock}
`

const pages = [
  { file: 'privacy-policy.html', title: 'Privacy Policy', body: privacyBody },
  { file: 'terms-and-conditions.html', title: 'Terms and Conditions', body: termsBody },
  { file: 'return-policy.html', title: 'Return Policy', body: returnBody },
]

for (const { file, title, body } of pages) {
  const html = fill(pageShell({ title, body }))
  writeFileSync(join(root, 'public', file), html, 'utf8')
  console.log(`Generated public/${file}`)
}
