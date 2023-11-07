import { MainBanner } from '../cmps/main-banner'
import { About } from '../cmps/about'
import { ProjectIndex } from '../cmps/project-index.jsx'
import { Contact } from '../cmps/contact'

export function HomePage() {

    return (
        <section className='home-page full'>
            <MainBanner />
            <About />
            <ProjectIndex />
            <Contact />
        </section>

    )
}
