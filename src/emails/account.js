const sgMail=require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'aakashrajdhakal@gmail.com',
        subject:'Thanks for joining!',
        text:`Welcome to the app, name. Let me know how you get along with the app!`
    })
}

const sendCancelationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'aakashrajdhakal@gmail.com',
        subject:'Cancelation done!',
        text:`This is the mail to confirm the mail has been calcenled!,mr ${name}`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}