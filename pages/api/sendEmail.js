import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "retoolbox@retoolbox.zyz", // Your email where you'll receive emails
      from: "youremail@gmail.com", // your website email address here
      subject: `[Lead from website] : ${req.body.subject}`,
      text: req.body.message,
      html: `<p>${req.body.message}</p>`
    });

    return res.status(200).json({ error: "" });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
