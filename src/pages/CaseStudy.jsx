import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  LayoutDashboard,
  Rocket,
  Server,
  Shield,
  Wrench,
} from "lucide-react";

const CASE_STUDIES = {
  shoecraftify: {
    title: "ShoeCraftify",
    subtitle: "Frontend-heavy React SPA with 3D customization, AI generation, and checkout",
    summary:
      "A Vite-powered React SPA that enables users to discover, design, save, and purchase custom footwear through manual 3D editing and AI-assisted generation.",
    role: "Frontend-Focused Full Stack Developer",
    duration: "8+ Weeks",
    deliverable: "SPA + API-Integrated Commerce Experience",
    status: "Live",
    liveUrl: "https://www.ramkumar.app/",
    codeUrl: "https://github.com/ramkumar-lpu/ShoeCraftify",
    architecture: [
      {
        label: "Entry and App Shell",
        value: "main.jsx bootstraps BrowserRouter + App shell composition",
        details:
          "The app starts in a Vite React entry, then composes CartProvider, Navbar, routes, and Footer in a shared shell. Axios is globally configured for cookie-based auth and centralized API base URL handling.",
        highlights: ["Vite + SPA bootstrap", "Shared global shell", "Central axios config"],
      },
      {
        label: "Routing and Access Control",
        value: "Lazy-loaded route map with guarded pages",
        details:
          "Routes are organized in a central map with retry-based lazy loading for performance. Protected areas such as Designer and Cart redirect unauthenticated users to login.",
        highlights: ["Route-level code splitting", "Auth-protected routes", "Retry lazy loading"],
      },
      {
        label: "State and Persistence",
        value: "Cart Context + localStorage + IndexedDB",
        details:
          "Global cart state is managed through React Context and persisted in localStorage. IndexedDB adds richer local persistence for user, design, and cache stores to improve resilience across reloads and unstable network conditions.",
        highlights: ["React Context cart", "localStorage resilience", "IndexedDB local-first data"],
      },
      {
        label: "External Services and APIs",
        value: "Auth, AI generation, design sync, and Razorpay payment flow",
        details:
          "The app integrates login/register/google auth, profile updates, prompt-to-shoe AI generation, cloud design CRUD, Razorpay order creation/verification, and backend order placement from cart.",
        highlights: ["Auth + profile APIs", "AI prompt generation", "Razorpay checkout"],
      },
      {
        label: "UI and Interaction Stack",
        value: "Tailwind UI + Framer Motion + React Three Fiber",
        details:
          "Styling is Tailwind-based, major screens include Framer Motion interactions, and the shoe configurator uses React Three Fiber + Drei for real-time 3D rendering.",
        highlights: ["Tailwind CSS", "Framer Motion", "React Three Fiber + Drei"],
      },
    ],
    coreFunctionality: [
      "User authentication and session-aware navigation with email/password + Google OAuth",
      "Protected routes for profile, design studio, AI suggestions, my designs, and cart",
      "3D shoe customization for body, sole, laces, and logo with live preview capture",
      "AI-assisted design generation with prompt-based image generation, rating, and saving",
      "Design lifecycle management that merges cloud + local designs with edit/delete/download/cart actions",
      "Cart and checkout flow with persistence, totals, tax/shipping, Razorpay verification, and backend order placement",
      "Profile and account management including edits, password updates, and profile image upload",
    ],
    challenges: [
      {
        challenge: "Keeping customization interactions smooth on low-end devices",
        solution:
          "Reduced render-heavy operations and split visual updates so user interactions remain responsive.",
      },
      {
        challenge: "Maintaining visual consistency across different viewport sizes",
        solution:
          "Created layout breakpoints and fallback UI behaviors for compact displays.",
      },
    ],
    outcomeGroups: [
      {
        title: "End-user outcomes",
        items: [
          "Complete custom footwear journey: discover, design (manual or AI), save, and buy",
          "Strong continuity with persisted cart/design data across refresh and interruptions",
          "Faster perceived UX through lazy loading, local cache use, and optimistic local saves",
        ],
      },
      {
        title: "Product/business outcomes",
        items: [
          "Higher engagement through two creation paths: 3D studio and AI prompt generation",
          "Better conversion potential via direct cart flow from saved design artifacts",
          "Reduced drop-off risk with local-first persistence and session-aware fallbacks",
        ],
      },
      {
        title: "Technical outcomes",
        items: [
          "Clear separation of concerns across routing/auth, domain pages, shared cart context, and storage utilities",
          "Hybrid persistence architecture using localStorage + IndexedDB + backend APIs for robustness",
          "Extensible module boundaries for additional design types, payment methods, and profile capabilities",
        ],
      },
    ],
    outcomes: [
      "Delivered a robust architecture with layered persistence and API integration",
      "Improved system resilience and user continuity for commerce-centric flows",
      "Established extensible foundations for future product evolution",
    ],
    learned: [
      "Strong UI systems need both visual quality and performance discipline",
      "Component-driven architecture speeds up iteration for design-heavy products",
    ],
  },
  cleanstreet: {
    title: "Clean-Street",
    subtitle: "One React frontend + one API backend serving three subdomain portals",
    summary:
      "A role-driven civic platform where one SPA behaves like three products (main/admin/volunteer) through hostname context switching. Backend internals are represented from frontend API contracts and integration behavior.",
    role: "Full Stack Developer",
    duration: "12+ Weeks",
    deliverable: "Role-based Multi-Portal Civic Platform",
    status: "Live",
    liveUrl: "https://infosys.ramkumar.app/",
    adminUrl: "https://infosys.ramkumar.app/admin",
    volunteerUrl: "https://infosys.ramkumar.app/volunteer/login",
    codeUrl: "https://github.com/Ram9219/CleanStreet",
    architecture: [
      {
        label: "Frontend Layer",
        value: "React + Vite SPA with lazy routes, MUI UI system, and motion effects",
        details:
          "The app boots once, then mounts role-specific route trees with suspense/lazy loading. Shared UI patterns and animation are reused across dashboard and workflow modules.",
        highlights: ["Single SPA entry", "Route-level lazy loading", "MUI + Framer Motion"],
      },
      {
        label: "Identity and Access Layer",
        value: "Central auth context + protected route guards + credentialed API client",
        details:
          "Session state is centralized and route protection supports both role checks and volunteer verification checks. API calls use cookies/credentials for stable authenticated sessions.",
        highlights: ["Role-aware route guard", "Verification-aware access", "withCredentials session flow"],
      },
      {
        label: "Multi-Subdomain Routing Layer",
        value: "Hostname detection + scoped URL generation + path-prefixed fallback mode",
        details:
          "Routing context is derived from host and can fall back to path modes like /admin and /volunteer in local/dev setups. Scoped navigation helpers keep users inside the correct portal.",
        highlights: ["Host-based context switch", "Scoped path generation", "Dev/prod routing compatibility"],
      },
      {
        label: "Setup and Initialization Layer",
        value: "System readiness gate + setup wizard orchestration",
        details:
          "Before normal portal access, setup checks ensure database readiness and super-admin creation flows are complete. This prevents early-route traps in uninitialized deployments.",
        highlights: ["Setup gate checks", "DB readiness path", "Controlled first-run bootstrap"],
      },
      {
        label: "Data/Service and Runtime Layer",
        value: "REST service integration + env-driven API/subdomain runtime config",
        details:
          "Frontend consumes auth, reports, admin, volunteers, and notifications APIs using env-based base URL. Vite dev proxy and SPA rewrite/runtime subdomain env vars keep behavior stable across local and production.",
        highlights: ["Shared /api contracts", "VITE_API_URL + proxy", "SPA rewrite + env URLs"],
      },
      {
        label: "Backend Domain Layer (Inferred)",
        value: "Modular Express routes + MongoDB model separation",
        details:
          "From frontend contracts, backend responsibilities are cleanly segmented into auth, admin, volunteers, reports/community, notifications, and setup modules backed by role-oriented data models.",
        highlights: ["Modular route boundaries", "Role-aware business rules", "Maintainable domain split"],
      },
    ],
    coreFunctionality: [
      "Citizen portal: issue reporting with media + geolocation, community feed, personal dashboard, map/history/analytics",
      "Admin portal: setup-aware login, governance dashboard, report supervision, user management, volunteer approvals, admin permission controls",
      "Volunteer portal: verification-gated access, profile/tier flows, event discovery/registration/creation, report action updates",
      "Authentication lifecycle: auth/me session check, role-aware redirects, forced password-change path for admins when required",
      "Setup lifecycle: readiness checks, DB test, super-admin creation, and configuration workflow before platform activation",
      "Navigation and routing continuity: scoped links preserve portal context and avoid cross-scope route collisions",
      "Session continuity: cookie credentials reused across requests with centralized auth provider",
    ],
    challenges: [
      {
        challenge: "Context-aware navigation conflicts across portals",
        solution:
          "Centralized scoped path generation to ensure same-looking routes resolve correctly under main/admin/volunteer contexts.",
      },
      {
        challenge: "Auth/session continuity across contexts",
        solution:
          "Used shared credential strategy with withCredentials plus centralized auth state management to keep session behavior consistent.",
      },
      {
        challenge: "Guarding by role and verification state",
        solution:
          "Implemented layered route protection that checks role eligibility and volunteer verification status before granting access.",
      },
      {
        challenge: "Setup-phase routing traps",
        solution:
          "Added setup redirect gating with status checks so uninitialized systems route into setup wizard instead of normal portal screens.",
      },
      {
        challenge: "Local development complexity for subdomains",
        solution:
          "Aligned localhost hostnames, env URL overrides, and Vite proxy behavior to mimic production subdomain flow during development.",
      },
      {
        challenge: "Secure first-time setup and admin bootstrap",
        solution:
          "Designed setup lifecycle checks and controlled super-admin creation flow to reduce exposure risk before full platform activation.",
      },
    ],
    outcomeGroups: [
      {
        title: "Architecture outcomes",
        items: [
          "Clean domain separation without maintaining three independent codebases",
          "Centralized backend business logic while supporting three different UX portals",
          "Scalable role-driven platform for citizens, volunteers, and municipal admins",
          "Improved maintainability through modular backend routes and model separation",
          "Strong practical implementation of secure session auth with multi-role routing",
        ],
      },
      {
        title: "Key flow outcomes",
        items: [
          "Authentication flow reliably routes users to role-correct dashboards with guard-enforced access",
          "Setup flow reduces first-run deployment mistakes through gated initialization",
          "Issue lifecycle now connects citizen reporting, community engagement, and volunteer/admin resolution",
          "Dashboard metrics convert field activity into measurable civic outcomes",
        ],
      },
    ],
    outcomes: [
      "Delivered a production-like civic architecture using one frontend + one backend for three role-specific portals",
      "Increased maintainability through modular backend domain boundaries and role-driven route control",
      "Validated secure cross-subdomain auth behavior with backend-authoritative access checks",
    ],
    learned: [
      "The biggest learning was designing a multi-subdomain frontend architecture where one codebase serves citizen, admin, and volunteer portals.",
      "Learned how to centralize subdomain detection and scoped navigation while keeping routes conflict-free.",
      "Learned practical cross-context session behavior with credentialed requests, cookie rules, and role-based guards.",
      "Learned why setup gating and path-fallback routing are critical for stable development-to-production transitions.",
      "Learned to keep frontend UX smooth while enforcing strict backend-authoritative authorization boundaries.",
    ],
  },
  "mindfullness-chatbot": {
    title: "Mind-Fullness chat bot",
    subtitle: "Guided wellness assistant for supportive conversation",
    summary:
      "A web chatbot experience oriented toward mindfulness support with approachable UI and clear conversational structure.",
    role: "Frontend Developer",
    duration: "4 Weeks",
    deliverable: "Conversational Web Interface",
    status: "Live",
    liveUrl: "https://zenshin-gpt.vercel.app/",
    codeUrl: "https://github.com/Ram9219/Zenshin-GPT",
    architecture: [
      {
        label: "Presentation",
        value: "HTML, JavaScript, TailwindCSS",
        details:
          "Minimal, calm interface layer focused on readability, gentle spacing, and easy message scanning.",
        highlights: ["Readable typography", "Calm visual hierarchy", "Lightweight rendering"],
      },
      {
        label: "Conversation UI",
        value: "Prompt-response chat interaction",
        details:
          "Chat interaction model structures prompts and responses to keep conversation intuitive and supportive.",
        highlights: ["Clear turn-taking", "Low-friction messaging", "Consistent response framing"],
      },
      {
        label: "Session Layer",
        value: "Client-side context handling",
        details:
          "Session context keeps conversation continuity and preserves user flow between interactions.",
        highlights: ["Context continuity", "Session stability", "Simple state updates"],
      },
      {
        label: "Hosting",
        value: "Vercel web deployment",
        details:
          "Reliable deployment setup for fast delivery and smooth portfolio demonstrations.",
        highlights: ["Quick deploys", "Global delivery", "Production readiness"],
      },
    ],
    coreFunctionality: [
      "Structured chat flow for mindful check-ins and gentle guidance",
      "Readable message layout optimized for long-form responses",
      "Fast interface interactions with minimal cognitive overhead",
      "Accessible color and typography choices for calm readability",
    ],
    challenges: [
      {
        challenge: "Keeping conversation flow calm without feeling robotic",
        solution:
          "Refined copy tone and message pacing to sound supportive while staying concise.",
      },
      {
        challenge: "Preventing visual clutter in long chat sessions",
        solution:
          "Applied spacing hierarchy and message grouping to maintain scanning clarity.",
      },
    ],
    outcomes: [
      "Released a focused chatbot interface with a clear emotional UX direction",
      "Improved frontend craftsmanship around conversation-driven products",
      "Created a practical base for extending to richer wellness journeys",
    ],
    learned: [
      "Tone and interface rhythm are core parts of conversational product quality",
      "Even simple stacks can deliver strong UX with disciplined interaction design",
    ],
  },
};

