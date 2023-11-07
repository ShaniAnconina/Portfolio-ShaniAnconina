
export function About() {

    return (
        <section id='about' className='about main-layout'>
            <h2>About me</h2>
            <p className="subtitle">Here you will find more information about me, what I do, and my current skills mostly<br />in terms of programming and technology</p>
            <div className="about-container">
                <div className='me'>
                    <h3>Get to know me!</h3>
                    <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product.
                        Check out some of my work in the Projects section.
                        I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.
                        Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                        I'm open to Job opportunities where I can contribute, learn and grow.
                        If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    <a href='#contact'><button>Contact</button></a>
                </div>
                <div className='skills'>
                    <h3>Dev Skills</h3>
                    <div className='dev-skills'>
                        <div className='skill'>HTML</div>
                        <div className='skill'>CSS</div>
                        <div className='skill'>SASS</div>
                        <div className='skill'>JavaScript</div>
                        <div className='skill'>React</div>
                        <div className='skill'>Vue</div>
                        <div className='skill'>Angular</div>
                        <div className='skill'>Express</div>
                        <div className='skill'>Node.js</div>
                        <div className='skill'>MongoDB</div>
                        <div className='skill'>Redux</div>
                        <div className='skill'>GIT</div>
                        <div className='skill'>TypeScript</div>
                        <div className='skill'>REST API</div>
                        <div className='skill'>Postman</div>
                    </div>
                    <h3>Other Skills</h3>
                    <div className='dev-skills'>
                        <div className='skill'>Wordpress</div>
                        <div className='skill'>Project Management</div>
                        <div className='skill'>XD</div>
                        <div className='skill'>Photoshop</div>
                        <div className='skill'>Illustrator</div>
                        <div className='skill'>SEO</div>
                        <div className='skill'>PPC</div>
                    </div>
                </div>
            </div>
        </section>
    )
}