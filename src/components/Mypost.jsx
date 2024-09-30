import React from 'react'
import iconstory from "../assets/icon-story.png"
import longArrowRight from '../assets/long-arrow-right.png'
// import Post from './Post'
function MyPost({category,description,date,status}) {
 
    return (
        <>
        
    
    <div className="pt-8">
      <div className="border-b border-grey-lighter pb-8">
        <span
          className="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green"
          >{category}</span
        >
        <a
          href="/post"
          className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
          >{description}</a
        >
        <div className="flex items-center pt-4">
          <p className="pr-2 font-body font-light text-primary dark:text-white">
            {date}
          </p>
          <span className="font-body text-grey dark:text-white">//</span>
          <p className="pl-2 font-body font-light text-primary dark:text-white">
            {status}
          </p>
        </div>
      </div>
      
    </div>
  

  
        </>
    )
}

export default MyPost

