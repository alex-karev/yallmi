import { faBars, faGear, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, IconTextButton } from "./components/Button";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-800">
      <div className="flex flex-row w-full p-4 content-center items-center justify-between bg-white shadow-md z-10">
        <IconButton icon={faBars} />
        <div className="grow text-center">
          <span className="text-xl">[Dialog name]</span>
        </div>
        <IconButton icon={faGear} />
      </div>
      <div className="flex flex-row w-full grow z-0">

        <aside className="w-96 md:w-64 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
          <div className="my-4 w-full text-center">
            <span className="font-mono text-3xl font-bold">YaLLMi</span>
          </div>
          <div className="my-4">
            <div className="flex flex-col gap-y-2">
              <button className="p-2 bg-violet-100 rounded-md text-base w-full text-left">Dialog One</button>
              <button className="p-2 bg-violet-100 rounded-md text-base w-full text-left">Dialog Two</button>
              <button className="p-2 bg-violet-100 rounded-md text-base w-full text-left">Dialog Three</button>
            </div>
          </div>
        </aside>

        <main className="main -ml-96 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0 bg-white">

          <div className="grow flex flex-col">

            <div className="w-full p-4 pl-16 flex flex-row gap-x-4">
              <div className="grow flex flex-row">
                <div className="grow p-4 bg-violet-700 text-slate-50 text-base rounded-lg shadow-md">
                  <span>Question...</span>
                </div>
                <div className="h-14 w-8 flex content-center">
                  <svg className="fill-violet-700"
                    viewBox="0 0 100 100">
                    <path d="M0 0 L0 100 L75 0 z" />
                  </svg>
                </div>
              </div>
              <div className="w-14">
                <img src="icon.png" className="w-14" />
              </div>
            </div>

            <div className="w-full p-4 pr-16 flex flex-row gap-x-4">
              <div className="w-14">
                <img src="icon.png" className="w-14" />
              </div>
              <div className="grow flex flex-row">
                <div className="h-14 w-8 py-1 flex content-center">
                  <svg className="fill-violet-100"
                    viewBox="0 0 100 100"
                    transform="scale(-1,1)">
                    <path d="M0 0 L0 100 L75 0 z" />
                  </svg>
                </div>
                <div className="grow p-4 bg-violet-100 text-base rounded-lg shadow-md">
                  <span>Answer...</span>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full p-4">
            <div className="bg-violet-100 shadow-md rounded-lg p-6 flex flex-row gap-x-4">
              <textarea rows={1} className="grow p-2" />
              <IconButton icon={faPaperPlane} />
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}

export default App;
