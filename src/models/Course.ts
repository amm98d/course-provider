export class Course{
    id: number
    title: string
    category: string
    level: number
    language: string
    rating: number
    imagePath: string
    intro?: string
    instructor?: string
    outline?: string
    prerequisites?: string
    numLectures?: number
    hours?: number
    quizzes?: number
    exercises?: number
    price?: string
    discount?: string
    dateAdded?: Date
    numRatings?: string
}