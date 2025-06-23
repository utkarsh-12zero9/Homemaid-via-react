function Button({ content, onClick }) {
  return (
    <>
      <button className="px-8 py-2 border rounded-full bg-[#00246B] text-white font-bold cursor-pointer hover:scale-105 " onClick={onClick}> {content} </button>
    </>
  );
}

export default Button;
