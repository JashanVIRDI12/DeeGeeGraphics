# EmailJS Setup Instructions

The contact form uses EmailJS to send emails. Follow these steps to configure it:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email
5. Copy your **Service ID**

## Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the DeeGee Graphics contact form.
```

4. Make sure to use these variable names:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_email}}`

5. Set the **To Email** field to: `{{to_email}}`
6. Copy your **Template ID**

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key**

## Step 5: Update Configuration
1. Open `src/config/emailjs.config.js`
2. Replace the placeholder values:
   ```javascript
   export const emailjsConfig = {
     serviceID: 'service_xxxxxxx',      // Your Service ID
     templateID: 'template_xxxxxxx',    // Your Template ID
     publicKey: 'xxxxxxxxxxxxxxxx'      // Your Public Key
   }
   ```

## Step 6: Test
1. Fill out the contact form on your website
2. Submit the form
3. Check jashanvirdi12@gmail.com for the email

## Troubleshooting
- Make sure all IDs are correct
- Check the EmailJS dashboard for error logs
- Verify your email service is connected
- Check browser console for errors

## Security Note
The public key is safe to expose in client-side code. EmailJS handles rate limiting and spam protection automatically.
