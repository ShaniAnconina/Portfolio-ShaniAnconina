import { useEffect, useState } from 'react'
import { projectService } from '../services/project.service'
import { ProjectList } from './project-list'

export function ProjectIndex() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        projectService.query()
            .then((projects => {
                setProjects(projects)
            }))
    }

    if (!projects) return
    return (
        <section id='projects' className='project-index main-layout'>
            <h2>Projects</h2>
            <p className='subtitle'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            <ProjectList projects={projects} />
        </section>
    )
}