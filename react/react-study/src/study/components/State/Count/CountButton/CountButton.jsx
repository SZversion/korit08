function CountButton({ value, text, onClick }) {
  console.log("CountButton Rendering");
  return (
    <button value={value} onClick={onClick}>
      {text}
    </button>
  );
}

export default CountButton;
