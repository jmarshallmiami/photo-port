import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div>
      {/* imported navigation component */}
      <Nav />
      <main>
        {/* imported about section component */}
        <About />
      </main>
    </div>
  );
}

export default App;
