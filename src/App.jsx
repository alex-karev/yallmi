import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="h-dvh flex flex-col">
      <div className="grow flex">
        <div className="h-full w-full sm:w-72 lg:w-96 shadow-inner p-6 z-10">
          <span>Sidebar</span>
        </div>
        <div className="hidden sm:block h-full grow shadow-inner p-6 z-0">
          <span>Content</span>
        </div>
      </div>
      <div className="shadow-inner w-full content-center p-2 z-20">
        <span>Command Line</span>
      </div>
    </div>
  )
}

export default App;
