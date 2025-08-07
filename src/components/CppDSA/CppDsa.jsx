import React from 'react';
import Blogdata from '../CppDSA/Blogdata';
import ReactBlogData from '../CppDSA/ReactBlogData';
import OopsBlogData from '../CppDSA/OopsBlogData';
import GitGithubData from '../CppDSA/GitGithubData';
import FrontendBlogData from './FrontendBlogData';
import PythonBlogData from './PythonBlogData';
import BCAdata from './BCAdata'
import SEdata from './SEdata';
import WebdevData from './WebdevData';


const CppDsa = () => {
  const blogData = [
    {
      img: "/DSAImage.png",
      title: "Introduction to C++ Data Structures and Algorithms",
      description:
        "This blog post provides an overview of the fundamental data structures and algorithms in C++, including arrays, linked lists, stacks, queues, trees, and sorting algorithms.",
    },


  ];

  const reactdata = [
    {
      img: "/ReactImage.png",
      title: "Why You Should Learn React JS as a Developer",
      description:
        "Here’s a clear, structured answer to why you should learn React JS, especially if you're aiming to become a modern front-end or full-stack developer.",
    },
  ];

  const oopsdata = [
    {
      img: "/OOPS_Image.png",
      title: "Understanding Object-Oriented Programming in JAVA",
      description:
        "This blog post explains the principles of Object-Oriented Programming (OOP) in JAVA, including encapsulation, inheritance, and polymorphism, with practical examples.",
    }
  ];


  const GitGithubdata = [
    {
      img: "/GitGithubDataImage.png",
      title: "Git and Github for Beginners : A Complete Guide",
      description: "This blog post provides a comprehensive guide to Git and GitHub for beginners, including setting up Git locally, creating repositories, understanding key commands, and learning how to push code to GitHub."
    },
  ]

  const frontenddata = [
    {
      img: "/frontendDataImage.png",
      title: "Building Your First Website with HTML, CSS, and JS",
      description: "This blog post is a beginner-friendly guide to building your very first website using HTML, CSS, and JavaScript.You'll learn how to structure a webpage with HTML, style it with CSS, and make it interactive using JavaScript."
    },
  ];

  const pythondata = [
    {
      img: "/pythonDataImage.png",
      title: "Python Programming Language",
      description: "Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used in web development, data science, automation, artificial intelligence, machine learning, and more."
    },
  ];
  const bcaData = [
    {
      img: "/bcaDataImage.png",
      title: "Introduction to Computer Fundamentail",
      description: "Computers are the backbone of the digital world—whether you're studying computer science or not, understanding how computers work is essential. For BCA 1st year students, computer fundamentals."
    },
  ]

  const Sedata = [
    {
      img: "/SEdataImage.png",
      title: "Introduction to Software Engineering",
      description: "Software Engineering is the branch of computer science that deals with the systematic development, design, testing, and maintenance of software applications. It try, efficiency, and scalability."
    },
  ];

  const webdevdata = [
    {
      img: "/webdevDataImage.png",
      title: "Modern Web Developnent Technologie",
      description: "Modern web development encompasses the technologies, practices, and tools used to create and maintain interactive websites and web applications. Learn Web Development here how to create a website."
    },

  ];




  return (
    <div className="p-4 bg-zinc-800 min-h-screen flex flex-wrap justify-center gap-6 ">

      <div className='mt-6' >
        {blogData.map((item, index) => (
          <Blogdata
            key={index}
            image={item.img}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>

      <div className='mt-6' >
        {reactdata.map((item, index) => (
          <ReactBlogData
            key={index}
            image={item.img}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>

      <div className='mt-6' >
        {oopsdata.map((item, index) => (
          <OopsBlogData
            key={index}
            image={item.img}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>

      <div className='mt-6' >
        {GitGithubdata.map((item, index) => (
          <GitGithubData
            key={index}
            image={item.img}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>

      <div className='mt-6' >
        {frontenddata.map((item, index) => (
          <FrontendBlogData
            key={index}
            image={item.img}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>

      <div className='mt-6' >
        {pythondata.map((item, index) => (
          <PythonBlogData
            key={index}
            image={item.img}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>




      <div className='mt-6' >
        {bcaData.map((item, index) => (
          <BCAdata
            key={index}
            image={item.img}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>

      <div className='mt-6' >
        {Sedata.map((item, index) => (
          <SEdata
            key={index}
            image={item.img}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>

      <div className='mt-6' >
        {webdevdata.map((item, index) => (
          <WebdevData
            key={index}
            image={item.img}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>

    </div>
  );
};

export default CppDsa;
