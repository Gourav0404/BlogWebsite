import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success(' Code copied to clipboard!');
};

const FrontendBlogDetail = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "1. What is HTML?",
      explanation:
        "HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. It uses elements like headings, paragraphs, links, images, and more to define content.",
      code: `<!-- Basic HTML structure -->
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`
    },
    {
      title: "2. What is CSS?",
      explanation:
        "CSS (Cascading Style Sheets) is used to control the presentation of HTML elements, including layout, colors, fonts, and spacing. It separates content from design.",
      code: `/* CSS Example */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}`
    },
    {
      title: "3. What is JavaScript?",
      explanation:
        "JavaScript is a programming language used to make web pages interactive. It can manipulate HTML/CSS, respond to user events, and perform logic in the browser.",
      code: `// JavaScript Example
const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Button clicked!');
});`
    },
    {
      title: "4. HTML Tags",
      explanation:
        "HTML tags are used to define elements on a webpage. Common tags include <h1>, <p>, <a>, <img>, and <div>.",
      code: `<!-- HTML Tags -->
<h1>Title</h1>
<p>This is a paragraph.</p>
<a href='https://example.com'>Visit Site</a>`
    },
    {
      title: "5. CSS Selectors",
      explanation:
        "CSS selectors target HTML elements for styling. Examples include class selectors (.class), ID selectors (#id), and element selectors (div).",
      code: `/* CSS Selectors */
#header {
  color: blue;
}
.button {
  padding: 10px;
}`
    },
    {
      title: "6. JavaScript Variables",
      explanation:
        "Variables store data in JavaScript. Use let and const to declare variables.",
      code: `let name = 'Alice';
const age = 25;`
    },
    {
      title: "7. JavaScript Functions",
      explanation:
        "Functions group reusable code blocks. You can define them using the function keyword or arrow syntax.",
      code: `function greet(name) {
  return 'Hello, ' + name;
}
const greetArrow = (name) => 'Hi, ' + name;`
    },
    {
      title: "8. JavaScript Events",
      explanation:
        "Events are actions that happen in the browser (like clicks or key presses). JavaScript can respond to them using event listeners.",
      code: `document.getElementById('btn').addEventListener('click', () => {
  alert('Button clicked');
});`
    },
    {
      title: "9. HTML Forms",
      explanation:
        "HTML forms collect user input. Elements include <form>, <input>, <textarea>, <select>, and <button>.",
      code: `<form>
  <input type='text' placeholder='Your Name'>
  <button type='submit'>Submit</button>
</form>`
    },
    {
      title: "10. CSS Flexbox",
      explanation:
        "Flexbox is a layout system in CSS that makes it easier to align and distribute space among items in a container.",
      code: `/* Flexbox Example */
.container {
  display: flex;
  justify-content: space-between;
}`
    },
    {
      title: "11. JavaScript Conditionals",
      explanation:
        "Conditional statements (if, else if, else) allow your code to make decisions based on certain conditions.",
      code: `const age = 18;
if (age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}`
    },
    {
      title: "12. JavaScript Loops",
      explanation:
        "Loops repeat blocks of code. Common loops are for, while, and forEach (for arrays).",
      code: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`
    },
    {
      title: "13. JavaScript Arrays",
      explanation:
        "Arrays hold multiple values in one variable and can be looped or manipulated using methods like push(), pop(), map(), etc.",
      code: `const fruits = ['apple', 'banana'];
fruits.push('orange');`
    },
    {
      title: "14. JavaScript Objects",
      explanation:
        "Objects store data in key-value pairs. Useful for grouping related data.",
      code: `const person = {
  name: 'John',
  age: 30
};`
    },
    {
      title: "15. DOM Manipulation",
      explanation:
        "DOM (Document Object Model) manipulation is how JavaScript interacts with HTML elements to update content dynamically.",
      code: `document.getElementById('title').textContent = 'New Title';`
    },
    {
      title: "16. CSS Grid Layout",
      explanation:
        "CSS Grid is a two-dimensional layout system that allows you to create complex and responsive grid-based layouts easily.",
      code: `/* Grid Example */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`
    },
    {
      title: "17. CSS Transitions and Animations",
      explanation:
        "CSS transitions and animations add smooth effects to HTML elements, such as fade-ins, movement, or color changes.",
      code: `/* CSS Transition */
button {
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: blue;
}`
    },
    {
      title: "18. JavaScript Template Literals",
      explanation:
        "Template literals allow you to embed variables inside strings using backticks (`) and the ${} syntax.",
      code: "" + `// Template Literal Example
      const name = 'Alice';
      console.log(\`Hello, \${name}!\`);` + ""
    },
    {
      title: "19. JavaScript Destructuring",
      explanation:
        "Destructuring is a way to unpack values from arrays or properties from objects into distinct variables.",
      code: `// Object Destructuring
const user = { name: 'Bob', age: 30 };
const { name, age } = user;
console.log(name, age);`
    },
    {
      title: "20. JavaScript Fetch API",
      explanation:
        "The Fetch API allows you to make network requests (e.g., get data from a server) using promises.",
      code: `// Fetch API Example
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));`
    },
    {
      title: "21. JavaScript setTimeout & setInterval",
      explanation:
        "These functions let you delay execution (setTimeout) or run code repeatedly at intervals (setInterval).",
      code: `// setTimeout Example
setTimeout(() => {
  console.log('Hello after 2 seconds');
}, 2000);

// setInterval Example
setInterval(() => {
  console.log('Repeats every second');
}, 1000);`
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
        Building Your First Website with HTML, CSS, and JS With Us
      </h1>
      <img src="/FrontendDetailImage.png"
        alt="frontend"
        className="w-full md:w-3/4 h-[400px] lg:w-full mx-auto mb-6 rounded-lg shadow-lg" />
      <p className="text-gray-200 mb-4 leading-relaxed text-lg">
        This blog post is a beginner-friendly guide to building your very first website using HTML, CSS, and JavaScript — the foundational technologies of the web. You'll learn how to structure a webpage with HTML, style it with CSS, and make it interactive using JavaScript. Step-by-step examples and clear explanations make it easy for anyone, even with no prior experience, to create a fully functional and visually appealing webpage
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

export default FrontendBlogDetail;
