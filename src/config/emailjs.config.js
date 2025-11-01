// EmailJS Configuration
// Get your credentials from https://www.emailjs.com/

export const emailjsConfig = {
  serviceID: 'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
  templateID: 'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY'       // Replace with your EmailJS public key
}

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{phone}} - Sender's phone
//    - {{subject}} - Email subject
//    - {{message}} - Message content
//    - {{to_email}} - Your email (jashanvirdi12@gmail.com)
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values above with your actual credentials
