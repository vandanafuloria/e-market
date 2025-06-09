export default function Categories({ categories }) {
  return (
    <div className="tags">
      {categories.map((type) => {
        return (
          <div>
            <button>{type}</button>
          </div>
        );
      })}
    </div>
  );
}
