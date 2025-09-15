// Type definitions for Testimonial
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

declare global {
  namespace App {
    interface Testimonial extends Testimonial {}
  }
}
