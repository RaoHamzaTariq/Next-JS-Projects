import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { CiCamera, CiHeart, CiMobile4 } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const iPhoneCyber = () => {
  return (
    <main>
      <nav className="flex items-center justify-between py-4 px-40">
        <div>
          <Image
            src={"/Cyber iPhone Store/Logo Vector.png"}
            alt="Logo"
            width={65}
            height={23}
          />
        </div>
        <div className="flex items-center w-[372px] h-14 p-4 gap-2 bg-[#F5F5F5]">
          <CiSearch className="text-[#656565]" />
          <p className="text-[#989898]">Search</p>
        </div>
        <div>
          <ul className="flex  gap-12">
            <li className="text-base">Home</li>
            <li className="text-[#989898] text-base">About</li>
            <li className="text-[#989898] text-base">Contact Us</li>
            <li className="text-[#989898] text-base">Blog</li>
          </ul>
        </div>
        <div className="flex gap-6">
          <CiHeart className="text-2xl" />
          <MdOutlineShoppingCart className="text-2xl" />
          <FiUser className="text-2xl" />
        </div>
      </nav>
      {/* This is th landing page section */}
      <section className="px-40 bg-gradient-to-r from-[#211C24] to-[#211C24] flex items-center gap-16">
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-semibold opacity-40 text-white">
              Pro.Beyond.
            </p>
            <h1 className="text-8xl text-white font-thin">
              iPhone 14 <span className="font-semibold font-sans">Pro</span>
            </h1>
          </div>
          <p className=" text-[#909090] ">
            Created to change everything for the better. For everyone
          </p>
          <button className="border-2 rounded-md text-white font-medium text-base py-4 px-14">
            Shop Now
          </button>
        </div>
        <div>
          <Image
            src={"/Cyber iPhone Store/iPhone Image.png"}
            alt={"iPhone Image"}
            width={406}
            height={632}
          />
        </div>
      </section>
      <section className="flex max-h-[600px] max-w-[1440]">
        <div className="basis-1/2 flex flex-col min-h-[600px]">
          <div className="basis-1/2 pr-12 flex items-center min-h-[328px]">
          <div className="flex items-center">
            <Image src={"/Cyber iPhone Store/PlayStation.png"} alt={"Play Station"} className="h-[328px]" width={400} height={328}/></div>
            <div className="flex flex-col gap-4">
                <h2 className="text-5xl ">Playstation 5</h2>
                <p className="text-sm text-[#909090]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
            </div>
          <div className="flex basis-1/2 min-h-[272px]">
            <div className="basis-1/2 bg-[#EDEDED] flex items-center pr-12 gap-7 w-ful">
            <div>
            <Image src={"/Cyber iPhone Store/headphones.png"} alt={"HeadPhones"} width={104} height={272}/>
            </div>
            <div className="flex flex-col gap-3 w-40 h-[120px]">
                <h3 className="text-3xl font-light text-black ">Apple AirPods <span className="font-bold">Max</span></h3>
                <p className="text-[#909090] text-sm">{"Computational audio. Listen, it's powerful"}</p>
            </div>
            </div>
            <div className="basis-1/2 bg-[#353535] flex items-center pr-12 gap-7">
            <div>
            <Image src={"/Cyber iPhone Store/vr.png"} alt={"VR"} width={136} height={190}/>
            </div>
            <div className="flex flex-col gap-3 w-40 h-[120px]">
                <h3 className="text-3xl font-light text-white ">Apple AirPods <span className="font-bold">Max</span></h3>
                <p className="text-[#909090] text-sm">{"Computational audio. Listen, it's powerful"}</p>
            </div>
            </div>
            </div>
            <div className="basis-1/2"></div>
          </div>
        <div className="basis-1/2 flex py-11 pl-14 items-center bg-[#EDEDED] justify-between max-h-[600px]">
        <div className="w-[360px] h-[272px] flex flex-col gap-4">
            <div className="flex flex-col gap-4">
            <h2 className="text-[64px] leading-[56px]">Macbook <span className="font-bold">Air</span></h2>
            <p className="text-[#909090] text-sm">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            </div>
            <button className="px-14 py-4 rounded-md border-2 w-[191px] border-black">Shop Now</button>
        </div>
        <div className="items-end flex">
            <Image src={"/Cyber iPhone Store/MacBook Pro 14.png"} alt={"MacBook Pro 14"} width={292} height={502}/>
        </div>
        </div>
      </section>
      <section className="px-40 py-20 flex flex-col gap-8">
        <div className="flex justify-between">
            <h4 className="text-2xl font-semibold">Browse By Category</h4>
            <div className="flex gap-5">
                <IoIosArrowBack className="text-4xl font-extralight" />
                <IoIosArrowForward className="text-4xl font-extralight"/>
            </div>
        </div>
        <div className="grid grid-cols-6 gap-8">
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
      <section className="px-40 py-14 flex flex-col gap-8">
        <div className="flex gap-8">
            <p className="text-lg border-b-2 border-black">New Arrival</p>
            <p className="text-lg text-[#8B8B8B]">Bestsellers</p>
            <p className="text-lg text-[#8B8B8B]">Featured Products</p>
        </div>
        <div className="grid grid-cols-4">
            <div className="px-4 py-6 w-[268px] h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="" src={"/Cyber iPhone Store/Iphone 14 pro 1.png"} width={160} height={160} alt=""/>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-center  text-base">Apple iPhone 14 Pro Max 128GB Deep Purple </h3>
                            <p className="text-center font-semibold text-2xl">$900</p>
                        </div>
                        <button className="text-base py-3 px-16 bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>
            </div>
            <div className="px-4 py-6 w-[268px] h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="" src={"/Cyber iPhone Store/Iphone 14 pro 2.png"} width={160} height={160} alt=""/>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-center  text-base">Blackmagic Pocket Cinema Camera 6k</h3>
                            <p className="text-center font-semibold text-2xl">$2535</p>
                        </div>
                        <button className="text-base py-3 px-16 bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>
            </div>
            <div className="px-4 py-6 w-[268px] h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="" src={"/Cyber iPhone Store/watch.png"} width={160} height={160} alt=""/>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-center  text-base">Apple Watch Series 9 GPS 41mm Starlight Aluminium </h3>
                            <p className="text-center font-semibold text-2xl">$399</p>
                        </div>
                        <button className="text-base py-3 px-16 bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>
            </div>
            <div className="px-4 py-6 w-[268px] h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="" src={"/Cyber iPhone Store/headphones 1.png"} width={160} height={160} alt=""/>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-center  text-base">AirPods Max Silver
                            Starlight Aluminium </h3>
                            <p className="text-center font-semibold text-2xl">$549</p>
                        </div>
                        <button className="text-base py-3 px-16 bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            <div className="px-4 py-6 w-[268px] h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="" src={"/Cyber iPhone Store/Iphone 14 pro 1.png"} width={160} height={160} alt=""/>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-center  text-base">Samsung Galaxy Watch6 Classic 47mm Black</h3>
                            <p className="text-center font-semibold text-2xl">$369</p>
                        </div>
                        <button className="text-base py-3 px-16 bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            <div className="px-4 py-6 w-[268px] h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="" src={"/Cyber iPhone Store/samsung 1.png"} width={160} height={160} alt=""/>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-center  text-base">Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</h3>
                            <p className="text-center font-semibold text-2xl">$1799</p>
                        </div>
                        <button className="text-base py-3 px-16 bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            <div className="px-4 py-6 w-[268px] h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="" src={"/Cyber iPhone Store/Iphone 14 pro 1.png"} width={160} height={160} alt=""/>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-center  text-base">Galaxy Buds FE Graphite</h3>
                            <p className="text-center font-semibold text-2xl">$99.99</p>
                        </div>
                        <button className="text-base py-3 px-16 bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            <div className="px-4 py-6 w-[268px] h-[432px] bg-[#F6F6F6] items-center flex-col flex gap-4">
                <div className="flex justify-end w-full">
                <CiHeart className="text-3xl"/>
                </div>
                    <Image className="" src={"/Cyber iPhone Store/Iphone 14 pro 4.png"} width={160} height={160} alt="Iphone 14 pro 4"/>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-center  text-base">Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021</h3>
                            <p className="text-center font-semibold text-2xl">$398</p>
                        </div>
                        <button className="text-base py-3 px-16 bg-black text-white rounded-lg text-center">Buy Now</button>
                    </div>

                
                
            </div>
            
        </div>
      </section>
    </main>
  );
};

export default iPhoneCyber;
