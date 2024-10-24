import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { CiCamera, CiHeart, CiMobile4 } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiHeadphones, PiInstagramLogoFill } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

const iPhoneCyber = () => {
  return (
    <main>
      <nav className="py-6 px-4 flex items-center sm:gap-5 justify-between sm:py-4 sm:px-10 md:px-20 lg:px-40 lg:max-w-[1440px]">
        <div>
          <Image
          className="min-w-16 min-h-6"
            src={"/Cyber iPhone Store/Logo Vector.png"}
            alt="Logo"
            width={65}
            height={23}
          />
        </div>
        <div className="hidden sm:flex items-center sm:w-[372px] sm:h-14 sm:p-4 sm:gap-2 sm:bg-[#F5F5F5]">
          <CiSearch className="text-[#656565]" />
          <p className="text-[#989898]">Search</p>
        </div>
        <div>
          <ul className="hidden sm:flex  sm:gap-12 text-center sm:items-center">
            <li className="text-base">Home</li>
            <li className="text-[#989898] text-base">About</li>
            <li className="text-[#989898] text-base">Contact Us</li>
            <li className="text-[#989898] text-base">Blog</li>
          </ul>
        </div>
        <div className="hidden sm:flex sm:gap-6">
          <CiHeart className="text-2xl" />
          <MdOutlineShoppingCart className="text-2xl" />
          <FiUser className="text-2xl" />
        </div>
        <div className="block sm:hidden">
        <IoMenuSharp className="text-3xl"/>
        </div>
      </nav>
      {/* This is th landing page section */}
      <section className="sm:px-14 md:px-20 lg:px-40 sm:pt-10 md:py-0 pt-[88px] px-4 bg-[#211C24] flex flex-col sm:flex-row items-center gap-16 h-auto">
        <div className="flex flex-col gap-6 sm:items-start items-center">
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-semibold opacity-40 text-white">
              Pro.Beyond.
            </p>
            <h1 className="text-7xl sm:text-8xl text-white font-thin">
              iPhone 14 <span className="font-semibold font-sans">Pro</span>
            </h1>
          </div>
          <p className="text-xl text-[#909090] ">
            Created to change everything for the better. For everyone
          </p>
          <button className="border-2 rounded-md text-white font-medium text-base py-4 px-14">
            Shop Now
          </button>
        </div>
        <div>
          <Image
          className="hidden sm:block sm:min-w-[300px] sm:h-auto md:min-h-[632px] md:min-w-[406px]"
            src={"/Cyber iPhone Store/Iphone Image.png"}
            alt={"iPhone Image"}
            width={406}
            height={632}
          />
          <Image 
          className="block sm:hidden"
            src={"/Cyber iPhone Store/Iphone Image Mobile.png"}
            alt={"iPhone Image"}
            width={406}
            height={632}
          />
        </div>
      </section>
      <section className="flex xl:min-h-[600px] flex-col lg:flex-row ">
        <div className="sm:basis-1/2 flex flex-col min-h-[600px] w-screen">
          <div className="sm:basis-1/2 sm:pr-12 flex gap-6 sm:gap-0 px-4 sm:px-0 py-10 flex-col sm:flex-row sm:items-center sm:max-h-[328px]">
          <div className="flex items-center  sm:justify-start justify-center">
            <Image src={"/Cyber iPhone Store/PlayStation.png"} alt={"Play Station"} className="w-[200px] h-[200px] sm:w-auto sm:h-[328px]" width={400} height={328}/></div>
            <div className="flex flex-col gap-4 sm:items-start items-center">
                <h2 className="sm:text-5xl text-4xl sm:items-start text-center">Playstation 5</h2>
                <p className="text-sm text-[#909090]  sm:items-start text-center">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
            </div>
          <div className="flex sm:basis-1/2 flex-col sm:flex-row sm:max-h-[272px]">
            <div className="sm:basis-1/2 bg-[#EDEDED] px-4 py-10 sm:py-0 sm:px-0 flex sm:flex-row flex-col items-center md:pr-12 gap-7 w-ful">
            <div>
            <Image className="sm:hidden block" src={"/Cyber iPhone Store/headphones 1.png"} alt={"HeadPhones"} width={192} height={200}/>
            <Image className="hidden sm:block" src={"/Cyber iPhone Store/headphones.png"} alt={"HeadPhones"} width={104} height={272}/>
            </div>
            <div className="flex flex-col gap-3 sm:w-40 sm:min-h-[120px]">
                <h3 className="text-3xl font-light text-black ">Apple AirPods <span className="font-bold">Max</span></h3>
                <p className="text-[#909090] text-sm">{"Computational audio. Listen, it's powerful"}</p>
            </div>
            </div>
            <div className="sm:basis-1/2 bg-[#353535] px-4 py-10 sm:py-0 sm:px-0 flex sm:flex-row flex-col items-center md:pr-12 gap-6">
            <div>
            <Image className="block sm:hidden" src={"/Cyber iPhone Store/vr mobile.png"} alt={"VR"} width={325} height={192}/>
            <Image className="hidden sm:block" src={"/Cyber iPhone Store/vr.png"} alt={"VR"} width={136} height={190}/>
            </div>
            <div className="flex flex-col gap-3 sm:w-40 sm:min-h-[120px]">
                <h3 className="text-[34px] sm:text-[29px] font-light text-white ">Apple Vision <span className="font-bold">Pro</span></h3>
                <p className="text-[#909090] text-sm">{"An immersive way to experience entertainment"}</p>
            </div>
            </div>
            </div>
          </div>
        <div className="basis-1/2 flex flex-col sm:flex-row px-4 py-10 sm:py-11 sm:pl-14 items-center bg-[#EDEDED] sm:justify-between max-h-[600px]">
        <div className="items-center flex sm:hidden">
            <Image src={"/Cyber iPhone Store/MacBook 1.png"} alt={"MacBook Pro 14"} width={292} height={502}/>
        </div>
        <div className="sm:w-[360px] w-[343px] h-[200px] sm:h-[272px] flex flex-col items-center gap-6 sm:gap-4">
            <div className="flex flex-col gap-4">
            <h2 className="text-4xl sm:text-start text-center sm:text-[64px] leading-[56px]">Macbook <span className="font-bold">Air</span></h2>
            <p className="text-[#909090] sm:text-start text-center text-base sm:text-sm">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            </div>
            <button className="px-14 py-4 rounded-md border-2 w-[191px] border-black">Shop Now</button>
        </div>
        <div className="items-end sm:flex hidden">
            <Image src={"/Cyber iPhone Store/MacBook Pro 14.png"} alt={"MacBook Pro 14"} width={292} height={502}/>
        </div>
        </div>
      </section>
      <section className="px-4 sm:px-10 md:px-20 lg:px-40 py-16 sm:py-20 flex flex-col gap-12 sm:gap-8">
        <div className="flex justify-between">
            <h4 className="text-2xl font-semibold">Browse By Category</h4>
            <div className="flex gap-5">
                <IoIosArrowBack className="text-4xl font-extralight" />
                <IoIosArrowForward className="text-4xl font-extralight"/>
            </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
            <div className="px-[52px] py-6 flex flex-col gap-2 justify-center w-40 h-32 bg-[#EDEDED] rounded-2xl">
                <CiMobile4 className={"w-12 h-12 "}/>
                <p className="text-base text-center">Phones</p>
            </div>
            <div className="px-[52px] py-6 flex flex-col gap-2 justify-center w-40 h-32 bg-[#EDEDED] rounded-2xl">
                <Image className={"w-12 h-12 "} alt="" src={"/Cyber iPhone Store/Smart Watches.png"} width={48} height={48}/>
                <p className="text-base text-center">Smart Watches</p>
            </div>
            <div className="px-[52px] py-6 flex flex-col gap-2 justify-center w-40 h-32 bg-[#EDEDED] rounded-2xl">
                <CiCamera  className={"w-12 h-12 "}/>
                <p className="text-base text-center">Cameras</p>
            </div>
            <div className="px-[52px] py-6 flex flex-col gap-2 justify-center w-40 h-32 bg-[#EDEDED] rounded-2xl">
                <PiHeadphones  className={"w-12 h-12 "}/>
                <p className="text-base text-center">Headphones</p>
            </div>
            <div className="px-[52px] py-6 flex flex-col gap-2 justify-center w-40 h-32 bg-[#EDEDED] rounded-2xl">
                <HiOutlineDesktopComputer  className={"w-12 h-12 "}/>
                <p className="text-base text-center">Computers</p>
            </div>
            <div className="px-[52px] py-6 flex flex-col gap-2 justify-center w-40 h-32 bg-[#EDEDED] rounded-2xl">
            <Image className={"w-12 h-12 "} alt="" src={"/Cyber iPhone Store/Gaming.png"} width={48} height={48}/>
                <p className="text-base text-center">Gaming</p>
            </div>
        </div>
      </section>
      <section className=" px-4 sm:px-20 md:px-40 py-14 flex flex-col gap-8">
        <div className="flex gap-8">
            <p className="text-lg border-b-2 border-black">New Arrival</p>
            <p className="text-lg text-[#8B8B8B]">Bestsellers</p>
            <p className="text-lg text-[#8B8B8B]">Featured Products</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4  bg-white">
        <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto  sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/Iphone 14 pro 1.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center hidden sm:block text-base w-fit">{`Apple iPhone 14 Pro Max 128GB Deep Purple `}</h3>
                            <h3 className="text-center block sm:hidden text-base w-fit">{`Apple iPhone 14 Pro Max 128GB...`}</h3>
                            <p className="text-center font-semibold text-2xl">$900</p>
                        </div>
                        <button className="text-sm py-3 w-fit px-10 h-12  sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/Iphone 14 pro 2.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center  text-base w-fit">{`Blackmagic Pocket Cinema Camera 6k`}</h3>
                            <p className="text-center font-semibold text-2xl">$2535</p>
                        </div>
                        <button className="text-sm py-3 w-fit px-10 h-12  sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/watch.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center block sm:hidden text-base w-fit">{`Apple Watch Series 9 GPS 41...`}</h3>
                            <h3 className="text-center sm:block hidden text-base w-fit">{`Apple Watch Series 9 GPS 41m Starlight Aluminium `}</h3>
                            <p className="text-center font-semibold text-2xl">$399</p>
                        </div>
                        <button className="text-sm py-3 w-fit px-10 h-12  sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/headphones 1.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center hidden sm:block  text-base w-fit">{`AirPods Max Silver Starlight Aluminium `}</h3>
                            <h3 className="text-center sm:hidden block text-base w-fit">{`AirPods Max Silver`}</h3>
                            <p className="text-center font-semibold text-2xl">$549</p>
                        </div>
                        <button className="text-sm py-3 w-fit px-10 h-12  sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/samsung watch.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center hidden sm:block  text-base w-fit">{`Samsung Galaxy Watch6 Classic 47mm Black`}</h3>
                            <h3 className="text-center sm:hidden block text-base w-fit">{`Samsung Galaxy Watch6 Classic...`}</h3>
                            <p className="text-center font-semibold text-2xl">$369</p>
                        </div>
                        <button className="text-sm py-3 w-fit px-10 h-12  sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/samsung 1.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center sm:block hidden text-base w-fit">{`Galaxy Z Fold5 Unlocked | 256GB | Phantom Black`}</h3>
                            <h3 className="text-center block sm:hidden text-base w-fit">{`Galaxy Z Fold5 Unlocked | 256GB...`}</h3>
                            <p className="text-center font-semibold text-2xl">$1799</p>
                        </div>
                        <button className="text-sm py-3 w-fit px-10 h-12  sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/earbuds.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center  text-base w-fit">{`Galaxy Buds FE Graphite`}</h3>
                            <p className="text-center font-semibold text-2xl">$99.99</p>
                        </div>
                        <button className="text-sm py-3 w-fit px-10 h-12  sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/Iphone 14 pro 4.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center hidden sm:block text-base w-fit">{`Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021`}</h3>
                            <h3 className="text-center block sm:hidden  text-base w-fit">{`Apple iPad 9 10.2" 64GB Wi-Fi Silver`}</h3>
                            <p className="text-center font-semibold text-2xl">$398</p>
                        </div>
                        <button className="text-sm py-3 w-fit px-10 h-12  sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            
        </div>
      </section>
      <section className="sm:min-h-[640px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-[360px] basis-[25%] flex flex-col px-9 pb-14 ">
          <div className="w-[321px] h-[321px] xl:w-[360px] xl:h-[360px] lg:w-[300px] lg:h-[300px] md:w-[300] md:h-[300px] sm:w-[250px] sm:h-[250px]">
            <Image src={"/Cyber iPhone Store/watch-earbuds.png"} className="" width={360} height={360} alt="watch-earbuds"/>
          </div>
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h2 className="text-center sm:text-start text-[49px] sm:text-[33px]">Popular Products</h2>
            <p className="text-center sm:text-start text-base text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="px-14 py-4 rounded-md w-[191px] border-black border-2">Shop Now</button>
          </div>
        </div>
        <div className="bg-[#F9F9F9] min-w-[360px] basis-[25%] flex flex-col px-9 pb-14 ">
          <div className="w-[321px] h-[321px] xl:w-[360px] xl:h-[360px] lg:w-[300px] lg:h-[300px] md:w-[300] md:h-[300px] sm:w-[250px] sm:h-[250px]">
            <Image src={"/Cyber iPhone Store/iPads.png"} className="" width={360} height={360} alt="iPad Pro"/>
          </div>
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h2 className="text-center sm:text-start text-[49px] sm:text-[33px]">ipad Pro</h2>
            <p className="text-center sm:text-start text-base text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="px-14 py-4 rounded-md w-[191px] border-black border-2">Shop Now</button>
          </div>
        </div>
        <div className="bg-[#EAEAEA] min-w-[360px] basis-[25%] flex flex-col px-9 pb-14 ">
          <div className="w-[321px] h-[321px] xl:w-[360px] xl:h-[360px] lg:w-[300px] lg:h-[300px] md:w-[300] md:h-[300px] sm:w-[250px] sm:h-[250px]">
            <Image src={"/Cyber iPhone Store/Samsung.png"} className="" width={360} height={360} alt="watch-earbuds"/>
          </div>
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h2 className="text-center sm:text-start text-[49px] sm:text-[33px]">Samsung Galaxy</h2>
            <p className="text-center sm:text-start text-base text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="px-14 py-4 rounded-md w-[191px] border-black border-2">Shop Now</button>
          </div>
        </div>
        <div className="bg-[#2C2C2C] min-w-[360px] basis-[25%] flex flex-col px-9 pb-14 text-white">
          <div className="w-[321px] h-[321px] xl:w-[360px] xl:h-[360px] lg:w-[300px] lg:h-[300px] md:w-[300] md:h-[300px] sm:w-[250px] sm:h-[250px]">
            <Image src={"/Cyber iPhone Store/Macbook 1.png"} className="" width={360} height={360} alt="watch-earbuds"/>
          </div>
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h2 className="text-center sm:text-start text-[49px] sm:text-[33px]">Macbook Pro</h2>
            <p className="text-center sm:text-start text-base text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="px-14 py-4 rounded-md w-[191px] border-white border-2">Shop Now</button>
          </div>
        </div>

      </section>
      <section className="lg:min-h-[656px] py-14 px-4 sm:px-10 md:px-20 lg:px-40 md:py-20 flex flex-col  gap-8">
          <h3 className="text-2xl">Discounts up to -50%</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:w-[1120px]">
          <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto  sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/Iphone 14 pro 7.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center sm:block hidden text-base w-fit">{`Apple iPhone 14 Pro 512GB Gold (MQ233)`}</h3>
                            <h3 className="text-center sm:hidden block text-base w-fit">{`Apple iPhone 14 Pro 512GB Gold...`}</h3>
                            <p className="text-center font-semibold text-2xl">$1437</p>
                        </div>
                        <button className="text-sm py-3 px-10 h-12 sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>
            </div>
            <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto  sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/headphones 1.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center sm:block hidden text-base w-fit">{`AirPods Max Silver Starlight Aluminium `}</h3>
                            <h3 className="text-center sm:hidden block text-base w-fit">{`AirPods Max Silver...`}</h3>
                            <p className="text-center font-semibold text-2xl">$549</p>
                        </div>
                        <button className="text-sm py-3 px-10 h-12 sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>
            </div>
            <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto  sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/watch.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center sm:block hidden text-base w-fit">{`Apple Watch Series 9 GPS 41mm Starlight Aluminium `}</h3>
                            <h3 className="text-center sm:hidden block text-base w-fit">{`Apple Watch Series 9 GPS 41...`}</h3>
                            <p className="text-center font-semibold text-2xl">$399</p>
                        </div>
                        <button className="text-sm py-3 px-10 h-12 sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>

                    </div>
            </div>
            <div className="px-3 sm:px-4 rounded-lg py-6 w-[163px] h-auto  sm:w-[268px] sm:h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-2 sm:gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="w-[104px] h-[104px] md:w-40 md:h-40" src={"/Cyber iPhone Store/Iphone 14 pro 6.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-4 sm:gap-6 items-center">
                        <div className="flex flex-col gap-4 w-[140px] h-[88px] sm:w-[236px] sm:h-auto">
                            <h3 className="text-center sm:block hidden  text-base w-fit">{`Apple iPhone 14 Pro 1TB Gold (MQ2V3)`}</h3>
                            <h3 className="text-center  block sm:hidden text-base w-fit">{`Apple iPhone 14 Pro 1TB Gold (M...`}</h3>
                            <p className="text-center font-semibold text-2xl">$1499</p>
                        </div>
                        <button className="text-sm py-3 px-10 h-12 sm:w-auto  sm:h-auto  bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>
            </div>
            </div>
      </section>
      <section className="lg:min-h-[448px] lg:min-w-[1440px]">
        <Image src={"/Cyber iPhone Store/Banner 2.png"} className="sm:w-full hidden sm:block" alt={""} width={500} height={500}/>
        <Image src={"/Cyber iPhone Store/Banner mobile.png"} className="w-full sm:hidden block" alt={""} width={500} height={500}/>
      </section>
      <footer className="py-12 px-8 lg:py-[104px] lg:px-40 bg-black gap-8 sm:gap-6 flex flex-col justify-between items-center sm:items-start text-white">
        <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row justify-between items-center sm:items-start">
        <div className="flex basis-1/2 flex-col gap-6 justify-center items-center sm:items-start sm:justify-start ">
          <Image src={"/Cyber iPhone Store/Logo.png"} alt={""} width={65} height={23}/>
          <p className="text-white text-center sm:text-start text-sm w-[311px] lg:w-[384px]">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </div>
        <div className="flex basis-1/2 flex-col items-center gap-8 sm:gap-0 lg:flex-row justify-between w-[623px]">
          <div>
            <ul className="text-[#CFCFCF] flex flex-col gap-3 text-sm sm:text-start text-center">
              <li className="text-base text-white font-semibold">Services</li>
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
            </div>
            
          <div>
            <ul className="text-[#CFCFCF] flex flex-col gap-3 text-sm sm:text-start text-center">
              <li className="text-base text-white font-semibold">Assistance to the buyer</li>
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
            </div>
        </div>
        </div>
        <div className="w-[173px] flex justify-between text-white">
          <FaTwitter />
          <FaFacebookF />
          <FaTiktok />
          <PiInstagramLogoFill />
        </div>
      </footer>
    </main>
  );
};

export default iPhoneCyber;
