import { faCoins, faFont, faPencil, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "./Button";

function MessageAfter({ mirror = false, className }) {
  const scale = mirror ? "scale(-1,1)" : "scale(1,1)";
  return (
    <div className="h-14 min-w-8 py-3 z-30">
      <svg className={className}
        viewBox="0 0 100 100"
        transform={scale}>
        <path d="M0 0 L0 100 L75 0 z" />
      </svg>
    </div>

  )
}

function MessageIcon({ src }) {
  return (
    <div className="w-14 h-14">
      <img src={src} className="object-cover rounded-2xl shadow-md" />
    </div>
  )
}

function MessageBody({ className, children }) {
  return (
    <div className={"group/message min-w-32 p-4 rounded-lg shadow-md relative " + className}>
      {children}
      <div className="hidden group-active/message:flex group-hover/message:flex flex-row absolute p-4 left-0 bottom-0 -mb-12 bg-slate-50 shadow-lg rounded-lg text-black justify-between text-base w-52 z-40">
        <div className="w-fit flex flex-row gap-x-4">
          <div className="w-fit"><button><FontAwesomeIcon icon={faClipboard} /></button></div>
          <div className="w-fit"><button><FontAwesomeIcon icon={faPencil} /></button></div>
        </div>
        <div className="w-fit flex flex-row gap-x-4">
          <div className="w-fit"><FontAwesomeIcon icon={faCoins} /> 69</div>
          <div className="w-fit"><FontAwesomeIcon icon={faFont} /> 96</div>
        </div>
      </div>
    </div>
  )
}

export function Message({ isReply = false, icon = "icon.png", ...props }) {
  if (isReply) {
    return (
      <div {...props} className="flex flex-row px-2 pr-24 snap-center">
        <MessageIcon src={icon} />
        <MessageAfter mirror className="fill-violet-100" />
        <MessageBody className="bg-violet-100 text-base border-b-4 border-violet-300 z-30">{props.children}</MessageBody>
      </div>

    )
  } else {
    return (
      <div {...props} className="flex flex-row px-2 pl-24 snap-center justify-end">
        <MessageBody className="bg-violet-600 text-slate-50 border-b-4 border-violet-800">{props.children}</MessageBody>
        <MessageAfter className="fill-violet-600" />
        <MessageIcon src={icon} />
      </div>
    )
  }
}
