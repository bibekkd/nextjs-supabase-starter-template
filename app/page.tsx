import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center">
        <div className="flex items-center gap-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={24}
            priority
          />
          <span className="text-2xl font-bold">+</span>
          <Image
            src="/supabase.svg"
            alt="Supabase logo"
            width={120}
            height={24}
            priority
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tight">
          Next.js + Supabase Template
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-[600px]">
          A modern starter template for building full-stack applications with Next.js and Supabase.
          Get started with authentication, database, and real-time features out of the box.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/sign-in"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
          >
            Sign Up
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold mb-2">Authentication</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Ready-to-use auth with email, magic links, and social providers</p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold mb-2">Database</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">PostgreSQL database with real-time subscriptions</p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold mb-2">Storage</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">File storage with access control and transformations</p>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://supabase.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Supabase Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/supabase/supabase"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
