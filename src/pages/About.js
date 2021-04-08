import React from 'react'

const About = () => {
  return (
    <div className="container full-height about-page">
       <div className="title-container">
        <h1 className="title">About Me</h1>
         
      </div>
      <div className="about-section">
      <p className="subtitle">Hey there!
        </p>
        <p>I'm Alfonso, and I'm a web developer based in Southern California. I'm passionate and people-oriented -- I enjoy learning novel techniques and technologies, and I enjoy using them to help people connect and realize their goals. I love back-end development, especially if it involves using Ruby on Rails or PostgreSQL, but I'm also comfortable using front-end tech like React, Bootstrap, and whatever Javascript libraries I can get my hands on.</p>

        <p>When I'm not making things on the internet, I enjoy playing roleplaying games (like Dungeons and Dragons or Dream Askew), reading historical non-fiction books (like Salt: A World History or Fifth Sun), and watching horror movies (Like whatever the newest Ari Aster movie is).</p>

        <p>I’m currently available for full-time or freelance work. Reach out whenever you’d like!</p>

        <p>- Alfonso</p>
        <a href="mail_to:alphaandsew@gmail.com">alphaandsew@gmail.com</a>

        <div className="skills-section">
        <div>
          <h3>Front-End Skills</h3>
          <p>HTML5, CSS3, SCSS, Javascript, React, jQuery, RESTFUL APIs</p>
        </div>

        <div>
          <h3>Back-End Skills</h3>
          <p>Ruby,Rails,Node.js,PostgreSQWL,Firebase,AWS,PHP</p>
        </div>

        <div>
          <h3>Tools</h3>
          <p>VS Code, Git, Github, npm, D3.js, Plotly.js, Webpack</p>
        </div>
      </div>



      </div>
      
    </div>
  )
}

export default About
