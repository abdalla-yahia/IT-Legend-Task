
export default function Spinner({text}:{text:string}) {
  return (
      <div className="flex items-center justify-center h-full w-full gap-3">
        <div className="h-8 w-8 border-4 border-gray-300 border-t-sky-600 rounded-full animate-spin"></div>
        <span className="text-gray-600 text-lg font-medium">{text}</span>
    </div>
  )
}
