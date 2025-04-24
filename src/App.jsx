import HeaderLeft from "./components/HeaderLeft";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className = "flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft/>
        <main className="flex-[3]">
          <Home/>
          <Experience/>
          <Projects/>
          <Contact/>
        </main>
      </div>
    </>
  );
}

export default App;
