
function MessageAfter({ mirror = false, className }) {
  const scale = mirror ? "scale(-1,1)" : "scale(1,1)";
  return (
    <div className="h-14 min-w-8 py-3">
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
    <div className="min-w-14 h-full">
      <img src={src} className="w-14" />
    </div>
  )
}

function MessageBody({ className, children }) {
  return (
    <div className={"grow p-4 rounded-lg shadow-md " + className}>
      {children}
    </div>
  )
}

export function Message({ children }) {
  return (
    <div className="w-full flex flex-row px-2 pl-16 ">
      <MessageBody className="bg-violet-700 text-slate-50">{children}</MessageBody>
      <MessageAfter className="fill-violet-700" />
      <MessageIcon src="icon.png" />
    </div>
  )
}

export function ReplyMessage({ children }) {
  return (
    <div className="w-full flex flex-row px-2 pr-16 ">
      <MessageIcon src="icon.png" />
      <MessageAfter mirror className="fill-violet-100" />
      <MessageBody className="bg-violet-100 text-base">{children}</MessageBody>
    </div>
  )
}
