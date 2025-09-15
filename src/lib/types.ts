export interface Project {
    title: string;
    description: string;
    image: string;
    fit: boolean;
    fill: boolean;
    tags: string[];
    metrics: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export interface Testimonial {
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
}
