import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success(' Code copied to clipboard!');
};

const ReactBlogDetail = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "1. What is React JS ?",
      explanation:
        "React.js (or simply React) is a JavaScript library used for building user interfaces, especially for single-page applications (SPAs). It helps developers build interactive, dynamic, and fast web apps with reusable UI components.It was developed by Meta (formerly Facebook) and is now maintained by Meta and a huge open-source community.",
      code: `// Example: Basic React App
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Welcome to React!");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
`
    },
    {
      title: "2. What is Props In React JS ?",
      explanation:
        "In React, props (short for properties) are a way to pass data from one component to another — from parent to child.They allow you to create reusable and dynamic components by changing the content they display using values passed into them. ",
      code: `// Example: React Props
import React from 'react';
import UserCard from './UserCard';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Props Example</h1>
      
      {/* Passing props to the UserCard component */}
      <UserCard name="Gourav" age={21} profession="Frontend Developer" />
      <UserCard name="Neha" age={22} profession="UI/UX Designer" />
    </div>
  );
}

export default App;
`
    },
    {
      title: "3. What is State In React JS ?",
      explanation:
        "In React, state is a built-in object used to store and manage dynamic data in a component. When the state changes, the component automatically re-renders to reflect those changes in the UI.",
      code: ` // Example Of React State
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count = state variable, setCount = updater

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Count: {count}</h2>
      <button onClick={increase} style={{ marginRight: '10px' }}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;
`
    },
    {
      title: "4. What are Components In React JS ? ",
      explanation:
        "In React, a component is a reusable, independent block of UI that you can use to build your web application. Components are the building blocks of any React app . Think of components like Lego blocks—you assemble them to create a full UI.Types of Components in React : 1. Functional Components (Modern & Recommended) : These are simple JavaScript functions that return JSX. 2. Class Components (Older, Less Used Today) : These are ES6 classes that extend React.Component and have lifecycle methods.",
      code: ` Example Of React Components
  import React from 'react';
function Greeting() {
  return <h2>Hello, React Developer! 👋</h2>;
}

export default Greeting;
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h2>Welcome to React.js</h2>;
  }
}

export default Welcome;

`
    },
    {
      title: "5. What are Hooks In React JS ?",
      explanation:
        "Hooks are special functions in React that allow you to use state, lifecycle methods, and other features inside functional components. Before Hooks, these features were only available in class components. Hooks make functional components just as powerful.",
      code: ` Example Of React Hooks
  import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // state with initial value 0

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
`
    },

    {
      title: "6. Types Of Hooks In React JS ? ",
      explanation:
        "✅ 1. Basic (Built-in) Hooks: These are the most commonly used hooks that come with React. They include useState, useEffect, useContext, and more. They allow you to manage state, side effects, and context in functional components.✅ 2. Additional Hooks (Advanced Built-in Hooks): These hooks provide more advanced functionality, such as useReducer for complex state management, useMemo for performance optimization, and useRef for accessing DOM elements or storing mutable values.✅ 3. Custom Hooks: You can create your own hooks to encapsulate reusable logic that can be shared across multiple components. Custom hooks allow you to extract component logic into a separate function, making your code cleaner and more maintainable.",
      code: `// Example Of Custom Hook
import { useState, useEffect } from 'react';
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
        }
        fetchData();
        }`
    },
    {
      title: "7. What Is useState Hook In React JS ?",
      explanation:
        "useState is a React Hook that lets you add state to functional components. It returns an array with two values:1. The current state value. 2. A function to update that state value.",
      code: `// Example Of useState Hook
   import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
` },
    {
      title: "8. What is useEffect Hook In React JS ?",
      explanation:
        "useEffect is a React Hook that lets you perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM. It runs after every render by default, but you can control when it runs using a dependency array. You can also return a cleanup function to run when the component unmounts or before the next effect runs. its use like :Fetching data from an API , Updating the DOM directly,Using setTimeout or setInterval, Subscribing to events or WebSocket connections, Cleaning up resources when the component unmounts.",
      code: `// Example of useEffect Hook
      import { useEffect } from 'react';

useEffect(() => {
  console.log("Component mounted or updated");
  
  return () => {
    console.log("Cleanup before unmount or next effect");
  };
}, [/* dependency array */]);
`
    },
    {
      title: "9. What is useContext Hook In React JS ?",
      explanation:
        "useContext is a React Hook that allows you to access the context value in functional components. Context provides a way to pass data through the component tree without having to pass props down manually at every level. It is useful for global state management, themes, user authentication, and more.  When to Use It : You should use useContext when you have data that needs to be accessible by many components at different levels of the component tree, such as user authentication status, theme settings, or language preferences.",
      code: ` // Synatx Of useContext Hook
      const value = useContext(MyContext);

      import { createContext } from 'react';

      export const ThemeContext = createContext(); // default value optional

      import React, { useState } from 'react';
      import { ThemeContext } from './ThemeContext';
      import Home from './Home';

     function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;

      `
    },
    {
      title: "10. What is useRef Hook In React JS ?",
      explanation:
        "useRef is a hook that returns a mutable object (ref) which persists across renders. It is mainly used for: 1. Accessing DOM elements directly 2.Storing a value without re-rendering the component .",
      code: ` // Example Of useRef Hook
      const inputRef = useRef();

const focusInput = () => {
  inputRef.current.focus();
};

return <input ref={inputRef} />;
}`,
    },
    {
      title: "11. What is useMemo Hook In React JS ?",
      explanation:
        "useMemo is a hook that memoizes the result of a computation, preventing unnecessary recalculations on every render. It is useful for optimizing performance in expensive calculations or when passing props to child components.",
      code: `// Example Of useMemo Hook

      const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

    }`},
    {
      title: "12. What is useCallback Hook In React JS ?",
      explanation:
        "useCallback is a hook that returns a memoized version of a callback function, preventing unnecessary re-creations of the function on every render. It is useful when passing callbacks to child components to avoid unnecessary re-renders.",
      code: `// Example Of useCallback Hook
      const memoizedCallback = useCallback(() => {
        doSomething(a, b);
      }, [a, b]);
      `
    },
    {
      title: "13.  What is useLayoutEffect in React ?",
      explanation:
        "useLayoutEffect is a hook similar to useEffect, but it runs synchronously after all DOM mutations. It is useful for reading layout from the DOM and synchronously re-rendering. It is often used for measuring the size or position of elements before the browser paints.",
      code: `// Example of useLayoutEffect 
        import React, { useLayoutEffect, useRef } from 'react';

function ChatBox() {
  const messagesEndRef = useRef();

  useLayoutEffect(() => {
    // Scroll to the bottom immediately after DOM layout
    messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
  }, []);

  return (
    <div style={{ height: '200px', overflowY: 'auto', border: '1px solid gray' }}>
      <div>Message 1</div>
      <div>Message 2</div>
      <div>Message 3</div>
      <div>Message 4</div>
      <div>Message 5</div>
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatBox;

        `
    },
    {
      title: "14. What is useReducer Hook In React JS ?",
      explanation: "useReducer is a hook that allows you to manage complex state logic in functional components. It is an alternative to useState and is particularly useful when the state logic involves multiple sub-values or when the next state depends on the previous one. It uses a reducer function to determine how the state should change based on dispatched actions.",
      code: `// Example Of useReducer Hook
        import React, { useReducer } from 'react';
        function reducer(state, action) { 
          switch (action.type) {
            case 'increment':
              return { count: state.count + 1 };
            case 'decrement':
              return { count: state.count - 1 };
            default:
              throw new Error();
          }
              }`
    },

    {
      title: "15. What is React Router ?",
      explanation:
        "React Router is a powerful library for managing navigation and routing in React applications. It allows you to create single-page applications (SPAs) with multiple views or pages without reloading the entire page. React Router uses a declarative approach to define routes and components, making it easy to manage navigation in your app.",
      code: `// Example Of React Router
        import React from 'react';
        import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
        import Home from './Home';
        import About from './About';
        import NotFound from './NotFound';
        function App() {
          return (
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          );
        }
          export default App;
        `,
    },

    {
      title: "16. What is Context API ?",
      explanation: "The Context API is a way to share data between components without passing props down manually at every level. It allows you to create a global state that can be accessed by any component in your React application, making it easier to manage state that needs to be shared across multiple components.",
      code: `// Example Of Context API
      // Creating a Context
      import React, { createContext, useContext, useState } from 'react';
      const ThemeContext = createContext();
      // Creating a Provider Component
      // This component will provide the context value to its children
      function ThemeProvider({ children }) {
        const [theme, setTheme] = useState('light');
        return (
          <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
          </ThemeContext.Provider>
        );
      }`
    },
    {
      title: "17. What is Redux ?",
      explanation: "Redux is a state management library for React applications. It helps you manage global state in a predictable way, making it easier to debug and test your application. Redux follows a unidirectional data flow and uses a single store to hold the entire state of your application. It is particularly useful for large applications with complex state management needs.",
      code: `// Example Of Redux
      // Creating a Redux Store
      import { createStore } from 'redux';
      const initialState = { count: 0 };
      function reducer(state = initialState, action) {
        switch (action.type) {
          case 'INCREMENT':
            return { count: state.count + 1 };
          case 'DECREMENT':
            return { count: state.count - 1 };
          default:
            return state;
        }
      }`
    },
    {
      title: "18. What is React Native ?",
      explanation: "React Native is a framework for building native mobile applications using React. It allows you to write mobile apps using JavaScript and React, while still providing a native look and feel. React Native uses native components instead of web components, which means you can create high-performance mobile applications that run on both iOS and Android platforms.",
      code: `// Example Of React Native
      // Creating a Simple React Native App
      import React from 'react';
      import { View, Text, Button } from 'react-native';
      function App() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello, React Native!</Text>
            <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
          </View>
        );
      }`
    },


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
        Learn React Web Application With Us
      </h1>
      <img  src="/React_Image.png"
        alt="React JS"
        className="w-full md:w-3/4 lg:w-full mx-auto mb-6 rounded-lg shadow-lg" />
      <p className="text-gray-200 mb-4 leading-relaxed text-lg">
        Welcome to the complete guide on building web applications using React.js.
        In this article, we’ll explore the fundamentals of React, including components,
        props, state, hooks, and routing. This guide is ideal for beginners and
        intermediate learners who want to master frontend development and build
        dynamic, modern websites or web apps.
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

export default ReactBlogDetail;
