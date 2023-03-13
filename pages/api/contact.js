import sgMail from '@sendgrid/mail'
const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

export default async function handler(req, res) {
  const { fullname, email, message } = req.body

  const msg = {
    to: 'valentingt22@gmail.com',
    from: 'gonzaleztrapagav@gmail.com',
    subject: `Portfolio - New Message - ${email}`,
    text: `- Name: ${fullname} - ContactEmail: ${email} -
    Message: ${message}`
  }

  try {
    await sgMail.send(msg)
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
  return res.status(200).json({ error: '' })
}
