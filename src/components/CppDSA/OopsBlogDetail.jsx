import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success(' Code copied to clipboard!');
};

const OopsBlogDetail = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "1. What is OOPS In Java ?",
      explanation:
        "OOPS (Object-Oriented Programming System) in Java is a programming paradigm based on the concept of “objects”, which are instances of classes. These objects can contain data (fields) and behavior (methods). Java follows the OOP principles to build flexible, modular, and reusable code.",
      code: `// Example: Of OOPS  JAVA
// Abstraction using abstract class
abstract class Vehicle {
    // Encapsulation: private variable with getter/setter
    private String brand;

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getBrand() {
        return brand;
    }

    // Abstract method (must be overridden)
    abstract void start();
}

// Inheritance: Car extends Vehicle
class Car extends Vehicle {
    @Override
    void start() {
        System.out.println(getBrand() + " car is starting...");
    }
}

// Another class for Polymorphism
class Bike extends Vehicle {
    @Override
    void start() {
        System.out.println(getBrand() + " bike is starting...");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        // Polymorphism: Vehicle ref → Car object
        Vehicle v1 = new Car();
        v1.setBrand("Toyota");
        v1.start();  // Output: Toyota car is starting...

        Vehicle v2 = new Bike();
        v2.setBrand("Yamaha");
        v2.start();  // Output: Yamaha bike is starting...
    }
}
`
    },
    {
      title: "2. What is Class and Object in Java?",
      explanation:
        "A class is a blueprint for creating objects. An object is an instance of a class. It encapsulates data and methods that operate on that data. In Java, classes define the properties (attributes) and behaviors (methods) of objects.",
      code: ` // Example: Class and Object in Java
class Student {
    String name = "Gourav";
    int age = 20;

    void showDetails() {
        System.out.println(name + " is " + age + " years old.");
    }
}

public class Main {
    public static void main(String[] args) {
        Student obj = new Student();  // Object created
        obj.showDetails();            // Output: Gourav is 20 years old.
    }
}
`
    },
    {
      title: "3. What is Encapsulation?",
      explanation:
        "Encapsulation means hiding the internal state and requiring all interaction to be performed through an object’s methods. It restricts direct access to some of an object’s components, which can prevent the accidental modification of data. In Java, encapsulation is achieved using access modifiers (private, public, protected) and getter/setter methods.",
      code: ` // Example: Encapsulation in Java
      class Account {
    private int balance = 5000;

    public int getBalance() {
        return balance;
    }

    public void deposit(int amount) {
        balance += amount;
    }
}

public class Main {
    public static void main(String[] args) {
        Account acc = new Account();
        acc.deposit(1500);
        System.out.println("Balance: ₹" + acc.getBalance()); // Balance: ₹6500
    }
}
`
    },
    {
      title: "4. What is Inheritance in Java ?",
      explanation:
        "Inheritance lets one class acquire the fields and methods of another using the extends keyword. It promotes code reusability and establishes a relationship between classes. The class that inherits is called the subclass (or child class), and the class being inherited from is called the superclass (or parent class).",
      code: ` // Example: Inheritance in Java
      class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();   // From Animal
        d.bark();  // From Dog
    }
}
`
    },
    {
      title: "5. What is Polymorphism ?",
      explanation:
        "Polymorphism means the same method name behaves differently depending on the object. It allows methods to do different things based on the object that it is acting upon. In Java, polymorphism can be achieved through method overloading (compile-time polymorphism) and method overriding (runtime polymorphism).",
      code: ` // Example: Polymorphism in Java
      class Shape {
    void draw() {
        System.out.println("Drawing a shape.");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle.");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape s = new Circle();  // Polymorphic object
        s.draw();  // Output: Drawing a circle.
    }
}
`
    },
    {
      title: "6. What is Abstraction ?",
      explanation:
        "Abstraction hides complex implementation and shows only essential information. In Java, abstraction can be achieved using abstract classes and interfaces. It allows you to define methods that must be implemented by subclasses, while hiding the implementation details.",
      code: ` // Example: Abstraction in Java
      abstract class Vehicle {
    abstract void start();
}

class Car extends Vehicle {
    void start() {
        System.out.println("Car starts with key.");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.start();  // Output: Car starts with key.
    }
}
`
    },
    {
      title: "7. What is the Difference Between Abstract Class and Interface in Java ?",
      explanation:
        "An abstract class can have both abstract and non-abstract methods, while an interface can only have abstract methods (until Java 8+). An abstract class can have constructors and instance variables, while an interface cannot. A class can extend only one abstract class but can implement multiple interfaces.Abstract classes support single inheritance, whereas interfaces support multiple inheritance.",
      code: ` // Example: Abstract Class and Interface in Java
    // Abstract Class Example:
      abstract class Animal {
    abstract void makeSound();
    void sleep() {
        System.out.println("Sleeping...");
    }
}
    //  Code Example of Interface:
    interface Printable {
    void print();
}

class Document implements Printable {
    public void print() {
        System.out.println("Printing document...");
    }
}

`
    },
    {
      title: "8. Constructor in Java ?",
      explanation:
        "A constructor is a special method used to initialize objects. It has the same name as the class and is called automatically when an object is created. Constructors can have parameters, allowing you to pass values when creating an object. If no constructor is defined, Java provides a default constructor.",
      code: ` // Example: Constructor in Java
     class Student {
    String name;

    // Constructor
    Student(String n) {
        name = n;
    }

    void display() {
        System.out.println("Name: " + name);
    }
}
`
    },
    {
      title: "9. What is Method Overloading ?",
      explanation:
        "Method overloading means defining multiple methods with the same name but different parameters in the same class (compile-time polymorphism). It allows you to perform different tasks with the same method name, depending on the parameters passed.",
      code: ` // Example: Method Overloading in Java
      class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}
`
    },
    {
      title: "10. What is Method Overriding ?",
      explanation:
        "Method overriding means redefining a method of the parent class in the child class (run-time polymorphism). It allows a subclass to provide a specific implementation of a method that is already defined in its superclass. The method in the child class must have the same name, return type, and parameters as the method in the parent class.",
      code: ` // Example: Method Overriding in Java
      class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}
`
    },
    {
      title: "11.  What is the this keyword in Java ?",
      explanation:
        "The this keyword refers to the current object of the class and is used to differentiate between instance variables and parameters with the same name. It is also used to invoke other constructors in the same class.",
      code: ` // Example: this keyword in Java
     class Student {
    String name;

    Student(String name) {
        this.name = name;  // Refers to the current object
    }

    void display() {
        System.out.println("Name: " + this.name);
    }
}
`
    },
    {
      title: "12. What is Constructor Overloading in Java?",
      explanation:
        "Constructor overloading means having multiple constructors in a class with different parameter lists. It allows you to create objects in different ways, depending on the parameters passed during object creation.",
      code: ` // Example : Of Constructor Overloading in Java   
    class Book {
    String title;
    int pages;

    Book(String t) {
        title = t;
    }

    Book(String t, int p) {
        title = t;
        pages = p;
    }

    void show() {
        System.out.println(title + " - " + pages + " pages");
    }
}

`
    },
    {
      title: "13. What is Static Keyword in Java ?",
      explanation:
        "static is used for memory management. It can be applied to variables, methods, blocks, and nested classes. It allows you to create class-level variables and methods that can be accessed without creating an instance of the class. Static members belong to the class rather than any specific object.",
      code: ` // Example : Of Static Keyword  in Java   
   class Counter {
    static int count = 0;

    Counter() {
        count++;
        System.out.println(count);
    }
}
`
    },
    {
      title: "15. What is the use of Super Keyword ?",
      explanation:
        "super is used to refer to the immediate parent class (for constructor or method call). It is used to access parent class methods and constructors, especially when they are overridden in the child class. It helps in differentiating between parent and child class members.",
      code: ` // Example : Of Super keyword  in Java   
 class Parent {
    void message() {
        System.out.println("Hello from parent");
    }
}

class Child extends Parent {
    void message() {
        super.message();  // Call parent method
        System.out.println("Hello from child");
    }
}
`
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
        Learn Core OOPS Concepts in Java With Examples
      </h1>
      <img src="/OOPS2_Image.png"
        alt="OOP JAVA"
        className="w-full md:w-3/4 lg:w-full mx-auto mb-6 rounded-lg shadow-lg" />
      <p className="text-gray-200 mb-4 leading-relaxed text-lg">
        Object-Oriented Programming (OOP) in Java is a programming paradigm based on the concept of objects, which can contain data (fields) and methods (functions). Java is a fully object-oriented language, and understanding OOP concepts is key to mastering Java development.
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

export default OopsBlogDetail;
