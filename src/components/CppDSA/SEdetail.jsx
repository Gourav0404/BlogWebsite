
import { useNavigate } from 'react-router-dom';



const SEdetail = () => {
  const navigate = useNavigate();

 const  topics = [
  {
    title: "1. What is Software Engineering?",
    explanation:
      "Software Engineering is the application of engineering principles to software development. It involves designing, developing, testing, and maintaining software systems. The goal is to produce reliable, efficient, and scalable software solutions that meet user requirements."
  },
  {
    title: "2. Characteristics of Good Software",
    explanation:
      "Good software should be reliable, efficient, maintainable, and user-friendly. It should be flexible to changes and scalable as user needs grow. Security, correctness, and performance are also important aspects of quality software."
  },
  {
    title: "3. Types of Software",
    explanation:
      "Software is mainly categorized into system software, application software, and utility software. System software like operating systems manages hardware. Application software performs specific tasks, and utility software supports system maintenance."
  },
  {
    title: "4. Software Development Life Cycle (SDLC)",
    explanation:
      "SDLC is a structured approach to software development. It includes phases such as requirement analysis, design, implementation, testing, deployment, and maintenance. SDLC ensures systematic development and delivery of high-quality software."
  },
  {
    title: "5. Software Development Models",
    explanation:
      "Software development models define how SDLC phases are organized. Common models include Waterfall, Agile, Spiral, and V-Model. Each model suits different project requirements, risk levels, and team structures."
  },
  {
    title: "6. Functional and Non-Functional Requirements",
    explanation:
      "Functional requirements define what the system should do, like features and behavior. Non-functional requirements specify how the system performs, such as speed, security, and usability. Both are essential in software planning."
  },
  {
    title: "7. Software Design Principles",
    explanation:
      "Design principles guide the creation of clean and maintainable code. Principles like modularity, abstraction, separation of concerns, and low coupling lead to better architecture. They help make the system robust and flexible."
  },
  {
    title: "8. Difference Between Software and Hardware Engineering",
    explanation:
      "Software engineering deals with creating programs and applications. Hardware engineering focuses on physical components like chips and boards. Software is intangible and can be updated easily, while hardware is tangible and has physical limits."
  },
  {
    title: "9. What is a Software Requirement Specification (SRS)?",
    explanation:
      "SRS is a formal document that outlines functional and non-functional requirements. It serves as a guideline for developers and testers. A well-written SRS ensures that all stakeholders understand what the system should deliver."
  },
  {
    title: "10. What is Software Testing?",
    explanation:
      "Software Testing is the process of identifying errors or bugs in a software application. It ensures that the software performs as expected. Testing includes unit testing, integration testing, system testing, and acceptance testing."
  },
  {
    title: "11. What is Software Quality Assurance (SQA)?",
    explanation:
      "SQA ensures that the software meets defined quality standards and procedures. It involves audits, reviews, and process checks. The focus is on preventing defects rather than just identifying them after development."
  },
  {
    title: "12. What is Version Control?",
    explanation:
      "Version control is the management of changes to source code over time. Tools like Git allow developers to track revisions, collaborate, and restore earlier versions. It improves code quality and teamwork."
  },
  {
    title: "13. Difference Between Data and Information in SE",
    explanation:
      "In software engineering, data refers to raw input that is collected, while information is processed and structured data. Data is stored, retrieved, and processed by systems to produce valuable insights (information)."
  },
  {
    title: "14. Role of a Software Engineer",
    explanation:
      "A software engineer designs, codes, tests, and maintains software systems. They solve real-world problems through technology. Their responsibilities also include debugging, documentation, and collaboration with clients or stakeholders."
  },
  {
    title: "15. Maintenance in Software Engineering",
    explanation:
      "Software maintenance includes fixing bugs, updating features, and adapting to new environments. It is divided into corrective, adaptive, perfective, and preventive maintenance. Maintenance keeps software useful and up-to-date."
  },
  {
    title: "16. What is Software Architecture?",
    explanation:
      "Software architecture is the high-level structure of a software system. It defines how components interact and how the system is organized. A well-planned architecture ensures performance, scalability, and ease of maintenance."
  },
  {
    title: "17. What is an Algorithm in SE?",
    explanation:
      "In software engineering, an algorithm is a step-by-step method to solve a problem. Efficient algorithms improve the performance and responsiveness of software. They are crucial in logic building and optimization."
  },
  {
    title: "18. What is Cloud Software Engineering?",
    explanation:
      "Cloud software engineering involves designing and developing software that runs on cloud platforms. It includes managing distributed systems, ensuring security, and leveraging cloud services like AWS, Azure, or Google Cloud."
  },
  {
    title: "19. Types of Software Licenses",
    explanation:
      "Software licenses govern the use and distribution of software. Types include open-source (free to modify), freeware (free to use), and proprietary (paid and closed source). Licensing protects developer rights and usage terms."
  },
  {
    title: "20. What is DevOps in Software Engineering?",
    explanation:
      "DevOps combines development and operations to improve collaboration and automate software delivery. It uses tools for CI/CD, infrastructure as code, and monitoring. DevOps ensures faster, reliable, and continuous delivery of software."
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
        What is Software Engineering Learn With Us 
      </h1>
      <img src="/SEdetailImage.png"
        alt="SE"
        className="w-full md:w-3/4 lg:w-full mx-auto mb-6 rounded-lg shadow-lg" />
      <p className="text-gray-200 mb-4 leading-relaxed text-lg">
       Software Engineering is the branch of computer science that deals with the systematic development, design, testing, and maintenance of software applications. It applies engineering principles to software to ensure reliability, efficiency, and scalability.
       It follows a structured process to minimize errors and improve software quality.
       The goal is to develop software that is cost-effective, maintainable, and meets user needs over time.
      </p>

      {topics.map((topic, index) => (
        <section key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">{topic.title}</h2>
          <p className="text-gray-200 mb-4">{topic.explanation}</p>

        </section>
      ))}
    </div>
  );
};

export default SEdetail;
