import axios from "axios"
import { useEffect, useState } from "react"
import {Link, useNavigate, useParams } from "react-router-dom"
import { fetchSingleBlog, fetchDeleteBlog} from "../store/blogSlice"
import { useDispatch, useSelector } from "react-redux"

function Singleblog() {
    const data = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {singleBlog:blog} = useSelector((store)=>store.blog)
  
    
    useEffect(()=>{
        dispatch(fetchSingleBlog(data.id))
    },[])

    const deleteBlog = async ()=>{
        dispatch(fetchDeleteBlog(data.id))
        navigate("/")
    }
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">

                    <div className="py-8">
                        <h1 className="text-3xl font-bold mb-2">{blog?.title}</h1>
                        <p className="text-gray-500 text-sm">Published on <time datetime="2022-04-05">April 5, 2022</time></p>
                    </div>

                    <img src={blog?.image} alt="Featured image" className="w-full h-auto mb-8" />

                    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                        <p>{blog?.description}</p>
                        
                    </div>
                </div>
                <div>
                <button onClick={deleteBlog} className='py-2 px-6 bg-black text-white rounded-3xl font-semibold mt-10 ml-[510px]'>Delete Me</button>
                <Link to={`/editform/${data.id}`}>
                <button className='py-2 px-6 bg-black text-white rounded-3xl font-semibold mt-10 ml-[20px]'>Edit Me</button>
                </Link>
                </div>
            </div>
        </>
    )
}
export default Singleblog