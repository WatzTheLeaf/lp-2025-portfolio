import type { ProjectSection } from "./project-section"

export interface ProjectItem {
    image: string
    category: string
    title: string
    buttonText: string
    keypoints: string[]
    sections: ProjectSection[]
    role: string
    linktext: string
    link: string
}