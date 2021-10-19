import React from 'react';
import './project.css'
import ProjectList from './ProjectList';

export default function Project({image}) {
    return (
       <section>
           <div className="title">
               <h2>My images</h2>
               </div>
               <div>
               {image.map((item)=>{
                   return(
                      <ProjectList key={item.id}{...item}/> 
                       
                   )
               }
                
               )}
           </div>
       </section>
    )
}
