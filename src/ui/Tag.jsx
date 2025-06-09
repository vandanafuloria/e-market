export default function Tag({ text, tags, setTags }) {
  {
    console.log("this is tag", text);
  }
  return (
    <span>
      <button style={{ margin: 5 }}>
        {text}{" "}
        <i
          onClick={() => {
            const newTags = tags.filter((tag) => tag != text);
            setTags(newTags);
          }}
          className="fa-solid fa-xmark"
          t
        ></i>
      </button>
    </span>
  );
}
