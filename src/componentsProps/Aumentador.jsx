function Aumentador({ count, setCount }) {

  
    return (
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    )
  }
  
  export default Aumentador
  