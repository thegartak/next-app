import Image from "next/image";
import Link from 'next/link';
import axios from "axios";
import { Home } from '@/app/ui/home/home';

export default function HomePage() {



  



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       NextJs Main page 
       <Home />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </span>
        <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </span>
        <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </span>
      </footer>
    </div>
  );
}
