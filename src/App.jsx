import { BsSearch } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdArrowForwardIos } from "react-icons/md";

function App() {
  return (
    <div className="font-Noto-Sans">
      <header>
        <nav className="flex justify-between max-w-[1400px] m-auto p-4 items-center">
          <div className="flex min-[810px]:gap-10">
            <a href=""><img src="https://st2.zoom.us/static/6.3.10815/image/new/topNav/Zoom_logo.svg" alt="Zoom logo" /></a>
            <div className="flex gap-10">
              <ul className="hidden min-[1231px]:flex gap-10 text-nav-links">
                <li><a href="" className="hover:text-zoom-blue">Products</a></li>
                <li><a href="" className="hover:text-zoom-blue">Solutions</a></li>
                <li><a href="" className="hover:text-zoom-blue">Resources</a></li>
                <li><a href="" className="hover:text-zoom-blue">Plans & Pricing</a></li>
              </ul>
              <button className="hidden min-[810px]:flex gap-1 items-center text-nav-links hover:text-zoom-blue w-60">
                <BsSearch />
                Search
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="" className="hidden sm:inline border-[1px] rounded-full border-zoom-blue text-zoom-blue px-2 py-1 font-semibold hover:bg-blue-100">Contact Sales</a>
            <a href="" className="hidden sm:inline border-[1px] rounded-full border-zoom-blue text-zoom-blue px-2 py-1 font-semibold hover:bg-blue-100 max-[809px]:mr-8">Sign Up Free</a>
            <button className="hidden max-[809px]:flex gap-1 items-center text-nav-links hover:text-zoom-blue">
              <BsSearch />
            </button>
            <button className="hidden max-[1230px]:flex gap-1 items-center text-nav-links hover:text-zoom-blue ml-8">
              <HiOutlineMenu size={25} />
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section className="flex flex-col md:flex-row md: max-w-[1400px] md:m-auto">
          <div className="flex flex-col mx-6 mt-4  md:my-10">
            <h1 className="font-Montserrat text-4xl font-semibold mb-4">One plattform <br />to <span className="text-zoom-blue">connect</span></h1>
            <p>Bring teams together, reimagine workspaces, engage new audiences, and delight your customers — all on the Zoom platform you know and love.</p>
            <div className="flex gap-4 mt-4">
              <a href="" className="bg-zoom-blue hover:bg-zoom-blue-hover px-4 py-1.5 rounded-full text-white">Plans & Pricing</a>
              <a href="" className="flex items-center text-zoom-blue hover:text-blue-800">Sign Up, It's Free<MdArrowForwardIos className="ml-2"/></a>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#F7F7F8] mt-12 h-46 md:justify-start md:mt-0 md:h-auto md:w-[70%] md:ml-10">
            <img src="https://explore.zoom.us/media/woman-desk-640x427.jpg" alt="Zoom meeting" className="rounded-3xl h-48 relative right-[10%] bottom-6 md:bottom-auto md:right-10" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
