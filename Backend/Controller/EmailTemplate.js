import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hardiktarika34@gmail.com',  // Replace with your Gmail address
      pass: 'jszo znsa cabx pmtx'          // Replace with your Gmail password or App Password
    }
  });

const EmailTemplate=  (formData) => {
  console.log(formData.formData);
  
    const mailOptions = {
        from: 'hardiktarika34@gmail.com',      // Sender's email
        to: 'piyush0516@gmail.com', // Recipient's email
        subject: 'Hey! The new lead is here', // Subject line
        text: `Here's the new lead. Please contact the customer. Details:\nName: ${formData.formData.name}  \n Email: ${formData.formData.email} \n Phone: ${formData.formData.phone} \n Message: ${formData.formData.about}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });

      return formData;
}

export default EmailTemplate;