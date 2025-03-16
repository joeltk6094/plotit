import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-3xl font-bold mb-4">Course Not Found</h2>
        <p className="text-gray-400 max-w-md mb-8">The course you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/courses">Browse All Courses</Link>
        </Button>
      </main>
    </div>
  )
}

