import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { NextResponse } from "next/server";
const fs = require('fs')
// Ensure the database is connected
const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();
//API endpoint to get all blogs
export async function GET(request) {
    const blogId =request.nextUrl.searchParams.get("id");
    if(blogId){
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    }
    else{
        const blogs= await BlogModel.find({});
        return NextResponse.json({blogs});
    }
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs});
}
//API Endpoint for uploading blogs
export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        // Get image from form data
        const image = formData.get('image');
        if (!image) {
            return NextResponse.json({ success: false, msg: "Image is required" }, { status: 400 });
        }

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        // Ensure the public directory exists
        const publicDir = path.resolve('./public');
        await mkdir(publicDir, { recursive: true });

        // Save the image file
        const imagePath = path.join(publicDir, `${timestamp}_${image.name}`);
        await writeFile(imagePath, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        // Collect blog data
        const blogData = {
            title: formData.get('title') || '',
            description: formData.get('description') || '',
            category: formData.get('category') || '',
            author: formData.get('author') || '',
            image: imgUrl,
            authorImg: formData.get('authorImg') || ''
        };

        // Validate required fields
        if (!blogData.title || !blogData.description || !blogData.category || !blogData.author) {
            return NextResponse.json({ success: false, msg: "Missing required fields" }, { status: 400 });
        }

        // Save blog data to database
        await BlogModel.create(blogData);
        console.log("Blog Saved");

        return NextResponse.json({ success: true, msg: "Blog added" });
    } catch (error) {
        console.error("Error handling POST request:", error);
        return NextResponse.json({ success: false, msg: "An error occurred" }, { status: 500 });
    }
}


//Creating API Endpoint to delete Blog

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`,()=>{});
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Deleted"})
}