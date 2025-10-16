export interface ProjectSection {
    type: 'text-image' | 'image-text' | 'p'
    title: string
    text: string
    image?: string
}