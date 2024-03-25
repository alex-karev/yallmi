import { faBars, faGear, faPaperPlane, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, IconTextButton } from "./components/Button";
import { useState } from "react";
import { Message } from "./components/Message";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const sidebarStateClass = sidebarOpen ? "is-sidebar-open" : "is-sidebar-closed";
  const messages = Array(100).fill("...");
  const topics = Array(100).fill("Topic");
  return (
    <div className="h-screen \
      flex flex-col \
      bg-gray-100 text-gray-800">

      <div className="flex flex-row \
        w-full \
        content-center items-center justify-between \
        bg-white p-4 shadow-md z-20">
        <IconButton icon={faBars} onClick={e => setSidebarOpen(!sidebarOpen)} />
        <div className="grow text-center">
          <span className="text-xl">Topic 1</span>
        </div>
        <IconButton icon={faPenToSquare} />
      </div>

      <div className={"relative grow w-full \
        md:flex md:flex-row \
        group "+ sidebarStateClass}>

        <aside className="absolute md:static \
          top-0 left-0 \
          flex flex-col \
          w-full md:w-96 h-full \
          group-[.is-sidebar-closed]:-translate-x-full \
          transform transition-transform duration-150 ease-in \
          bg-slate-100 md:shadow-lg py-2 px-4 pt-8 z-10">

          <div className="w-full text-center">
            <span className="font-mono text-3xl font-bold">YaLLMi</span>
          </div>

          <div className="grow relative">
            <div className="absolute top-0 left-0 \
              w-full h-full \
              flex flex-col \
              px-1 py-4 gap-y-2 \
              overflow-y-scroll \
              overscroll-y-contain snap-y">
              {topics.map((value, index) => (
                <button key={index} className="p-2 bg-violet-100 rounded-md text-base hover:bg-violet-200 active:ring active:ring-violet-400 w-full text-left">{value} {index + 1}</button>
              ))}
            </div>
          </div>

          <div className="w-full py-4 flex flex-col">
            <IconTextButton icon={faGear}>Settings</IconTextButton>
          </div>

        </aside>

        <main className="absolute md:static \
          top-0 left-0 \
          md:group-[.is-sidebar-closed]:-ml-96 \
          w-full h-full \
          flex flex-col \
          trasition-all duration-150 ease-in \
          bg-white px-2 z-0">

          <div className="grow relative">
            <div className="absolute left-0 top-0 \
              w-full h-full \
              flex justify-center \
              overflow-y-scroll \
              overscroll-y-contain snap-y">
              <div className="flex flex-col gap-y-12 py-6 w-full max-w-[52rem]">
                {messages.map((value, index) => (
                  <Message key={index} icon={index % 2 != 0 ? "robot.png" : "user.png"} isReply={index % 2 != 0}>{value}</Message>
                ))}
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