const sectionTitleClass = "text-2xl sm:text-3xl font-bold mb-4";
const sectionTransition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };
const sectionViewport = { once: true, amount: 0.2 };

const CaseStudy = () => {
  const { slug } = useParams();
  const reduceMotion = useReducedMotion();

  const study = useMemo(() => CASE_STUDIES[slug], [slug]);
  const [activeArchitectureIndex, setActiveArchitectureIndex] = useState(0);

  useEffect(() => {
    setActiveArchitectureIndex(0);
  }, [slug]);

  if (!study) {
    return (
      <main className="min-h-screen px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="glass-effect p-8 text-center">
            <h1 className="text-3xl font-bold mb-3">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-6">
              This project case study is not available yet.
            </p>
            <Button asChild>
              <a href="/#projects">
                <ArrowLeft className="w-4 h-4" />
                Exit Case Study
              </a>
            </Button>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full bg-primary/15 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 20, -10, 0], y: [0, 10, -15, 0] }}
        transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-secondary/15 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -15, 8, 0], y: [0, 12, -8, 0] }}
        transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10 relative z-10">
        <motion.div
          className="flex items-center justify-between gap-3"
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={sectionTransition}
        >
          <Button asChild variant="outline" size="sm">
            <a href="/#projects">
              <ArrowLeft className="w-4 h-4" />
              Exit Case Study
            </a>
          </Button>

          <div className="text-xs px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary">
            {study.status}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 26, filter: "blur(4px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={sectionViewport}
          transition={sectionTransition}
        >
          <Card className="glass-effect p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
          <p className="section-kicker mb-4">Project Case Study</p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-3">{study.title}</h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">{study.subtitle}</p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">{study.summary}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            <Card className="bg-card/60 border-border/70 p-3 hover:border-primary/40 transition-colors duration-300">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Role</p>
              <p className="text-sm font-semibold mt-1">{study.role}</p>
            </Card>
            <Card className="bg-card/60 border-border/70 p-3 hover:border-primary/40 transition-colors duration-300">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Duration</p>
              <p className="text-sm font-semibold mt-1">{study.duration}</p>
            </Card>
            <Card className="bg-card/60 border-border/70 p-3 hover:border-primary/40 transition-colors duration-300">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Deliverable</p>
              <p className="text-sm font-semibold mt-1">{study.deliverable}</p>
            </Card>
            <Card className="bg-card/60 border-border/70 p-3 hover:border-primary/40 transition-colors duration-300">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Status</p>
              <p className="text-sm font-semibold mt-1">{study.status}</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button asChild>
              <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                <Rocket className="w-4 h-4" />
                Live Site
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={study.codeUrl} target="_blank" rel="noopener noreferrer">
                <Wrench className="w-4 h-4" />
                GitHub Code
              </a>
            </Button>
          </div>

          {(study.adminUrl || study.volunteerUrl) && (
            <div className="mt-4">
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                If you are more interested, visit these routes as well:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {study.adminUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a href={study.adminUrl} target="_blank" rel="noopener noreferrer">
                      Admin Route
                    </a>
                  </Button>
                )}
                {study.volunteerUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a href={study.volunteerUrl} target="_blank" rel="noopener noreferrer">
                      Volunteer Route
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
          </Card>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 26, filter: "blur(4px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={sectionViewport}
          transition={sectionTransition}
        >
          <Card className="glass-effect p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
            <h2 className={sectionTitleClass}>System Architecture</h2>
            <p className="text-sm text-muted-foreground mb-5">Click each block to inspect its role in the architecture.</p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {study.architecture.map((item, index) => {
                  const isActive = index === activeArchitectureIndex;

                  return (
                    <motion.button
                      key={item.label}
                      type="button"
                      onClick={() => setActiveArchitectureIndex(index)}
                      whileHover={reduceMotion ? undefined : { y: -3 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                      className={`text-left rounded-lg border p-4 transition-all duration-300 ${
                        isActive
                          ? "border-primary/60 bg-primary/12 shadow-[0_0_0_1px_hsl(var(--primary)_/_0.35)]"
                          : "border-border/70 bg-card/55 hover:border-primary/35"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-semibold mt-1">{item.value}</p>
                    </motion.button>
                  );
                })}
              </div>

              <div className="lg:col-span-3 rounded-xl border border-border/70 bg-card/50 p-4 sm:p-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={study.architecture[activeArchitectureIndex].label}
                    initial={reduceMotion ? undefined : { opacity: 0, x: 12 }}
                    animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-primary mb-2">Active Layer</p>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{study.architecture[activeArchitectureIndex].label}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      {study.architecture[activeArchitectureIndex].details}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {study.architecture[activeArchitectureIndex].highlights.map((highlight) => (
                        <div key={highlight} className="rounded-md border border-primary/25 bg-primary/10 px-3 py-2 text-xs sm:text-sm">
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 text-center">
              <div className="rounded-lg border border-border/80 bg-card/40 p-3">
                <LayoutDashboard className="w-5 h-5 mx-auto text-primary" />
                <p className="text-xs mt-2 text-muted-foreground">Frontend</p>
              </div>
              <div className="rounded-lg border border-border/80 bg-card/40 p-3">
                <Server className="w-5 h-5 mx-auto text-primary" />
                <p className="text-xs mt-2 text-muted-foreground">API Layer</p>
              </div>
              <div className="rounded-lg border border-border/80 bg-card/40 p-3">
                <Database className="w-5 h-5 mx-auto text-primary" />
                <p className="text-xs mt-2 text-muted-foreground">Data Layer</p>
              </div>
              <div className="rounded-lg border border-border/80 bg-card/40 p-3">
                <Cpu className="w-5 h-5 mx-auto text-primary" />
                <p className="text-xs mt-2 text-muted-foreground">Infra</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 26, filter: "blur(4px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={sectionViewport}
          transition={sectionTransition}
        >
          <Card className="glass-effect p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
          <h2 className={sectionTitleClass}>Core Functionality</h2>
          <div className="space-y-3">
            {study.coreFunctionality.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border/70 bg-card/55 p-4">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary" />
                <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          </Card>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 26, filter: "blur(4px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={sectionViewport}
          transition={sectionTransition}
        >
          <Card className="glass-effect p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
          <h2 className={sectionTitleClass}>Challenges and Solutions</h2>
          <div className="space-y-4">
            {study.challenges.map((item) => (
              <Card key={item.challenge} className="bg-card/55 border-border/70 p-4">
                <h3 className="text-base sm:text-lg font-semibold mb-2">Challenge: {item.challenge}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  <span className="font-semibold text-foreground">Solution: </span>
                  {item.solution}
                </p>
              </Card>
            ))}
          </div>
          </Card>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={reduceMotion ? undefined : { opacity: 0, y: 26, filter: "blur(4px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={sectionViewport}
          transition={sectionTransition}
        >
          <Card className="glass-effect p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Outcome</h2>
            <div className="space-y-3">
              {study.outcomeGroups
                ? study.outcomeGroups.map((group) => (
                    <div key={group.title} className="rounded-lg border border-border/70 bg-card/55 p-4">
                      <p className="text-sm font-semibold mb-2">{group.title}</p>
                      <div className="space-y-2">
                        {group.items.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <Shield className="w-4 h-4 mt-1 text-primary" />
                            <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                : study.outcomes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Shield className="w-4 h-4 mt-1 text-primary" />
                      <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
            </div>
          </Card>

          <Card className="glass-effect p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">What I Learned</h2>
            <div className="space-y-3">
              {study.learned.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 mt-1 text-primary" />
                  <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={sectionTransition}
        >
          <Card className="glass-effect p-6 sm:p-8 text-center hover:-translate-y-1 transition-transform duration-300">
          <p className="text-muted-foreground mb-4">Finished reading this case study?</p>
          <Button asChild size="lg">
            <a href="/#projects">
              <ArrowLeft className="w-4 h-4" />
              Exit Case Study
            </a>
          </Button>
          </Card>
        </motion.div>
      </div>
    </main>
  );
};

export default CaseStudy;
