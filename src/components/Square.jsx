function Square({ value, onClick }) {
  return (
    <div className="squareStyle square" onClick={onClick}>
      {value}
    </div>
  );
}

export default Square;
