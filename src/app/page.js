import axiosInstance from "@/axios";
import Article from "@/components/article";
import Category from "@/components/category";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

async function fetchBlogs() {
  try {
    const res = await axiosInstance.get("/entries", { params: { include: 2 } });
    return { items: res.data.items, assets: res.data.includes.Asset };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default async function Home() {
  const { items: blogsData, assets } = await fetchBlogs();
  const blogList = blogsData.map((blog) => blog.fields);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Category></Category>
      <Article></Article>
    </>
  );
}
