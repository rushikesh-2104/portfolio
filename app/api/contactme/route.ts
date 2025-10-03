import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
 
export async function POST(req:Request){
    try{
        const { name, email , service , message} = await req.json();
        if( !email || !service || !message){
            return NextResponse.json({ok:false , error:"missing fields"}, {status:400})
        }
    





const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port:Number(process.env.SMTP_PORT),
  secure: false, // true for 587, false for other ports
  auth: {
    user: process.env.LOGIN,
    pass: process.env.PASSWORD,
  },
});


  const info = await transporter.sendMail({
    from: '"Rushikesh Mhatre" <rushihatre453@gmail.com>',
    to: email,
    subject: service,
    text: message, // plain‑text body
    html: `<h1>${name}</h1>`, // HTML body
  });
   
  console.log("Message sent:", info.messageId);
  return NextResponse.json({'success':true})

 
}

catch(err){
    console.error(err);
    return NextResponse.json({ok : false, error:"Email failed"},{status:500})
}
}




