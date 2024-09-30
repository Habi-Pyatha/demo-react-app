import React from 'react'
import iconstory from "../assets/icon-story.png"
import longArrowRight from '../assets/long-arrow-right.png'
import MyPost from './Mypost'
function Post() {
  const postItem=[
    {"category":"Mango","description":"It is Green.","date":"July 19, 2020","status":"4 min read"},
    {"category":"Apple","description":"It is Red","date":"July 29, 2020","status":"5 min read"},
    {"category":"Banana","description":"Is is yellow","date":"July 16, 2020","status":"6 min read"},
  ]
    return (
        <>
        <div className="container mx-auto">
        <div className="py-16 lg:py-20">
        <div className="flex items-center pb-6">
      <img src={iconstory} alt="icon story" />
      <h3
        className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white"
      >
        My Story
      </h3>
      <a
        href="/blog"
        className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
      >
        All posts
        <img
          src={longArrowRight}
          className="ml-3"
          alt="arrow right"
        />
      </a>
    </div>
    {postItem.map((item,index)=>(
      <MyPost category={item.category} description={item.description} date={item.date} status={item.status} index={index}/>
    ))}
      
    
      </div>
      </div>
        </>
    )
}

export default Post
