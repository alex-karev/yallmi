
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
    <div className="w-14 h-14 rounded-full">
      <img src={src} className="object-cover" />
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

export function Message({ isReply = false, icon="icon.png", ...props }) {
  if (isReply) {
    return (
      <div {...props} className="w-full flex flex-row px-2 pr-16 snap-center">
        <MessageIcon src={icon} />
        <MessageAfter mirror className="fill-violet-100" />
        <MessageBody className="bg-violet-100 text-base border-b-4 border-violet-300">{props.children}</MessageBody>
      </div>

    )
  } else {
    return (
      <div {...props} className="w-full flex flex-row px-2 pl-16 snap-center">
        <MessageBody className="bg-violet-600 text-slate-50 border-b-4 border-violet-800">{props.children}</MessageBody>
        <MessageAfter className="fill-violet-600" />
        <MessageIcon src={icon} />
      </div>
    )
  }
}
