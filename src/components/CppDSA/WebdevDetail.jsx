import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success(' Code copied to clipboard!');
};

const WebdevDetail = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "1. What is Web Development?",
      explanation:
        "Web development refers to the creation of websites and web applications that run in a browser. It includes frontend (UI), backend (server), and full-stack (both). It combines design, logic, and programming to deliver user experiences.",
      code: `// Stack overview
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB`
    },
    {
      title: "2. HTML5 - Markup Language",
      explanation:
        "HTML5 structures web pages using semantic elements like <header>, <section>, and <footer>. It supports audio, video, forms, and is essential for accessible web content.",
      code: `<!-- HTML5 Structure -->
<header><h1>My Website</h1></header>
<main><p>Welcome to the web!</p></main>`
    },
    {
      title: "3. CSS3 - Styling the Web",
      explanation:
        "CSS3 is used for styling HTML content with colors, layouts, and responsiveness. Features include Flexbox, Grid, transitions, and media queries for mobile design.",
      code: `/* CSS3 Example */
.container {
  display: flex;
  justify-content: center;
  background-color: #f59e0b;
}`
    },
    {
      title: "4. JavaScript - Behavior Layer",
      explanation:
        "JavaScript adds interactivity to web pages. It handles DOM manipulation, event handling, API requests, and dynamic content changes.",
      code: `// JS Click Example
document.querySelector("button").onclick = () => {
  alert("Hello from JavaScript!");
};`
    },
    {
      title: "5. React.js - Component-Based UI",
      explanation:
        "React.js is a library for building UI using components. It uses a virtual DOM, JSX, and hooks to create dynamic web apps. It’s maintained by Meta.",
      code: `function Hello() {
  return <h1>Hello React!</h1>;
}`
    },
    {
      title: "6. Tailwind CSS - Utility-First Framework",
      explanation:
        "Tailwind CSS allows rapid UI development using utility classes directly in HTML. It enables responsive design and consistent spacing, color, and layout.",
      code: `<button class="bg-blue-600 text-white px-4 py-2 rounded">
  Click Me
</button>`
    },
    {
      title: "7. Node.js - Server-Side JavaScript",
      explanation:
        "Node.js enables running JavaScript on the server. It supports asynchronous, event-driven programming and is widely used for building APIs and microservices.",
      code: `// Node.js HTTP server
const http = require('http');
http.createServer((req, res) => {
  res.end('Hello Node.js!');
}).listen(3000);`
    },
    {
      title: "8. Express.js - Backend Framework",
      explanation:
        "Express.js is a minimalist web framework for Node.js. It handles routing, middleware, and simplifies building RESTful APIs.",
      code: `const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("Hello Express"));
app.listen(3000);`
    },
    {
      title: "9. MongoDB - NoSQL Database",
      explanation:
        "MongoDB is a document-oriented database. It stores data in flexible JSON-like format and is ideal for apps requiring fast reads/writes and scalability.",
      code: `// MongoDB document
{
  "name": "Alice",
  "email": "alice@example.com",
  "role": "Developer"
}`
    },
    {
      title: "10. Git & GitHub - Version Control",
      explanation:
        "Git tracks code history; GitHub hosts repositories for collaboration. They’re essential for managing source code, reviewing changes, and team development.",
      code: `git init
git add .
git commit -m "Initial commit"
git push origin main`
    },
    {
      title: "11. RESTful APIs",
      explanation:
        "REST APIs allow communication between client and server using HTTP methods like GET, POST, PUT, DELETE. They are stateless and resource-based.",
      code: `// Fetch API Example
fetch('/api/posts')
  .then(res => res.json())
  .then(data => console.log(data));`
    },
    {
      title: "12. Next.js - React Framework",
      explanation:
        "Next.js is a React framework that supports server-side rendering (SSR), static site generation (SSG), and routing. It improves SEO and performance.",
      code: `export default function Home() {
  return <h1>Welcome to Next.js</h1>;
}`
    },
    {
      title: "13. Vite - Fast Build Tool",
      explanation:
        "Vite is a modern frontend tool for fast development and builds. It features instant server start and hot module replacement (HMR).",
      code: `npm create vite@latest my-app --template react`
    },
    {
      title: "14. TypeScript - Typed JavaScript",
      explanation:
        "TypeScript adds static types to JavaScript, helping catch bugs early. It's widely used in enterprise-scale web apps.",
      code: `function greet(name: string): string {
  return "Hello, " + name;
}`
    },
    {
      title: "15. Firebase - BaaS by Google",
      explanation:
        "Firebase offers backend services like Authentication, Firestore, Hosting, and Cloud Functions. It’s great for building scalable, real-time apps.",
      code: `import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, "user@gmail.com", "123456");`
    },
    {
      title: "16. WebSockets - Real-Time Communication",
      explanation:
        "WebSockets provide a full-duplex communication channel over a single TCP connection. They're ideal for real-time apps like chats, games, and live updates without constant polling.",
      code: `// WebSocket in JavaScript
const socket = new WebSocket('wss://example.com/socket');

socket.onmessage = (event) => {
  console.log('Message:', event.data);
};`
    },
    {
      title: "17. GraphQL - Query Language for APIs",
      explanation:
        "GraphQL is an API query language developed by Facebook. Unlike REST, it allows clients to request exactly the data they need. It supports faster and more efficient data fetching.",
      code: `// Sample GraphQL query
query {
  user(id: "1") {
    name
    email
  }
}`
    },
    {
      title: "18. Docker - Containerization Tool",
      explanation:
        "Docker packages applications into containers—lightweight, portable units that include the app and its environment. This ensures consistency across development and production.",
      code: `# Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`
    },
    {
      title: "19. WebAssembly - High Performance Web",
      explanation:
        "WebAssembly (Wasm) is a low-level binary format that allows running high-performance code in the browser. It's useful for games, video editing, and apps needing speed beyond JavaScript.",
      code: `// WebAssembly usage (example placeholder)
WebAssembly.instantiate(buffer)
  .then(module => module.instance.exports.run());`
    },
    {
      title: "20. CI/CD - Continuous Integration & Deployment",
      explanation:
        "CI/CD automates the process of integrating code, testing, and deploying applications. Tools like GitHub Actions, Travis CI, and Jenkins help ensure fast and reliable delivery.",
      code: `# GitHub Actions CI example
name: Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install && npm run build`
    },
    {
      title: "21. Progressive Web Apps (PWA)",
      explanation:
        "PWAs combine the best of web and mobile apps. They work offline, load fast, and can be installed on a user's home screen. They’re built using service workers and manifests.",
      code: `// manifest.json sample
{
  "name": "My PWA App",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#2196f3"
}`
    },
    {
      title: "22. JAMstack Architecture",
      explanation:
        "JAMstack (JavaScript, APIs, Markup) is a modern web architecture that focuses on performance, security, and scalability. Content is pre-rendered and served via CDN with dynamic features handled via APIs.",
      code: `// Example: Static HTML + JS + External API
fetch('https://api.example.com/posts')
  .then(res => res.json())
  .then(data => console.log(data));`
    },
    {
      title: "23. Headless CMS",
      explanation:
        "A Headless CMS (like Strapi, Contentful, Sanity) allows managing content separately from the front end. It delivers data via APIs, enabling flexible UI frameworks like React or Vue.",
      code: `// Example: Fetching content from Strapi
fetch('https://api.strapi.io/articles')
  .then(res => res.json())
  .then(data => console.log(data));`
    },
    {
      title: "24. SSR & SSG (Server-Side & Static Generation)",
      explanation:
        "Server-Side Rendering (SSR) generates HTML on request, improving SEO. Static Site Generation (SSG) builds pages at compile time. Tools like Next.js support both approaches.",
      code: `// Next.js SSG example
export async function getStaticProps() {
  return { props: { message: "Hello Static!" } };
}`
    },
    {
      title: "25. Web Vitals & Performance Optimization",
      explanation:
        "Web Vitals measure real-user experience: LCP, FID, CLS. Optimizing images, reducing JavaScript size, and lazy loading help improve these scores and SEO.",
      code: `// Lighthouse performance tip
<img src="image.webp" loading="lazy" alt="Fast image" />`
    }
  ];


  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white">
      <button
        onClick={() => navigate('/')}
        className="px-4 py-2  text-green-500"
      >
        Go Back
      </button>
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-400">
        Learn Web Development Technologies With Us
      </h1>
      <img src="/webdevDeteilImage.png"
        alt="wed dev"
        className="w-full md:w-3/4 lg:w-full mx-auto mb-6 rounded-lg shadow-lg" />
      <p className="text-gray-200 mb-4 leading-relaxed text-lg">
        Modern web development encompasses the technologies, practices, and tools used to create and maintain interactive websites and web applications. It involves both front-end (user-facing) and back-end (server-side) development, emphasizes responsive design for various devices, and incorporates best practices for security, collaboration, and project management.
      </p>

      {topics.map((topic, index) => (
        <section key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">{topic.title}</h2>
          <p className="text-gray-200 mb-4">{topic.explanation}</p>

          <div className="relative bg-gray-900 p-4 rounded-lg mb-2">
            <pre className="text-sm text-green-200 overflow-x-auto whitespace-pre-wrap">
              <code>{topic.code}</code>
            </pre>
            <button
              onClick={() => copyToClipboard(topic.code)}
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-800 text-white px-2 py-1 text-xs rounded"
            >
              Copy
            </button>

          </div>

        </section>
      ))}
    </div>
  );
};

export default WebdevDetail;
