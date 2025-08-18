function Lane({ title, children }) {
  return (
    <>
      <div className="bg-white border border-gray-300 rounded-lg flex-1 p-3">
        <h2 className="font-bold mb-3">{title}</h2>
        {children}
      </div>
    </>
  );
}

export default Lane;
