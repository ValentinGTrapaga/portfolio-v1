import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  console.log(req.body)
  const { fullname, email, message } = req.body

  const msg = {
    to: 'valentingt22@gmail.com',
    from: 'gonzaleztrapagav@gmail.com',
    subject: `Portfolio - New Message`,
    text: `- Name: ${fullname} - ContactEmail: ${email} -
    Message: ${message}`
  }
  sgMail
    .send(msg)
    .then(console.log('Message sent'))
    .catch((error) => {
      res.status(500).json({ error: 'Error sending email' })
    })
}
