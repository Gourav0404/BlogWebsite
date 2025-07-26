
import { useNavigate } from 'react-router-dom';



const BCAdetail = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "1. What is a Computer?",
      explanation:
        "A computer is an electronic device that processes data and performs tasks based on instructions (software). It can store, retrieve, and manipulate data quickly and accurately. Computers are used in various fields like education, business, healthcare, and entertainment."
    },
    {
      title: "2. Characteristics of a Computer",
      explanation:
        "Computers are known for their speed, accuracy, automation, versatility, and large storage capacity. They can work continuously without fatigue and can handle repetitive tasks efficiently. Unlike humans, they do not get tired or bored."
    },
    {
      title: "3. Types of Computers",
      explanation:
        "Computers are classified based on size and power: Supercomputers (most powerful), Mainframe computers (used by large organizations), Minicomputers (medium-sized), and Microcomputers or Personal Computers (used at homes/offices)."
    },
    {
      title: "4. Components of a Computer System",
      explanation:
        "A computer system has two major parts: hardware and software. Hardware is the physical part (like keyboard, monitor), and software is a set of programs that tells the hardware what to do. Both are essential to run a computer."
    },
    {
      title: "5. Input and Output Devices",
      explanation:
        "Input devices help users send data to the computer (keyboard, mouse, scanner), while output devices display the results (monitor, printer, speakers). These devices help users interact with the system efficiently."
    },
    {
      title: "6. Memory Units in Computers",
      explanation:
        "Computer memory is divided into primary and secondary memory. Primary memory includes RAM (temporary) and ROM (permanent). Secondary memory stores data long-term and includes hard drives, SSDs, and USB drives."
    },
    {
      title: "7. What is Software?",
      explanation:
        "Software is a set of instructions that allows the user to interact with the hardware. It includes System Software (like OS), Application Software (like Word, Excel), and Utility Software (like Antivirus, Disk Cleaner)."
    },
    {
      title: "8. Difference Between Hardware and Software",
      explanation:
        "Hardware refers to physical parts of a computer you can touch, like the keyboard and CPU. Software is a set of instructions that runs on hardware. Both are needed: software tells hardware what to do."
    },
    {
      title: "9. Operating Systems",
      explanation:
        "The Operating System (OS) is system software that manages hardware and software resources. It provides a user-friendly interface and handles tasks like memory management, file handling, and device control. Examples include Windows, Linux, and macOS."
    },
    {
      title: "10. Number Systems in Computing",
      explanation:
        "Computers use number systems to store and process data. The most common are: Binary (base 2), Decimal (base 10), Octal (base 8), and Hexadecimal (base 16). Binary is the native language of computers, using only 0s and 1s."
    },
    {
      title: "11. Computer Networks",
      explanation:
        "A computer network is a group of interconnected computers that share resources and information. Types of networks include LAN (Local), WAN (Wide), and MAN (Metropolitan). The internet is the largest example of a WAN."
    },
    {
      title: "12. Common Computer Terminologies",
      explanation:
        "Some basic terms include Bit (smallest unit of data), Byte (8 bits), Booting (starting the system), Virus (harmful software), File (a document), and Folder (a collection of files). These are essential for basic computer usage."
    },
    {
      title: "13. Difference Between Data and Information",
      explanation:
        "Data is raw, unprocessed facts (like numbers or text), while information is processed data that is meaningful and useful. Computers collect data and convert it into information through processing."
    },
    {
      title: "14. What is a CPU?",
      explanation:
        "The Central Processing Unit (CPU) is the brain of the computer. It performs calculations and executes instructions. It has two parts: ALU (performs arithmetic and logic operations) and CU (controls input/output and other operations)."
    },
    {
      title: "15. Primary and Secondary Storage",
      explanation:
        "Primary storage (RAM, ROM) is directly accessed by the CPU and stores data temporarily or permanently. Secondary storage (HDD, SSD, Pen Drive) stores data long-term and is slower but has a larger capacity."
    },
    {
      title: "16. What is a Motherboard?",
      explanation:
        "The motherboard is the main circuit board that connects all components of the computer. It holds the CPU, memory, and provides connectors for peripherals. It enables communication between all hardware parts."
    },
    {
      title: "17. What is an Algorithm?",
      explanation:
        "An algorithm is a step-by-step procedure to solve a problem or perform a task. In computer science, algorithms are used to perform calculations, data processing, and automated reasoning efficiently."
    },
    {
      title: "18. What is Cloud Computing?",
      explanation:
        "Cloud computing is the delivery of computing services like storage, servers, and databases over the internet. It allows users to access data and applications from anywhere, without relying on local storage or hardware."
    },
    {
      title: "19. Types of Software Licenses",
      explanation:
        "Software licenses define how software can be used and distributed. Common types include Open Source (free to use and modify), Freeware (free but not modifiable), and Proprietary Software (paid and owned by companies)."
    },
    {
      title: "20. What is an IP Address?",
      explanation:
        "An IP address is a unique identifier assigned to each device connected to a network. It allows devices to communicate over the internet. It can be IPv4 (e.g., 192.168.0.1) or IPv6 (newer, longer format)."
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
        Learn Computer Fundamentals for BCA 1st Year With Us
      </h1>
      <img src="/bcaDetailImage.png"
        alt="BCA"
        className="w-full md:w-3/4 lg:w-full mx-auto mb-6 rounded-lg shadow-lg" />
      <p className="text-gray-200 mb-4 leading-relaxed text-lg">
        Computers are the backbone of the digital world—whether you're studying computer science or not, understanding how computers work is essential. For BCA 1st year students, computer fundamentals provide the foundation for all future learning in programming, networking, and system design. This blog will guide you through the basic concepts in a simple and beginner-friendly way.
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

export default BCAdetail;
