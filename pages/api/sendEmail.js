import sendgrid from "@sendgrid/mail";
const client = require('@sendgrid/client');
import axios from 'axios';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "retoolbox@retoolbox.xyz", // Your email where you'll receive emails
      from: "no-reply@retoolbox.xyz", // your website email address here
      subject: `Contact Form Submission From ${req.body.first_name} ${req.body.last_name}`,
      text: `New Contact Form Submission from ${req.body.first_name} ${req.body.last_name}\n\n Name:  ${req.body.first_name} ${req.body.last_name}\n\n Phone ${req.body.phone_number}\n\n Email ${req.body.email}\n\n Message: ${req.body.message}\n\n\n`,
      html: `<p>Name: ${req.body.first_name} ${req.body.last_name}</p><p>Phone: ${req.body.phone_number}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.message}</p> `
    });

    // Add entry into sendgrid global contact list after sending the email
    const request = {
      url: `https://api.sendgrid.com/v3/marketing/contacts`,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({"contacts": [{ 
       first_name: `${req.body.first_name}`,
       last_name: `${req.body.last_name}`,
       email: `${req.body.email}`, phone_number: `${req.body.phone_number}`,
       contactmsg: `${req.body.message}` 
        }]} ),
    };

    /* console.log(request), */

    axios(request)
      .then(response => {
        console.log(response.status);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    return res.status(200).json({ error: "" });
    
  } catch (error) {
    console.log(error.response.body);
    return res.status(error.statusCode || 500).json({ error: error.message });
}


}

export default sendEmail;
