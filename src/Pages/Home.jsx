import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog, setBlog } from "../store/blogSlice";


function Home() {
const dispatch = useDispatch()
const {blogs} = useSelector((store)=>store.blog)

    useEffect(() => {
       dispatch(fetchBlog())
    }, [])
    return (
        <>
            <Banner />
            <div className="flex flex-wrap flex-row ">
                {
                blogs.map(function (blog) {
                    return (
                        <Card blog={blog} />
                    )
                })
                }
            </div>
            <Footer />
        </>
    )
}
export default Home