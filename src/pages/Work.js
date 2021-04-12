import React from 'react'

import irisIcon from '../images/iris_icon.svg'
import cupcakeIcon from '../images/cupcake_icon.svg'
import firesideIcon from '../images/fireside_icon.svg'
import hiveIcon from '../images/hive_icon.svg'
import shieldIcon from '../images/shield_icon.svg'
import puzzleIcon from '../images/puzzle_icon_2.svg'
import LuciusIcon from '../images/lucius_icon.png'
import PortfolioButton from '../components/portfolio-item/PortfolioButton'

const Work = () => {
  return (
    <div className="container full-height work-page">
      <div className="title-container">
        <h1 className="title">Alfonso Martinez</h1>
        <p className="subtitle">
          I create things for the web using <strong>
            <span >HTML</span></strong>, <strong>
            <span>CSS</span>
          </strong>
          , and <strong className="rotating-word">
            <span>Javascript.</span>
            <span>React.</span>
            <span>Firebase.</span>
            <span>Node.js.</span>
            <span>Ruby.</span>
            <span>PostGreSQL.</span>
            <span>Sass.</span>
          </strong>
        </p>
      </div>

      <div className="grid gallery">
        {/* <button className="portfolio-frame">
          <img className="img" src={irisIcon} />
        </button> */}

        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={puzzleIcon} 
            title="Independent Therapist Site"
            description="<p>A website designed and developed for an independent therapist.</p>
              <p>A static site designed in Figma in collaboration with the client, built using React and hosted using Netlify.</p>"
            codeURL="https://github.com/ShrikeFound/react-therapist-site"
            siteURL="https://firesidereactchat.com/signin"
          />
        </div>
      
        

        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={firesideIcon} 
            title="Fireside | Chat App"
            description="<p>A fullstack chatroom app. Users can sign in, create chat rooms, and chat in real time with others.</p>
              <p>I took advantage of Firebase for its storage, hosting, and database. The frontend is presented using React.js and the react framework React Suite. I used Sass for styling.</p>"
            codeURL="https://github.com/ShrikeFound/react-chat"
            siteURL="https://firesidereactchat.com/signin"
          />
        </div>

        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={shieldIcon}
            title="Gwendolyn | Character Tracker"
            description="<p>Gwendolyn is a platform built to help Players create, update, and share their character sheets either publically or to members of their own gaming group. It features an inventory tracking system for easily keeping track of your progress.</p>

<p>Frontend built using HTML, CSS, and Javascript. Backend built using Ruby on Rails and hosted using Heroku & AWS.</p>"
            codeURL="https://github.com/ShrikeFound/mouse-sheet"
            siteURL="https://www.gwendolyn.app/"
            
          />
        </div>

        
        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={irisIcon}
            small={true}
            title="Iris Data Visualization"
            description="<p>An interactive visualization of the Iris Data Set fetched using D3.js and presented using React.js</p>"
            codeURL="https://github.com/ShrikeFound/iris-viz"
            siteURL="https://alfonsomartinez.dev/iris-viz/"
          />
        </div>

        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={cupcakeIcon}
            small={true}
            title="Cupcake | Birthday Tracker"
            description="<p>A birthday tracker to help you remember birthdays. Uses Google authentication, firebase for storage and hosting. Front end built using React.js</p>"
            codeURL="https://github.com/ShrikeFound/birthday-reminder"
            siteURL="https://birthday-reminder-2b6cb.web.app/"
          />
        </div>
        


        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={hiveIcon} 
            title="NYT Bee Solver"
            description="<p>A puzzle solver for the NYT Spelling Bee Game. Acceptable word list fetched using AJAX. Puzzle solved using Javascript and presented using React.js</p>"
            codeURL="https://github.com/ShrikeFound/bee-solver"
            siteURL="https://nytbee.xyz/"
            bottom={true}
          />
        </div>

        
        <div>
          {/* { show,close,image,title,description,codeURL,siteURL } */}
          <PortfolioButton
            icon={LuciusIcon} 
            title="Lucius | Discord Deck Tracker"
            description="<p>
              A web app that keeps track of character skills for use with the Through the Breach RPG. The Bot simulates multiple decks of cards during play and can link with characters
              created through the front end to use their skills.
            </p>  
            <p>
              Bot and Frontend built using Javascript, utilizing Firebase for both authorization and as the backend. 
              the landing page front end was created using React and Bootstrap. It's hosted using Github Pages.
            </p>
            <br/>
            <p>Lucius was drawn by Artist <a href='https://www.instagram.com/p/CNlCcsXjKcY/' target='_blank'>Jonathan Pulido</a></p>

            "
            codeURL="https://github.com/ShrikeFound/lucius-bot"
            siteURL="https://luciusbot.com"
            bottom={true}
          />
        </div>

        
      
      
      

      </div>
      
    </div>
  )
}

export default Work
