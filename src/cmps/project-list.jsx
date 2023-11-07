import React from 'react'
import Slider from 'react-slick'
import { ProjectPreview } from './project-preview'

export function ProjectList({ projects }) {

    const settings = {
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
    }

    return (
        <section className='project-list carousel-container'>
            <Slider {...settings}>
                {projects.map(project =>
                    <ProjectPreview key={project._id} project={project} />
                )}
            </Slider>
        </section>
    )
}