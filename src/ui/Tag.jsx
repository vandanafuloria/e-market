export default function Tag({ name, onClick }) {
  return (
    <span>
      <button style={{ margin: 5 }}>
        <span>{name}</span>
        <i onClick={() => onClick(name)} className="fa-solid fa-xmark"></i>
      </button>
    </span>
  );
}
