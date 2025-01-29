import "./FooBar.js";

function App() {
  return (
    <foo-bar
      onfoobarclick={() => {
        // TypeError
        // Property 'onfoobarclick' does not exist on type 'WebComponentProps<FooBar>'
        console.log("foobar clicked");
      }}
      onfoobar-click={() => {
        console.log("foobar clicked");
      }}
    >
      test
    </foo-bar>
  );
}

export default App;
