function printHello() {
  console.log("Hello!");
}

function demo() {
  console.log("demo mast tha😭");
}
function test() {
  console.log("fail ho gya ye to 😭");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me</button>
      <p onClick={demo}>Event ka demo le rhe h😂</p>
      <p onMouseOver={test}>
        We are back again taking the demo of this para. Will it have the courage
        to pass the test. Let's see.
      </p>
    </div>
  );
}
