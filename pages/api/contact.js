import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const { email, message, fullname } = JSON.parse(req.body)
  const msg = {
    to: 'gonzaleztrapagav@gmail.com',
    from: email,
    subject: 'Portfolio - New Message',
    fullname,
    text: message
  }
  try {
    await sgMail.send(msg)
    res.json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}
