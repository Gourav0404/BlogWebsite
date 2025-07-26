import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success(' Code copied to clipboard!');
};

const PythonBlofDetail = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "1. What is Python?",
      explanation:
        "Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used in web development, data science, automation, and more.Unlike compiled languages (like C++ or Java), Python doesn’t need to be compiled before running. Instead, the Python interpreter reads and executes code line by line.",
      code: `# Hello World in Python
print("Hello, World!")`
    },
    {
      title: "2. Python Variables",
      explanation:
        "Variables store data in Python. You don't need to declare the data type explicitly — Python infers it.",
      code: `name = "Alice"
age = 25`
    },
    {
      title: "3. Python Data Types",
      explanation:
        "Python has various data types including integers, floats, strings, lists, tuples, dictionaries, and booleans.",
      code: `x = 10          # Integer
pi = 3.14       # Float
text = "Hello"  # String
is_valid = True # Boolean`
    },
    {
      title: "4. Python Lists",
      explanation:
        "A list is an ordered, mutable (changeable) collection of items in Python. It can hold elements of different data types: strings, numbers, booleans, even other lists!",
      code: `fruits = ["apple", "banana", "cherry"]
fruits.append("orange")`
    },
    {
      title: "5. Python Dictionaries",
      explanation:
        "A dictionary in Python is an unordered collection of key-value pairs. Each key is unique and maps to a value.",
      code: `person = {
  "name": "Alice",
  "age": 30
}`
    },
    {
      title: "6. Python If-Else",
      explanation:
        "Conditional statements allow decision-making using if, elif, and else.",
      code: `age = 18
if age >= 18:
  print("Adult")
else:
  print("Minor")`
    },
    {
      title: "7. Python Loops",
      explanation:
        "Python supports for and while loops to execute code repeatedly.",
      code: `for i in range(5):
  print(i)

count = 0
while count < 5:
  print(count)
  count += 1`
    },
    {
      title: "8. Python Functions",
      explanation:
        "Functions are defined using the def keyword and allow reuse of code blocks.",
      code: `def greet(name):
  return "Hello, " + name

print(greet("Alice"))`
    },
    {
      title: "9. Python Classes and Objects",
      explanation:
        "Python is an object-oriented language. Classes define blueprints for objects.",
      code: `class Person:
  def __init__(self, name):
    self.name = name

p = Person("Alice")
print(p.name)`
    },
    {
      title: "10. Python List Comprehension",
      explanation:
        "List comprehensions provide a concise way to create lists using expressions.",
      code: `squares = [x**2 for x in range(5)]
print(squares)`
    },
    {
      title: "11. Python String Formatting",
      explanation:
        "Python supports string interpolation using f-strings and the format() method.",
      code: `name = "Alice"
print(f"Hello, {name}!")`
    },
    {
      title: "12. Python Exception Handling",
      explanation:
        "Use try, except, and finally to handle errors gracefully.",
      code: `try:
  x = 1 / 0
except ZeroDivisionError:
  print("Cannot divide by zero!")`
    },
    {
      title: "13. Python Modules",
      explanation:
        "Modules organize code into separate files. Use import to include them in your program.",
      code: `import math
print(math.sqrt(16))`
    },
    {
      title: "14. Python File Handling",
      explanation:
        "Python allows reading and writing files using built-in functions like open(), read(), and write().",
      code: `with open("file.txt", "w") as f:
  f.write("Hello File!")`
    },
    {
      title: "15. Python Lambda Functions",
      explanation:
        "Lambda functions are small anonymous functions, typically used for short operations.",
      code: `add = lambda x, y: x + y
print(add(5, 3))`
    },
    {
      title: "16. Python Map, Filter, Reduce",
      explanation:
        "These functions support functional programming operations like mapping, filtering, and reducing data.",
      code: `from functools import reduce

nums = [1, 2, 3, 4]
squares = list(map(lambda x: x*x, nums))
evens = list(filter(lambda x: x % 2 == 0, nums))
product = reduce(lambda x, y: x * y, nums)`
    },
    {
      title: "17. Python Generators",
      explanation:
        "Generators yield values one at a time using the yield keyword, which is memory-efficient.",
      code: `def count_up():
  for i in range(5):
    yield i

for num in count_up():
  print(num)`
    },
    {
      title: "18. Python Decorators",
      explanation:
        "Decorators modify the behavior of functions. They are defined using the @ symbol above a function.",
      code: `def decorator(func):
  def wrapper():
    print("Before")
    func()
    print("After")
  return wrapper

@decorator
def say_hello():
  print("Hello")

say_hello()`
    },
    {
      title: "19. Python List vs Tuple",
      explanation:
        "Lists are mutable and slower. Tuples are immutable and faster.",
      code: `my_list = [1, 2, 3]
my_tuple = (1, 2, 3)`
    },
    {
      title: "20. Python *args and **kwargs",
      explanation:
        "*args passes variable-length positional arguments and **kwargs passes variable-length keyword arguments.",
      code: `def show(*args, **kwargs):
  print(args)
  print(kwargs)

show(1, 2, a=3, b=4)`
    },
    {
      title: "21. Python Requests Module",
      explanation:
        "The requests module is used to make HTTP requests in Python for APIs and web data.",
      code: `import requests

res = requests.get("https://api.example.com/data")
print(res.json())`
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
        Getting Started With Python Programming With Us
      </h1>
      <img src="/pythonDetailImage1.png"
        alt="python"
        className="w-full h-[400px] md:w-3/4 lg:w-full mx-auto mb-6 rounded-lg shadow-lg" />
      <p className="text-gray-200 mb-4 leading-relaxed text-lg">
        Python is a high-level, interpreted programming language known for its simplicity and readability.Python uses clear syntax that resembles plain English, making it ideal for both beginners and experienced developers. It supports multiple programming paradigms, including object-oriented, procedural, and functional programming.
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

export default PythonBlofDetail;
