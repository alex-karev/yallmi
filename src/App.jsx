import { faBars, faGear, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton, IconTextButton } from "./components/Button";
import { useState } from "react";
import { Message, ReplyMessage } from "./components/Message";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const sidebarStateClass = sidebarOpen ? "is-sidebar-open" : "is-sidebar-closed";
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
          <span className="text-xl">[Dialog name]</span>
        </div>
        <IconButton icon={faGear} />
      </div>

      <div className={"relative grow w-full \
        md:flex md:flex-row \
        group "+ sidebarStateClass}>

        <aside className="absolute md:static \
          top-0 left-0 \
          w-full md:w-96 h-full \
          group-[.is-sidebar-closed]:-translate-x-full \
          transform transition-transform duration-150 ease-in \
          bg-violet-50 shadow-md p-4 z-10">
          <div className="my-4 w-full text-center">
            <span className="font-mono text-3xl font-bold">YaLLMi</span>
          </div>
          <div className="my-4">
            <div className="flex flex-col gap-y-2">
              <button className="p-2 bg-violet-200 rounded-md text-base w-full text-left">Dialog One</button>
              <button className="p-2 bg-violet-200 rounded-md text-base w-full text-left">Dialog Two</button>
              <button className="p-2 bg-violet-200 rounded-md text-base w-full text-left">Dialog Three</button>
            </div>
          </div>
        </aside>

        <main className="absolute md:static \
          top-0 left-0 \
          md:group-[.is-sidebar-closed]:-ml-96 \
          w-full h-full \
          flex flex-col \
          trasition-all duration-150 ease-in \
          bg-white z-0">


          <div className="grow relative">
            <div className="absolute top-0 left-0 \
              w-full h-full \
              flex flex-col \
              gap-y-6 pt-6 \
              overflow-y-scroll \
              overscroll-y-contain">
              <Message>...</Message>
              <ReplyMessage>...</ReplyMessage>
              <Message>...</Message>
              <ReplyMessage>...</ReplyMessage>
              <Message>...</Message>
              <ReplyMessage>...</ReplyMessage>
              <Message>...</Message>
              <ReplyMessage>...</ReplyMessage>
              <Message>...</Message>
              <ReplyMessage>...</ReplyMessage>
              <Message>...</Message>
              <ReplyMessage>...</ReplyMessage>

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
