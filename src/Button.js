function MyButton({calcfunction}) {
   
  function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={calcfunction}>
        Click me
      </button>
    );
  }
  
  export default MyButton;