export function ProjectPreview({ project }) {

    return (
        <section className="project-preview card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={require("../assets/img/shani-contact.png")} />
        </section>
    )
}