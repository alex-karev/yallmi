import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div class="flex min-h-screen flex-col bg-gray-100 text-gray-800">
      <div class="flex flex-row w-full py-4 pr-4 content-center items-center justify-between bg-white shadow-md z-10">
        <div class="flex flex-row gap-x-4 w-64 justify-between">
          <div className="flex-grow text-center">
            <button className="font-mono text-xl font-bold"><FontAwesomeIcon icon={faBars} /></button>
          </div>
          <span className="font-mono text-3xl font-bold grow">Yallmi</span>
        </div>
        <span className="font-mono text-xl font-bold">Navbar Right</span>
      </div>
      <div className="flex flex-row w-full grow z-0">
        <aside class="sidebar w-96 md:w-64 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
          <div class="my-4 w-full text-center">
            <span class="font-mono text-xl font-bold tracking-widest">Sidebar</span>
          </div>
          <div class="my-4"></div>
        </aside>
        <main class="main -ml-96 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
          <div class="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">Content</div>
        </main>
      </div>
    </div>
  )
}

export default App;
