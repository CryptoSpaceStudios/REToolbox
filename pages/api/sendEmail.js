import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

console.log('SENDGRID KEY:', process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const { name, email, phone, subject, message } = req.body;

    const content = {
      to: 'retoolbox@retoolbox.xyz', // replace with your email
      from: email,
      subject: `New Message From ${name} - ${subject} - ${phone}`,
      text: message,
      html: `<p>${message}</p>`
    };


    try {
      await sgMail.send(content);
      res.status(200).send('Message sent successfully.');
    } catch (error) {
      console.log('ERROR', error);
      res.status(400).send('Message not sent.');
    }
  } else {
    res.status(404).json({ error: 'Invalid request method' });
  }
}
