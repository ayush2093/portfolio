// Scroll to element with smooth behavior
export const scrollToElement = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Get tech icon emoji
export const getTechIcon = (techName) => {
  const icons = {
    React: "⚛️",
    JavaScript: "🟨",
    HTML5: "🌐",
    CSS3: "🎨",
    "Tailwind CSS": "💨",
    TypeScript: "🔷",
    "Next.js": "⏭️",
    Jquery: "📜",
    Bootstrap: "👢",
    Redux: "🗂️",
    Figma: "🎛️",
    "Node.js": "🟢",
    Express: "🚂",
    PostgreSQL: "🐘",
    MongoDB: "🍃",
    SQL: "🗃️",
    PHP: "🐘",
    Axios: "📡",
    C: "🔵",
    "C++": "➕",
    Python: "🐍",
    Java: "☕",
    Go: "🐹",
    Git: "📚",
    Docker: "🐳",
    Linux: "🐧",
    AWS: "☁️",
    Jest: "🃏",
    GitHub: "🐙",
  };
  return icons[techName] || "💼";
};

// Validate email
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Format date
export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Copy to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy:", err);
    return false;
  }
};

// Get contrasting text color based on background
export const getContrastColor = (hexColor) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#FFFFFF";
};
