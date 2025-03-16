import LoadingSpinner from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="animate-fade-in text-center">
        <LoadingSpinner className="mb-4 text-pink-400" />
        <p className="text-gray-400">Loading courses...</p>
      </div>
    </div>
  )
}

