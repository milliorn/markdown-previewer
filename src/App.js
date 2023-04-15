/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { marked } from "marked";
import { Header } from "./components/Header";

function App() {
  const currentYear = new Date().getFullYear();

  const defaultMarkdown = `# Heading 1
## Heading 2
[Link](https://www.example.com/)
\`Inline code\`
\`\`\`
// Code block
function example() {
  return "Hello, world!";
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150x150)
**Bolded text**`;

  // Set the state for the textarea
  const [text, setText] = useState(defaultMarkdown);

  // On initial render, set the preview
  useEffect(() => {
    const preview = document.getElementById("preview");
    preview.innerHTML = marked(text, { breaks: true }); // Set option "breaks" to true to interpret carriage returns as line breaks
  }, []);

  // Handle changes in textarea
  const handleChange = (e) => {
    const preview = document.getElementById("preview");
    setText(e.target.value); // Set new text state
    preview.innerHTML = marked(e.target.value, { breaks: true }); // Update the preview with new text, carriage returns as line breaks
  };

  return (
    <div className="bg-sky-400 dark:bg-sky-950 min-h-screen flex flex-col justify-between">
      <div>
        <Header />

        <div className="flex flex-col items-center justify-center min-h-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-0 bg-sky-100 w-72 sm:w-10/12 text-center rounded-t-md max-w-7xl">
            Enter your text here:
          </h2>

          <textarea
            aria-label="Add text here"
            id="editor"
            className="w-72 sm:w-10/12 h-64 max-w-7xl p-2 border-2 border-sky-400 rounded-b-md shadow-md resize-none focus:outline-none bg-sky-50"
            value={text}
            onChange={handleChange}
          ></textarea>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-0 bg-sky-100 w-72 sm:w-10/12 text-center mt-4 rounded-t-md max-w-7xl">
            Preview:
          </h2>

          <div
            id="preview"
            className="w-72 sm:w-10/12 h-64 max-w-7xl p-2 mt-0 border-2 border-sky-400 shadow-md overflow-y-auto bg-sky-50 rounded-b-md"
          ></div>
        </div>
      </div>

      <footer className="flex justify-center text-sky-50">
        <p className="my-8">
          &copy; {currentYear}{" "}
          <a
            href="https://github.com/milliorn"
            alt="github"
            target="_blank"
            rel="noreferrer"
            aria-label="link to source code on Github"
          >
            Scott Milliorn
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;


