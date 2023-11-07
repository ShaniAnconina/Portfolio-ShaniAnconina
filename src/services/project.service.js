import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"

const PROJECT_KEY = 'projectDB'
_createProjects()

export const projectService = {
    query,
}

function query() {
    return storageService.query(PROJECT_KEY)
}

function getEmptyProject(title, description) {
    return {
        title,
        description
    }
}

function _createProjects() {
    let projects = utilService.loadFromStorage(PROJECT_KEY)
    if (!projects || !projects.length) {
        projects = []
        projects.push(_createProject('Undefineder - Fiver clone', 'From now on'))
        projects.push(_createProject('Soundify - Spotify clone', 'From now on'))
        projects.push(_createProject('Welcome to flaticon', 'From now on'))
        projects.push(_createProject('Undefineder - Fiver clone', 'From now on'))
        projects.push(_createProject('Soundify - Spotify clone', 'From now on'))
        projects.push(_createProject('Welcome to flaticon', 'From now on'))

        utilService.saveToStorage(PROJECT_KEY, projects)
    }
}

function _createProject(title, description) {
    const project = getEmptyProject(title, description)
    project.id = utilService.makeId()
    return project
}