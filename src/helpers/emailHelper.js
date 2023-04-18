import nodemailer from "nodemailer";
const emailProcessor = async (emailBody) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail(emailBody);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
};
export const verificationEmail = (emailData) => {
  const emailBody = {
    from: '"PK-ECOM 👻" <pradeepdhital001@gmail.com>', // sender address
    to: `${emailData.email}`, // list of receivers
    subject: "Email verification", // Subject line
    text: `Hello ${emailData.firstName}, please follow the link to verify the email: ${emailData.url}`, // plain text body
    html: `<p>Hi ${emailData.firstName}</p>
      </br>
      </br>
      <p>Please follow the <a href= "${emailData.url}">link</a> to verify your account.
      `,
    };
    emailProcessor(emailBody);
};
