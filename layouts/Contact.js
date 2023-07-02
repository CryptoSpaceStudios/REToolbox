import React, { useEffect, useState } from "react";
import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { black, green, blueGrey, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const onSubmit = async (data) => {
    console.log('Form submitted with data:', data);
  
    const response = await fetch('./api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
  
    console.log('the response is', response);

    if (response.ok) {
      // handle successful email sending
      console.log('Email sent successfully');
    } else {
      // handle error
      console.error('Error sending email');
      response.json().then(data => console.log(data));
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
          {markdownify(title, "h1", "text-center font-normal")}
          {markdownify(info.title, "h4", "mt-6")}
          {markdownify(info.description, "p", "mt-4")}
        </div>
      </section>
      <Card className="mb-8" sx={{ 
        width: '50%', 
        minWidth: '335px', 
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 1)' // Apply drop shadow
      }}>
        <CardContent>
          <form
            className="contact-form"
            method="POST"
            action={contact_form_action}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-3">
              <input
                {...register("name", { required: "Name is required" })}
                className="form-input w-full rounded"
                type="text"
                placeholder="Name"
              />
              {errors.name && <p>{errors.name.message}</p>}
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
                {...register("phone", { required: "Phone number is required" })}
                className="form-input w-full rounded"
                type="phone"
                placeholder="Phone Number"
              />
              {errors.phone && <p>{errors.phone.message}</p>}
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