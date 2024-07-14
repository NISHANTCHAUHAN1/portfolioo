import React from 'react'
import './project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pinao from '../../assets/pinao.png';
import todo from '../../assets/todo.png';
import ecom from '../../assets/ecom.png';
import blogweb from '../../assets/blogweb.png';

export const data=[
    {
        id:1,
        title:"This is a project made to learn about the javascript by building an app.",
        image:ecom,
        github:"https://github.com/NISHANTCHAUHAN1/ecom-fullstack-Web",
        live:"https://ecom-fullstack-web-blond.vercel.app/",
    },
    {
        id:2,
        title:"This is a project made to learn about how Local storage work in javascript by building an app.",
        image:blogweb,
        github:"https://github.com/NISHANTCHAUHAN1/FullStackBlogWeb",
        live:"https://nishblogweb.netlify.app/",
    },
    {
        id:3,
        title:"This is a project made to learn about the React by building an app.",
        image:todo,
        github:"https://github.com/NISHANTCHAUHAN1/Todo2",
        live:"https://todo2-chi.vercel.app",
    },
    {
        id:4,
        title:"This is a project made to learn about the javascript by building an app.",
        image:pinao,
        github:"https://github.com/NISHANTCHAUHAN1/Pinao",
        live:"https://pinao-pied.vercel.app/",
    },
    
]

const Project = () => {
  const mywork = data;
  return (
    <div id='project' className='project'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {data.map(({id, image,github, live,title }) => {
          return (
            <article key={id} className='portfolio-item'>
            <div className="portfolio_item-image">
              <img src={image} alt="" />
            </div>
            <h3>this is a portfolio title</h3>
            <div className='btns'>
            <a href={github} className='btn' target='blank'>Github</a>
            <a href={live} className='btn btn-pirmary' target='blank'>Live Demo</a>
            </div>
          </article>
          )
        })}
      </div>
    </div>
  )
}

export default Project
