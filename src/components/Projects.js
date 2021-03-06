
import React, { useEffect, useState } from "react";
import Project from "./Project";
// import { projects } from "../data";
import './projects.css';
// import axios from 'axios';

const url='http://localhost:4000/images';
export default function Projects() {


  const [image,setImage]=useState([]);

  const fetchImages=async()=>{
      try {
        const res=await fetch(url);
        const image =await res.json();
       setImage(image)
        
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
      fetchImages()
  },[])

  return(
    <Project image={image}/>
  )
}

  // useEffect(()=>{
  // getImages();
  // },[])

  
  // return (
  //   <section id="projects" className="text-gray-400 bg-gray-900 body-font">
  //     <div className="container px-5 py-10 mx-auto text-center lg:px-40">
  //       <div className="flex flex-col w-full mb-20">
  //         <div className="mx-auto inline-block w-10 mb-4" />
  //         <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
  //           Apps I've Built
  //         </h1>
  //         <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
  //           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
  //           facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
  //           fuga dolore.
  //         </p>
         
  //       </div>
  //       {image}
  //       <div className="flex flex-wrap -m-4">
  //         {projects.map((project) => (
  //           <a
  //             href={project.link}
  //             key={project.image}
  //             className="sm:w-1/2 w-100 p-4">
  //             <div className="flex relative">
  //               <img
  //                 alt="gallery"
  //                 className="absolute inset-0 w-full h-full object-cover object-center"
  //                 src={project.image}
  //               />
  //               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
  //                 <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
  //                   {project.subtitle}
  //                 </h2>
  //                 <h1 className="title-font text-lg font-medium text-white mb-3">
  //                   {project.title}
  //                 </h1>
  //                 <p className="leading-relaxed">{project.description}</p>
  //               <div className="btn">
  //               <a
  //               href="https://github.com/alamin133/Todo-list"
  //               className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-sm">
  //               Live project
  //             </a>
  //             <a
  //               href="https://github.com/alamin133/Todo-list"
  //               className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-200 rounded text-sm">
  //               Source code
  //             </a>
  //               </div>
  //               </div>
  //             </div>
  //           </a>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  
          