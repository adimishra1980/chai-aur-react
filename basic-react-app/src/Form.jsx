function handleForSubmit(event) {
  event.preventDefault();
  console.log("form was submitted");
}

export default function From() {
  return (
    <form>
      <input placeholder="write something" />
      <button onClick={handleForSubmit}>Submit</button>
    </form>
  );
}
