// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

// API endpoints (if needed for future)
export const API_ENDPOINTS = {
  PROJECTS: "/api/projects",
  CONTACT: "/api/contact",
  SKILLS: "/api/skills",
};

// Application settings
export const APP_CONFIG = {
  APP_NAME: "Portfolio",
  APP_DESCRIPTION: "Professional portfolio website",
  AUTHOR: "Ayush Singh",
  CONTACT_EMAIL: "ayushsingh2093@gmail.com",
  GITHUB_URL: "https://github.com/ayush2093",
  LINKEDIN_URL: "https://www.linkedin.com/in/ayush-singh-622951297/",
  TWITTER_URL: "https://x.com/AyushSi70063997",
};

// Toast configuration
export const TOAST_CONFIG = {
  DURATION: 3000,
  POSITION: "bottom-right",
};

// Animation configuration
export const ANIMATION_CONFIG = {
  FADE_IN_DURATION: 0.6,
  STAGGER_DELAY: 0.1,
  SPRING_CONFIG: { type: "spring", stiffness: 300 },
};

// API keys (should be in environment variables)
export const API_KEYS = {
  EMAILJS: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
