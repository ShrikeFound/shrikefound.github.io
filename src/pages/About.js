import React, { useRef } from 'react'

const About = () => {
  const emailRef = useRef();
  const copyRef = useRef();
  console.log("email: ",emailRef.current,"  coppy", copyRef.current)
  
  const copyElementValue = (e) => {
    e.preventDefault()
    console.log(emailRef.current)
  const email = emailRef.current.getAttribute("data-value")
  console.log(email)
  console.log("copying!");
  navigator.clipboard.writeText(email)
  copyRef.current.classList.remove("hidden");
  setTimeout(() => {
    copyRef.current.classList.add("hidden");

  },5000)
}

  return (
    <div className="container full-height about-page">
       <div className="title-container">
        <h1 className="title">About Me</h1>
         
      </div>
      <div className="about-section">
      <p className="subtitle">Hey there!
        </p>
        <p>I'm Alfonso, and I'm a web developer based in Southern California. I'm passionate and people-oriented -- I enjoy learning novel techniques and technologies, and I enjoy using them to help people connect and realize their goals. I love back-end development, especially if it involves using Ruby on Rails or PostgreSQL, but I'm also comfortable using front-end tech like React, Sass, and whatever Javascript libraries I can get my hands on.</p>

        <p>When I'm not making things on the internet, I enjoy playing roleplaying games (like Dungeons and Dragons or Dream Askew), reading historical non-fiction books (like Salt: A World History or Fifth Sun), and watching horror movies (like whatever the newest Ari Aster movie is).</p>

        <p>I’m currently available for full-time or freelance work. Reach out whenever you’d like!</p>

        <p>- Alfonso</p>
        <button className="email-button" data-value="alphaandsew@gmail.com" onClick={(e) => copyElementValue(e)} ref={emailRef}  id="copyElement">alphaandsew@gmail.com<span ref={copyRef} className="copy-message hidden" id="copyMessage">email copied!</span></button>

        <div className="skills-section">
        <div>
          <h3>Front-End Skills</h3>
          <p>HTML5, CSS3, SCSS, Javascript, React, jQuery, RESTFUL APIs</p>
        </div>

        <div>
          <h3>Back-End Skills</h3>
          <p>Ruby, Rails, Node.js, PostgreSQWL, Firebase, AWS, PHP</p>
        </div>

        <div>
          <h3>Tools</h3>
          <p>Figma, Adobe Illustrator, D3.js, VS Code, Git, Github, npm, Plotly.js, Webpack</p>
        </div>
      </div>



      </div>
      
    </div>
  )
}

export default About
