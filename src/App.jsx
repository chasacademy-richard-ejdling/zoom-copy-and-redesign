import { BsSearch } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdArrowForwardIos } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { BsCashCoin } from "react-icons/bs";
import { RiGovernmentLine } from "react-icons/ri";
import { RiFirstAidKitLine } from "react-icons/ri";
import { SlSocialDropbox } from "react-icons/sl";
import { SlTag } from "react-icons/sl";
import './app.css';
import Card from './Card';

function App() {
  return (
    <div className="font-Noto-Sans">
      <header className="bg-white sticky top-0 z-10">
        <nav className="flex justify-between max-w-[1400px] pxauto p-4 items-center">
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
        <div className="hero">
          <section className="flex flex-col md:flex-row max-w-[1400px] md:m-auto">
            <div className="flex flex-col justify-center mx-6 mt-4 md:my-10">
              <h1 className="font-Montserrat text-4xl xl:text-6xl font-semibold mb-4">One plattform <br />to <span className="text-zoom-blue">connect</span></h1>
              <p className="xl:text-lg text-slate-800">Bring teams together, reimagine workspaces, engage new audiences, and delight your customers — all on the Zoom platform you know and love.</p>
              <div className="flex gap-4 mt-4">
                <a href="" className="bg-zoom-blue hover:bg-zoom-blue-hover px-4 py-1.5 xl:py-3 xl:px-6 rounded-full text-white">Plans & Pricing</a>
                <a href="" className="flex items-center text-zoom-blue hover:text-blue-800">Sign Up, It's Free<MdArrowForwardIos className="ml-2" /></a>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#F7F7F8] mt-12 h-46 md:justify-start md:mt-0 md:h-auto xl:h-[30rem] md:w-[70%] md:ml-10">
              <img src="https://explore.zoom.us/media/woman-desk-640x427.jpg" alt="Zoom meeting" className="rounded-3xl h-40 min-[420px]:h-48 xl:h-80 relative bottom-6 min-[420px]:right-[10%] md:bottom-auto md:right-10 md:object-cover" />
            </div>
          </section>
        </div>
        <section className="bg-[#00053d]">
          <div className="md:flex md:items-center md:h-[300px] xl:h-[360px] p-8 pt-0 md:p-8 max-w-7xl md:mx-auto">
            <img src="https://st2.zoom.us/static/6.3.10973/image/home2/zm-product-wheel.png" alt="Zoom product wheel" className="relative md:-top-[4.5rem] xl:-top-11 h-80 md:h-[389px] m-auto object-contain" />
            <div className="flex flex-col gap-4">
              <h1 className="font-Montserrat text-4xl xl:text-6xl text-white font-semibold">Make work less work</h1>
              <p className="text-blue-100">Securely connect and collaborate so you can work better together. Simple to manage and delightful to use, Zoom powers the modern workforce.</p>
              <a href="" className="text-white hover:text-blue-200 flex items-center w-fit">Discover the Possibilities<MdArrowForwardIos className="ml-2" /></a>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row px-6 my-6 md:mt-12 xl:mt-6 gap-4 max-w-[1400px] xl:mx-auto">
          <div className="md:flex md:flex-col md:justify-center md:w-1 md:grow">
            <h1 className="font-Montserrat text-2xl xl:text-4xl font-semibold">Powering organizations across industries and geographies</h1>
            <p className="text-slate-800 my-4 xl:text-lg">Zoom helps consolidate communications, connect people, and collaborate better together in the boardroom, classroom, operating room, and everywhere in between.</p>
            <a href="" className="inline-block rounded-full bg-[#00ede7] px-4 py-1 xl: hover:bg-[#00e0db] w-fit">Explore Industry Solutions</a>
          </div>
          <ul className="flex flex-wrap md:w-1 md:grow">
            <Card title="Education" icon={<SlGraduation size={29} />} />
            <Card title="Financial Services" icon={<BsCashCoin size={29} />} />
            <Card title="Government" icon={<RiGovernmentLine size={29} />} />
            <Card title="Healthcare" icon={<RiFirstAidKitLine size={29} />} />
            <Card title="Manufacturing" icon={<SlSocialDropbox size={29} />} />
            <Card title="Retail" icon={<SlTag size={29} />} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
