import Link from "next/link";

export default function Navigation() {
  return (
    <aside className="fixed top-0 left-0 right-0 z-[999] backdrop-blur">
      <div className="h-[0px] bg-line shadow-line"></div>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="h-14 sticky top-0 z-[1000] bg-[rgba(0,0,0,.14)]"
      >
        <div className="block h-14 items-center mx-auto max-w-[940px]">
          <a href="#" className="pl-2.5"></a>
          <nav
            role="navigation"
            className="flex justify-start items-center float-right -mt-1 relative"
          >
            <Link href="/" className="h-4 text-white p-5 no-underline">
              Home
            </Link>
            <Link href="/gallery" className="h-4 text-white p-5 no-underline">
              Gallery
            </Link>
            <Link href="/docs" className="h-4 text-white p-5 no-underline">
              Docs
            </Link>
            <Link href="/login" className="h-4 text-white p-5 no-underline">
              Login
            </Link>
            <Link href="/" className="h-4 text-white p-5 no-underline">
              Download
            </Link>
          </nav>
          <div className="relative float-right p-4 text-2xl hidden cursor-pointer select-none focus:outline-0 open:bg-gray-400 open:text-white">
            <div className="before:content-['\e602']"></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
