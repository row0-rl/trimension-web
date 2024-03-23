import Link from "next/link";
import Footer from "../footer";
import Navigation from "../nav";

export default function Home() {
  return (
    <main className="bg-black m-0">
      <Navigation />
      <section>
        <div className="mx-auto py-32 text-center bg-login">
          <img
            src="/images/background.png"
            loading="lazy"
            sizes="54.53125px"
            srcSet="/images/background-p-500.png 500w, /images/background-p-800.png 800w, /images/background-p-1080.png 1080w, /images/background-p-1600.png 1600w, /images/background.png 2211w"
            alt=""
            className="h-12 text-center inline-block"
          />
          <div className="text-white text-center mt-8 text-3xl">
            Log in to Trimension
          </div>
          <div className="text-gray-500 mt-3 text-base">Welcome Back!</div>
          <a
            href="#"
            className="w-60 text-gray-400 text-center bg-black bg-button rounded-lg mt-5 inline-block py-2"
          >
             Continue with Apple
          </a>
          <div className="text-gray-400 text-center mt-3">
            <span className="line-through text-[rgba(255, 255, 255, .31)]">
              {" "}
                                           
            </span>
              or  
            <span className="line-through text-[rgba(255, 255, 255, .31)]">
              {" "}
                                           
            </span>
          </div>
          <div className="text-center content-center items-center mt-3 inline-block">
            <div className="w-60 text-center content-center items-center block mb-4">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="w-60 text-center"
                data-wf-page-id="658ec2e77b58e8edf268758e"
                data-wf-element-id="47ba9549-5cbc-079e-8d20-d002956a330f"
              >
                <input
                  className="text-gray-400 bg-input border border-input rounded-lg mb-0 w-full px-3 py-2"
                  maxLength={256}
                  name="Email-address"
                  data-name="Email address"
                  placeholder="Email address"
                  type="email"
                  id="Email-address"
                  required={true}
                />
                <input
                  className="text-gray-400 bg-input border border-input rounded-lg mt-3 mb-0 w-full px-3 py-2"
                  maxLength={256}
                  name="Password"
                  data-name="Password"
                  placeholder="Password"
                  type="password"
                  id="Password"
                  required={true}
                />
                <input
                  type="submit"
                  data-wait="Logging in..."
                  className="w-60 text-gray-400 text-center bg-black bg-button rounded-lg mt-5 inline-block py-2"
                  value="Login"
                />
              </form>
              {/* <div className="hidden p-5 text-center bg-gray-100"></div>
              <div className="hidden mt-2 p-2 bg-gray-100">
                <div>Oops! Something went wrong while logging in.</div>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link
              href="/signup"
              className="text-[rgba(255,255,255,.52)] text-center no-underline"
            >
              First time here? Sign up <span className="text-xs">➡</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
