// Functional component that represents the TextArea in the app
export function TextArea(props) {
  const { text, handleChange } = props;
  return (
    <textarea
      aria-label="Add text here"
      id="editor"
      className="w-72 sm:w-10/12 h-64 max-w-7xl p-2 border-2 border-sky-400 rounded-b-md shadow-md resize-none focus:outline-none bg-sky-50"
      value={text}
      onChange={handleChange}
    ></textarea>
  );
}
