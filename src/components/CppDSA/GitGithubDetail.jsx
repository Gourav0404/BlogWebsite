import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success(' Code copied to clipboard!');
};

const GitGithubDetail = () => {
  const navigate = useNavigate();

  const topics = [
     {
    title: "1. What is Git?",
    explanation:
      "Git is a distributed version control system used to track changes in source code during software development. It helps multiple developers collaborate by keeping track of every modification in the project over time.",
    code: `// Git doesn't need a code example; it's a CLI tool.
// Basic command to initialize a new repo:
git init`
  },
  {
    title: "2. What is GitHub?",
    explanation:
      "GitHub is a cloud-based platform that uses Git for version control. It allows developers to store, manage, and collaborate on code repositories online. GitHub offers features like pull requests, issues, and actions to streamline development workflows.",
    code: `// Example: Cloning a GitHub repository
git clone https://github.com/username/repo-name.git`
  },
  {
    title: "3. git init",
    explanation:
      "Initializes a new Git repository in your local folder. It creates a hidden `.git` folder where Git stores all its metadata and version history.",
    code: `git init`
  },
  {
    title: "4. git clone",
    explanation:
      "Creates a local copy of a remote Git repository. Useful when you want to contribute to or work on an existing project.",
    code: `git clone https://github.com/username/project.git`
  },
  {
    title: "5. git status",
    explanation:
      "Displays the state of the working directory and staging area. Shows which files are modified, staged, or untracked.",
    code: `git status`
  },
  {
    title: "6. git add",
    explanation:
      "Adds file changes from the working directory to the staging area. Use `git add .` to stage all changed files.",
    code: `git add index.html`
  },
  {
    title: "7. git commit",
    explanation:
      "Saves the staged changes to the local repository history with a descriptive message.",
    code: `git commit -m "Add new blog post about Git basics"`
  },
  {
    title: "8. git push",
    explanation:
      "Uploads your local commits to a remote repository like GitHub. This makes your changes visible to others.",
    code: `git push origin main`
  },
  {
    title: "9. git pull",
    explanation:
      "Fetches and merges changes from a remote repository into your current local branch.",
    code: `git pull origin main`
  },
  {
    title: "10. git branch",
    explanation:
      "Lists all branches in the repository. You can also create or delete branches using this command.",
    code: `git branch new-feature`
  },
  {
    title: "11. git checkout",
    explanation:
      "Switches between branches or restores working tree files. Useful for jumping between features or versions.",
    code: `git checkout new-feature`
  },
  {
    title: "12. git merge",
    explanation:
      "Merges the changes from a different branch into your current branch. Commonly used to integrate a feature branch into `main`.",
    code: `git merge new-feature`
  },
  {
    title: "13. git remote -v",
    explanation:
      "Shows the URLs of remote repositories connected to your local project.",
    code: `git remote -v`
  },
  {
    title: "14. git log",
    explanation:
      "Displays the commit history of the current branch, including commit hashes, authors, and messages.",
    code: `git log`
  },
  {
    title: "15. git reset",
    explanation:
      "Reverts your repository to a previous state. Can unstage files or undo commits depending on flags used.",
    code: `git reset --soft HEAD~1`
  },
  {
    title: "16. git rm",
    explanation:
      "Removes files from the working directory and stages the removal for commit.",
    code: `git rm old_file.js`
  },
  {
    title: "17. git stash",
    explanation:
      "Temporarily saves modified files that are not yet staged so you can work on something else and come back later.",
    code: `git stash`
  },
  {
    title: "18. git rebase",
    explanation:
      "Moves or combines a sequence of commits to a new base commit. Often used to clean up a messy history.",
    code: `git rebase main`
  },
  {
    title: "19. git diff",
    explanation:
      "Shows the difference between files or commits. Helps identify changes not yet staged or committed.",
    code: `git diff`
  },
  {
    title: "20. git config",
    explanation:
      "Sets configuration options for Git like username and email. Use --global to set them globally.",
    code: `git config --global user.name "Your Name"`
  },
  {
    title: "21. .gitignore File",
    explanation:
      "Specifies which files or directories to ignore in a Git repository. Useful for excluding node_modules, logs, env files, etc.",
    code: `// .gitignore example
node_modules/
.env
.DS_Store`
  },
  {
    title: "22. Fork vs Clone",
    explanation:
      "Fork creates a copy of someone else's repository in your GitHub account. Clone creates a local copy of a repository on your system.",
    code: `// Fork on GitHub UI, then:
git clone https://github.com/yourusername/forked-repo.git`
  },
  {
    title: "23. Pull Request (PR)",
    explanation:
      "A pull request is a way to submit changes to a project on GitHub. It allows maintainers to review and merge your code.",
    code: `// Pull request is made via GitHub UI after pushing your changes.`
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
        Learn Git & Github A Complete Guide With US
      </h1>
      <img src="/GitGithubDeltailImage.png"
        alt="Git & Github"
        className="w-full md:w-3/4 lg:w-full mx-auto mb-6 rounded-lg shadow-lg" />
      <p className="text-gray-200 mb-4 leading-relaxed text-lg">
        This blog post provides a comprehensive guide to Git and GitHub for beginners, including setting up Git locally, creating repositories, understanding key commands, and learning how to push code to GitHub. It also explains the differences between Git and GitHub, how version control works, and how to collaborate on projects using pull requests and branches.
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

export default GitGithubDetail;
