'use client';
import Link from 'next/link';

export default function Header(){

const someFnc = () => {
  const but: HTMLElement | null = document.getElementById('btn1');
  if(but !== null){
    but.click();
  }
}

  return (
    <>
      <nav className="relative z-20 bg-gray-800 h-16">
        <div className="px-6 items-center">
          <div className="flex items-center justify-between">          
            <div className="flex-none w-14" title="LaraNext" onClick={someFnc}>
              <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14 text-red-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </Link>
            </div>
            <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />
            <div className="grow peer-checked:translate-x-0 bg-gray-800 fixed inset-0 w-[calc(100%)] translate-x-[-100%] top-16  transition duration-300 md:w-auto md:static md:shadow-none md:translate-x-0 ">
              <div className="md:flex">
                <div className="grow-0 md:grow">
                  <ul className=" px-6  text-white  space-y-0 md:px-12 md:space-y-0 md:flex md:space-x-4 md:pt-2 ">
                    <li className="my-auto p-2 hover:text-blue-400" ><Link onClick={someFnc} href="#">Mac</Link></li>
                    <li className="my-auto p-2 hover:text-blue-400" ><Link onClick={someFnc} href="#">iPad</Link></li>
                    <li className="my-auto p-2 hover:text-blue-400" ><Link onClick={someFnc} href="#">iPhone</Link></li>
                    <li className="my-auto p-2 hover:text-blue-400" ><Link onClick={someFnc} href="/settings">Settings</Link></li>
                  </ul>
                </div>
                <div className=" flex md:flex-none w-22 items-center pt-2">
                  <ul className=" md:px-4 flex md:flex-row flex-col text-white list-none cursor-pointer select-none mx-2">
                    <li className="md:mr-2 p-2  md:bg-sky-900 md:hover:bg-sky-700 hover:text-blue-400 rounded-md md:active:bg-sky-500 w-24 text-center" onClick={someFnc}><Link href="/login">Sign In</Link></li>
                    <li className=" p-2 md:bg-sky-900 md:hover:bg-sky-700 hover:text-blue-400 rounded-md md:active:bg-sky-500 w-24 text-center" onClick={someFnc}><Link href="/register">Sign Up</Link></li>
                  </ul>                 
                </div>
              </div>                
            </div>
            <div className="flex-none w-18 text-white hover:text-blue-400">
              <label id="btn1" htmlFor="hamburger" className="peer-checked:hamburger block relative z-20  cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </label>
            </div>                         
          </div>
        </div>
      </nav>
    </>
  )
}