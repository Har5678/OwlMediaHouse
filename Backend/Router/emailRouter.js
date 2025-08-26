import express from "express";
import EmailTemplate from "../Controller/EmailTemplate.js";


export const emailRouter= express.Router();

emailRouter.post('/email', (req,res)=>{
    const response=EmailTemplate(req.body);

    return res.json({success: true, message: response})
}); 
 


