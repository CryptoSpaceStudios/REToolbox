import React from "react";

import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { green, blueGrey, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSubmit = async (event) => {
    event.preventDefault();

    // get form values
    const { first_name, last_name, email, phone_number, subject, message } = getValues();
  
    const data = JSON.stringify({ first_name, last_name, email, phone_number, subject, message });
    /* console.log('The Form Data is ', data); */
  
    // send form data to /api/sendEmail
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: data,
    });

    if (response.ok) {
      console.log('Email sent successfully');
      
    } else {
      console.error('Error sending email');
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const errorData = await response.json();
        console.error(errorData);
      } else {
        const errorText = await response.text();
        console.error(errorText);
      }
    }
  };

  const ContactButton = styled(Button) ({
    backgroundColor: blueGrey[500],
    fontWeight: '600',
    color: grey[900],
    '&:hover': {
      backgroundColor: green[300],
      fontWeight: '900',
    },
  });

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100%"  // Adjust as needed
    >
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal dark:text-contrast light:text-dark")}
          {markdownify(info.title, "h4", "mt-6 dark:text-contrast light:text-dark")}
          {markdownify(info.description, "p", "mt-4 dark:text-contrast light:text-dark")}
        </div>
      </section>
      <Card className="mb-8 dark:bg-light light:bg-dark" sx={{ 
        width: '50%', 
        minWidth: '335px', 
        boxShadow: '0 0 10px rgba(0, 0, 0, 1)', 
        borderRadius: '16px' // Apply drop shadow
      }}>
        <CardContent>
          <form
            className="contact-form dark:text-contrast light:text-dark"
            onSubmit={onSubmit}
          >
            <div className="mb-3">
              <input
                {...register("first_name", { required: "First Name is required" })}
                className="form-input w-full rounded"
                type="text"
                placeholder="First Name"
              />
              {errors.name && <p>{errors.first_name.message}</p>}
            </div>
            <div className="mb-3">
              <input
                {...register("last_name", { required: "Last Name is required" })}
                className="form-input w-full rounded"
                type="text"
                placeholder="Last Name"
              />
              {errors.name && <p>{errors.last_name.message}</p>}
            </div>
            <div className="mb-3">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email is not valid"
                  }
                })}
                className="form-input w-full rounded"
                type="email"
                placeholder="Your email"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="mb-3">
              <input
                {...register("phone_number", { required: "Phone number is required" })}
                className="form-input w-full rounded"
                type="phone_number"
                placeholder="Phone Number"
              />
              {errors.phone_number && <p>{errors.phone_number.message}</p>}
            </div>
            <div className="mb-3">
              <input
                {...register("subject", { required: "Subject is required" })}
                className="form-input w-full rounded"
                type="text"
                placeholder="Subject"
              />
              {errors.subject && <p>{errors.subject.message}</p>}
            </div>
            <div className="mb-3">
              <textarea
                {...register("message", { 
                  required: "Message is required", 
                  minLength: {
                    value: 20,
                    message: "Message must be at least 20 characters"
                  }
                })}
                className="form-textarea w-full rounded-md"
                rows="5"
                placeholder="Your message"
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>

            <Box display="flex" justifyContent="center" mt={6} mb={4}>
              <ContactButton variant="contained" type="submit" color="success" endIcon={<SendIcon />} >
                Send Now
              </ContactButton>
            </Box>
          </form>
        </CardContent>
      </Card>      
    </Box>
  );
};

export default Contact;
