import express from "express";
import { addBlogs, ListBlogs } from "../Controller/BlogsController.js";
import upload from "../Middleware/Multer.js";



export const blogsRouter=express.Router();

blogsRouter.post("/add",upload.single("image"),addBlogs);
blogsRouter.get("/list",ListBlogs);





