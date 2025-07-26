import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success(' Code copied to clipboard!');
};

const CppBlogDetail = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "1. What is DSA?",
      explanation:
        "Data Structures and Algorithms (DSA) is the foundation of writing efficient code. It involves organizing and manipulating data efficiently using structures like arrays, lists, trees, and using algorithms for sorting, searching, etc.",
      code: `// Example: Linear Search
#include <iostream>
using namespace std;

int linearSearch(int arr[], int n, int key) {
  for (int i = 0; i < n; i++) {
    if (arr[i] == key) return i;
  }
  return -1;
}

int main() {
  int arr[] = {10, 20, 30, 40};
  int index = linearSearch(arr, 4, 30);
  cout << "Element found at index: " << index;
  return 0;
}`
    },
    {
      title: "2. Time and Space Complexity",
      explanation:
        "Time complexity tells how much time an algorithm takes to run, while space complexity tells how much memory it uses. Big-O notation expresses the worst-case complexity.",
      code: `// Example: Time Complexity O(n)
#include <iostream>
using namespace std;

int main() {
  int n = 5;
  for (int i = 0; i < n; i++) {
    cout << i << " ";
  }
  return 0;
}`
    },
    {
      title: "3. Arrays",
      explanation:
        "Arrays are one of the most fundamental and commonly used data structures in C++. They allow you to store multiple values of the same data type in contiguous memory locations. This means you can access any element directly using its index, which makes arrays very fast for reading and writing operations.",
      code: `#include <iostream>
using namespace std;

int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  for (int i = 0; i < 5; i++) {
    cout << arr[i] << " ";
  }
  return 0;
}`
    },
    {
      title: "4. Linked Lists",
      explanation:
        "A Linked List is a linear data structure where each element (called a node) contains two parts 1.The actual data . 2. A pointer to the next node in the sequence.Unlike arrays, linked lists do not store data in contiguous memory. Each node is dynamically allocated in memory and linked via pointers. This makes linked lists dynamic in size, allowing easy insertions and deletions without shifting elements. These are several types of linked lists: singly linked lists, doubly linked lists, and circular linked lists.",
      code: `#include <iostream>
using namespace std;

struct Node {
  int data;
  Node* next;
};

int main() {
  Node* head = new Node();
  head->data = 10;
  head->next = NULL;
  cout << head->data;
  return 0;
}`
    },
    {
      title: "5. Stacks",
      explanation:
        "A Stack is a linear data structure that follows the LIFO principle – Last In, First Out. This means the element inserted last is the first one to be removed. Think of a stack like a pile of plates: you can only remove the top plate.",
      code: `#include <iostream>
using namespace std;

#define MAX 100
int stack[MAX], top = -1;

void push(int x) {
  stack[++top] = x;
}

int pop() {
  return stack[top--];
}

int main() {
  push(10);
  push(20);
  cout << pop();
  return 0;
}`
    },
    {
      title: "6. Queues",
      explanation:
        "A Queue is a linear data structure that follows the FIFO principle — First In, First Out. This means the element added first is the one that gets removed first, similar to people standing in a line (queue) at a ticket counter.",
      code: `#include <iostream>
using namespace std;

#define SIZE 100
int queue[SIZE], front = -1, rear = -1;

void enqueue(int x) {
  if (rear == SIZE - 1) return;
  if (front == -1) front = 0;
  queue[++rear] = x;
}

int dequeue() {
  return queue[front++];
}

int main() {
  enqueue(10);
  enqueue(20);
  cout << dequeue();
  return 0;
}`
    },
    {
      title: "7. Recursion",
      explanation:
        "Recursion is a programming technique in which a function calls itself to solve smaller instances of the same problem. It breaks a complex problem into simpler sub-problems and solves each one using the same method.",
      code: `#include <iostream>
using namespace std;

int factorial(int n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

int main() {
  cout << factorial(5);
  return 0;
}`
    },
    {
      title: "8. Sorting Algorithms",
      explanation:
        "Sorting algorithms are used to arrange data in a specific order — typically ascending or descending. Sorting is a fundamental operation in computer science that improves the efficiency of searching, comparison, and many other algorithms.",
      code: `#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr[j], arr[j + 1]);
    }
  }
}

int main() {
  int arr[] = {5, 1, 4, 2, 8};
  int n = sizeof(arr) / sizeof(arr[0]);
  bubbleSort(arr, n);
  for (int i = 0; i < n; i++) cout << arr[i] << " ";
  return 0;
}`
    },
    {
      title: "9. Trees",
      explanation:
        "A Tree is a hierarchical data structure used to represent data in a parent-child relationship. Unlike linear structures (arrays, linked lists), trees branch out into multiple paths.The topmost node is called the root, and each node may have child nodes. Trees are widely used in databases, file systems, and hierarchical data modeling.",
      code: `#include <iostream>
using namespace std;

struct Node {
  int data;
  Node* left;
  Node* right;
  Node(int val) : data(val), left(NULL), right(NULL) {}
};

int main() {
  Node* root = new Node(1);
  root->left = new Node(2);
  root->right = new Node(3);
  cout << root->left->data;
  return 0;
}`
    },
    {
      title: "10. Graphs",
      explanation:
        "A Graph is a non-linear data structure consisting of nodes (vertices) and edges. It is used to represent pairwise relationships between objects, like a map of cities connected by roads.Unlike trees, graphs can contain cycles, and there is no concept of a root node. Graphs can be directed or undirected, weighted or unweighted.",
      code: `#include <iostream>
#include <vector>
using namespace std;

void addEdge(vector<int> adj[], int u, int v) {
  adj[u].push_back(v);
  adj[v].push_back(u);
}

int main() {
  vector<int> adj[5];
  addEdge(adj, 0, 1);
  addEdge(adj, 0, 4);
  cout << "Graph created.";
  return 0;
}`
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
        C++ DSA Full Notes
      </h1>
      <img src="/CPPImage.png"
        alt="C++ DSA"
        className="w-full md:w-3/4 lg:w-full mx-auto mb-6 rounded-lg shadow-lg" />
      <p className="text-gray-200 mb-4 leading-relaxed text-lg">
        Welcome to the full guide on Data Structures and Algorithms using C++.
        In this article, we'll cover arrays, linked lists, stacks, queues,
        trees, sorting algorithms, and more. This is perfect for beginners and
        intermediate learners looking to crack interviews or strengthen their
        fundamentals.
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

export default CppBlogDetail;
