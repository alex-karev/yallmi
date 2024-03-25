import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Button({ ...props }) {
  return (
    <button {...props} className={`
      flex flex-row content-center items-center 
      gap-x-3 md:gap-x-2 
      text-2xl md:text-xl text-center justify-center
      p-3 md:p-2 
      text-slate-50 bg-violet-600 
      border-b-4 border-violet-800
      hover:bg-violet-700 
      hover:text-slate-100
      hodev:border-violet-900
      active:bg-violet-800 active:text-slate-50 
      active:ring active:ring-violet-500 
      focus:outline-none rounded-lg shadow-md ${props.className}`}>
      {props.children}
    </button >
  )
}

export function IconButton({ icon, ...props }) {
  return (
    <Button {...props}>
      <FontAwesomeIcon className="p-1"
        icon={icon} />
    </Button>
  )
}

export function IconTextButton({ icon, ...props }) {
  return (
    <Button {...props}>
      <div className="w-full flex flex-row items-center content-center">
        <FontAwesomeIcon icon={icon} className="pr-2"/>
        <div className="grow justify-center">
          {props.children}
        </div>
      </div>
    </Button>
  )
}
