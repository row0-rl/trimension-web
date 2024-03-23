import { Client } from "appwrite";
import Image from "next/image";
import Navigation from "./nav";
import Footer from "./footer";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('652d954fcadd7f7f81b5');

export default function Home() {
  return (
    <main className="bg-black m-0">
      <Navigation />
      <section className="mt-16">
        <div className="block mx-auto text-center mt-0 max-w-[940px]">
          <img
            src="/images/background.png"
            loading="lazy"
            sizes="(max-width: 767px) 100vw, 654.4609375px"
            srcSet="/images/background-p-500.png 500w, /images/background-p-800.png 800w, /images/background-p-1080.png 1080w, /images/background-p-1600.png 1600w, /images/background.png 2211w"
            alt=""
            className="h-[600px] text-left inline-block"
          />
        </div>
        <div className="text-center mt-[-163px] block relative">
          <div className="text-white text-center text-xl static">About...</div>
          <img
            src="/images/trimension.png"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, 804.84375px"
            srcSet="/images/trimension-p-500.png 500w, /images/trimension-p-800.png 800w, /images/trimension-p-1080.png 1080w, /images/trimension.png 1515w"
            alt=""
            className="h-20 mt-20 inline-block"
          />
          <p className="h-24 text-gray-600 mt-9 ml-25 mr-25 pb-0 text-lg font-normal leading-relaxed">
            Trimension is a wallpaper platform designed for Mac system. It not
            only provides its own wallpapers, but also collects many well-known
            wallpaper creators, and provides a safe and secure pre-sales and
            after-sales platform for creators and lovers. Trimension introduced
            a unified wallpaper display, users just upload a video, etc., can
            get a live wallpaper display on the Mac desktop.{" "}
          </p>
        </div>
      </section>
      <div className="flex justify-center items-center mt-16 mx-auto max-w-[940px]">
        <a
          href="#"
          className="w-48 h-10 text-center mix-blend-normal bg-black text-white
        bg-download rounded-2xl justify-center items-center flex shadow-download"
        >
          Download for Mac
        </a>
      </div>
      <section className="mt-32">
        <div className="flex items-center mx-auto max-w-[940px]">
          <img
            src="/images/WechatIMG9950.jpeg"
            loading="lazy"
            width="680"
            sizes="(max-width: 767px) 100vw, 680px"
            alt=""
            srcSet="/images/WechatIMG9950-p-500.jpeg 500w, images/WechatIMG9950-p-800.jpeg 800w, images/WechatIMG9950-p-1080.jpeg 1080w, images/WechatIMG9950.jpeg 1446w"
          />
          <div className="flex flex-col">
            <a
              href="#"
              className="text-gray-200 mt-4 text-base no-underline hover:text-white"
            >
              Wallpapers
            </a>
            <a
              href="#"
              className="text-gray-200 mt-4 text-base no-underline hover:text-white"
            >
              Widgets
            </a>
            <a
              href="#"
              className="text-gray-200 mt-4 text-base no-underline hover:text-white"
            >
              Customize
            </a>
            <a
              href="#"
              className="text-[#8549ff] mt-7 no-underline hover:text-[#a478fc]"
            >
              View More...
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
