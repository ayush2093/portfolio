# Development Guidelines

## Code Style Guide

### JavaScript/JSX

#### Imports
```javascript
// ✅ Good: Organized imports
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToElement } from "@/utils/helpers";
import { NAV_LINKS } from "@/constants";
```

#### Components
```javascript
// ✅ Good: Functional component
const MyComponent = ({ prop1, prop2 }) => {
  const [state, setState] = useState(null);

  return (
    <div className="flex items-center">
      {/* Content */}
    </div>
  );
};

export default MyComponent;
```

#### Styling
```javascript
// ✅ Good: Use Tailwind classes
<div className="flex items-center justify-between gap-4 px-4 py-2">

// ❌ Avoid: Inline styles
<div style={{display: 'flex', alignItems: 'center'}}>

// ✅ Good: Use cn() for conditional classes
<button className={cn("px-4 py-2", isActive && "bg-primary")}>
```

### File Naming

```
Components: PascalCase
  ✅ Hero.jsx, Contact.jsx, Navbar.jsx

Utilities: camelCase or kebab-case
  ✅ helpers.js, scrollToElement.js

Constants: UPPER_SNAKE_CASE (in files)
  ✅ const NAV_LINKS = [], const SKILL_CATEGORIES = {}
```

## Component Standards

### Component Template
```javascript
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/utils/helpers";
import { NAV_LINKS } from "@/constants";

const MyComponent = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Setup effect
    return () => {
      // Cleanup
    };
  }, []);

  const handleClick = () => {
    // Handler logic
  };

  return (
    <section className="py-20">
      <h2>{title}</h2>
      <Button onClick={handleClick}>Click Me</Button>
    </section>
  );
};

export default MyComponent;
```

### Props Pattern
```javascript
// ✅ Good: Destructure props
const Card = ({ title, description, image }) => {
  return <div>{title}</div>;
};

// ❌ Avoid: Spreading all props
const Card = (props) => {
  return <div>{props.title}</div>;
};
```

## Tailwind CSS Best Practices

### Responsive Design
```javascript
// ✅ Good: Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">

// ✅ Good: Responsive padding/margin
<div className="px-4 md:px-6 lg:px-8">

// ✅ Good: Grid responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Organizing Classes
```javascript
// ✅ Good: Group related utilities
className="
  flex items-center justify-between
  gap-4 px-4 py-2
  bg-primary text-white
  rounded-lg border border-primary/20
  hover:bg-primary/90 transition-colors
  disabled:opacity-50 disabled:cursor-not-allowed
"
```

## React Best Practices

### Hooks
```javascript
// ✅ Good: Use custom hooks for reusable logic
const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return scrollY;
};

// ✅ Use custom hooks
const MyComponent = () => {
  const scrollY = useScroll();
  return <div style={{ opacity: 1 - scrollY / 100 }}>
};
```

### State Management
```javascript
// ✅ Good: Use constants for state values
const STATES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
};

const [status, setStatus] = useState(STATES.IDLE);

// ❌ Avoid: Magic strings
const [status, setStatus] = useState("idle");
```

### Performance
```javascript
// ✅ Good: Memoize expensive components
import { memo } from "react";
const ExpensiveComponent = memo(({ data }) => {
  return <div>{data}</div>;
});

// ✅ Good: useCallback for event handlers
const handleClick = useCallback(() => {
  // Handler logic
}, [dependency]);
```

## Forms

### Form Validation
```javascript
import { validateEmail } from "@/utils/helpers";

const validateForm = (data) => {
  const errors = {};
  
  if (!data.name.trim()) {
    errors.name = "Name is required";
  }
  
  if (!validateEmail(data.email)) {
    errors.email = "Invalid email";
  }
  
  return errors;
};
```

### Form Structure
```javascript
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Submit logic
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
};
```

## Common Patterns

### Conditional Rendering
```javascript
// ✅ Good: Ternary for simple conditions
{isLoading ? <Spinner /> : <Content />}

// ✅ Good: && for single element
{hasError && <ErrorMessage />}

// ✅ Good: Switch for multiple conditions
{(() => {
  switch(status) {
    case "loading": return <Spinner />;
    case "error": return <Error />;
    default: return <Content />;
  }
})()}
```

### List Rendering
```javascript
// ✅ Good: Always use key prop
{items.map(item => (
  <div key={item.id} className="...">
    {item.name}
  </div>
))}

// ❌ Avoid: Using index as key
{items.map((item, index) => (
  <div key={index}>  // Bad for reorderable lists
    {item.name}
  </div>
))}
```

## Testing Guidelines (Future)

```javascript
// Component with testable logic
const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span data-testid="count">{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
```

## Accessibility Checklist

- [ ] Semantic HTML (section, article, nav, etc.)
- [ ] ARIA labels for icon buttons
- [ ] Keyboard navigation support
- [ ] Focus indicators visible
- [ ] Color contrast ratios > 4.5:1
- [ ] Alt text for images
- [ ] Form labels connected to inputs

```javascript
// ✅ Good: Accessible button
<button
  aria-label="Close menu"
  onClick={handleClose}
  className="focus:outline-none focus:ring-2 focus:ring-primary"
>
  <X className="w-5 h-5" />
</button>
```

## Environment Setup

### Required Environment Variables
Create `.env.local` with:
```
VITE_EMAILJS_SERVICE_ID=your_id
VITE_EMAILJS_TEMPLATE_ID=your_id
VITE_EMAILJS_PUBLIC_KEY=your_key
```

## Commit Message Convention

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Code style changes
refactor: Refactor code
perf: Performance improvement
test: Add tests
chore: Update dependencies
```

Example:
```
feat: Add animated skills section with framer motion
fix: Fix image paths in components
docs: Update project structure documentation
```

## Pull Request Checklist

- [ ] Code follows style guide
- [ ] Components are reusable
- [ ] No console errors/warnings
- [ ] Responsive design tested
- [ ] Accessibility checked
- [ ] Documentation updated
- [ ] Related issues linked

