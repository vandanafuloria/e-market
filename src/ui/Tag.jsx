export default function Tag({ name, onClick }) {
  return (
    <div>
      <button style={{ margin: 5 }}>
        <span>{name}</span>
        <i onClick={() => onClick()} className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}
