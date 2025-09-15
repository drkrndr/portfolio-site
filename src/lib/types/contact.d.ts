// Type definitions for contact form
export interface ContactFormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

declare global {
  namespace App {
    interface ContactFormData extends ContactFormData {}
  }
}
