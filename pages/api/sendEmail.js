import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "no-reply@retoolbox.xyz", // Your email where you'll receive emails
      from: "no-reply@retoolbox.xyz", // your website email address here
      subject: `Contact Form Submission From ${req.body.subject}`,
      text: `TEXT CONTENT ${req.body.message}`,
      html: `<p>HTML Body message ${req.body.message}</p> <p>HTML PHONE ${req.body.phone}</p><p>HTML EMAIL ${req.body.email}</p>`
    });

    return res.status(200).json({ error: "" });
  } catch (error) {
    console.log(error.response.body);
    return res.status(error.statusCode || 500).json({ error: error.message });
}


}

export default sendEmail;
