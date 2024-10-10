import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    service: process.env.SENDER_EMAIL_SERVICE,
    auth: {
        user: process.env.SENDER_EMAIL_ADDRESS,
        pass: process.env.SENDER_EMAIL_PASS
    },
});

export const sendPasswordEmail : ({ receiver, password } : { receiver: string; password : string}) => Promise<boolean>
= async ({ receiver, password } : { receiver: string; password : string}) => {
    
    try {
        await transport.verify();
    } catch (error) {
        console.log(error);
        return false;
    }

    try {
        await transport.sendMail({
            from: process.env.SENDER_EMAIL_SERVICE,
            to: receiver,
            subject: "Your Iztech Software Society Password",
            // html: `
            // Your Password: ${password}`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>İYTE Yazılım Topluluğu</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border: 1px solid #ddd;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #f56f00;
      color: white;
      padding: 10px;
      text-align: center;
    }
    .content {
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      color: #777;
      font-size: 12px;
    }
    .button {
      background-color: #f56f00;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <p>Your Password</p>
    <div class="header">
      <h1>${password}</h1>
    </div>
    <div class="content">
      <p>Hello,</p>
      <p>Don't worry! Only you know your password, it is hashed in our database. You can update your password from the link below.</p>
      <a href="#" class="button">Change Society Password</a>
    </div>
    <div class="footer">
      <p>&copy; 2024 @ İYTE Yazılım Topluluğu. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`
        });

    } catch {
        return false;
    }

    return true;
}


export const sendWelcomeEmail : ({ receiver, name } : { receiver: string; name: string }) => Promise<boolean> = async ({ receiver, name } : { receiver: string; name: string }) => {
    try {
        await transport.verify();
    } catch (error) {
        console.log(error);
        return false;
    }

    try {
        await transport.sendMail({
            from: process.env.SENDER_EMAIL_SERVICE,
            to: receiver,
            subject: "Welcome to Iztech Software Society",
            // html: `
            // Your Password: ${password}`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>İYTE Yazılım Topluluğu</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border: 1px solid #ddd;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #f56f00;
      color: white;
      padding: 10px;
      text-align: center;
    }
    .content {
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      color: #777;
      font-size: 12px;
    }
    .button {
      background-color: #f56f00;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Welcome to Our Society</h1>
    </div>
    <div class="content">
      <p>Hello ${name},</p>
      <p>Thank you for joining our society. We are excited to have you on board!</p>
      <p>Follow Us</p>
      <a href="https://www.instagram.com/iyte_yazilim/" class="button">Instagram</a>
      <a href="https://www.linkedin.com/company/iyteyazilim/" class="button">Linkedin</a>
      <a href="https://github.com/IYTE-Yazilim-Toplulugu" class="button">Github</a>
    </div>
    <div class="footer">
      <p>&copy; 2024 @ İYTE Yazılım Topluluğu. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`
        });

    } catch {
        return false;
    }

    return true;
}