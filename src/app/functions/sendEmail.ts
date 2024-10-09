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
            html: `
            Your Password: ${password}`,
        });

    } catch {
        return false;
    }

    return true;
}


export const sendWelcomeEmail = ({ receiver, password } : { receiver: string; password : string}) => {
    console.log(receiver);
    console.log(password);
}