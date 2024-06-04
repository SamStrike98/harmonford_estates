import Image from "next/image";
import Link from "next/link";
import harmonfordImage from "@/public/harmonford.jpg"
import officeFront from "@/public/office_front.jpg"
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <main className="text-black bg-[#f4f4f4]">
        <div className="w-[full] h-[700px] mx-auto relative flex flex-row justify-center">
          <Image src={harmonfordImage} width={1000} height={700} className="w-full h-full object-cover"/>
          <div className="bg-[#052853] bg-opacity-80 p-3 absolute max-w-[900px] w-[80%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center z-10 my-[50%] md:my-0 md:top-[50%] leading-relaxed rounded-md">Proud To Be The Official Estate Agents of Harmonford</div>
        </div>

        <section className="bg-[#052853] text-white flex flex-row justify-center min-h-[500px] py-32" id="services">
          <div className="w-[80vw] max-w-[1000px] flex flex-col gap-5 md:gap-0 md:flex-row-reverse justify-evenly items-center">
            <div className="md:w-[45%] w-[80%]">
              <h3 className="text-4xl font-bold">Our Services</h3>
              <p>Harmonford Estate Agents offers a comprehensive range of services to meet all your real estate needs.</p>
            </div>
            
            <div className="md:w-[45%] w-[80%]">
              <div className="collapse bg-white text-[#052853] mb-2">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-bold">
                  Residential Sales
                </div>
                <div className="collapse-content"> 
                  <p>Helping you find the perfect home or sell your current property with ease.</p>
                </div>
              </div>
              <div className="collapse bg-white text-[#052853] mb-2">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-bold">
                  Lettings and Property Management
                </div>
                <div className="collapse-content"> 
                  <p>Providing full-service management to ensure your rental property is well-maintained and profitable.</p>
                </div>
              </div>
              <div className="collapse bg-white text-[#052853] mb-2">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-bold">
                  Commercial Real Estate
                </div>
                <div className="collapse-content"> 
                  <p>Assisting businesses in finding the ideal commercial spaces for their needs.</p>
                </div>
              </div>
              <div className="collapse bg-white text-[#052853] mb-2">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-bold">
                  Property Valuations
                </div>
                <div className="collapse-content"> 
                  <p>Offering accurate and reliable property valuations based on current market trends.</p>
                </div>
              </div>
            </div>
            
          </div>
          
            
        </section>

        <section className="flex flex-row justify-center min-h-[500px] text-[#052853] py-32">
            <div className="w-[80vw] max-w-[1000px] flex flex-col gap-5 md:gap-0 md:flex-row justify-evenly items-center">
            <div className="md:w-[45%] w-[80%]">
              <h3 className="text-4xl font-bold">Property Search</h3>
              <p>At the core of Harmonford Estate Agents are our values of integrity, transparency, and dedication. We believe in building long-term relationships with our clients, founded on trust and mutual respect. Our team works tirelessly to ensure that every client receives the highest standard of service and personalized attention.</p>
            </div>
            
            <div className="md:w-[45%] w-[80%]">
              {/* <Image src={officeFront} width={300} height={200} className="w-full"/> */}
              
              <Link href={'/properties'} className="min-w-min flex flex-row justify-center items-center gap-4 text-white text-3xl font-bold border-2 bg-[#052853] border-[#052853] rounded-md px-2 py-1">All Properties<FaSearch /></Link>
            </div>
            
          </div>

        </section>

        <section className="bg-[#052853] text-white flex flex-row justify-center min-h-[500px] py-32" id="about">
          <div className="w-[80vw] max-w-[1000px] flex flex-col gap-5 md:gap-0 md:flex-row-reverse justify-evenly items-center">
            <div className="md:w-[45%] w-[80%]">
              <h3 className="text-4xl font-bold">About Us</h3>
              <p>Welcome to Harmonford Estate Agents, your trusted partner in property since 2017. Founded with a vision to redefine the property market, Harmonford Estate Agents has quickly established itself as a leading force in the industry, known for our unwavering commitment to excellence and client satisfaction.</p>
            </div>
            
            <div className="md:w-[45%] w-[80%]">
              <Image src={officeFront} width={300} height={200} className="w-full"/>
            </div>
            
          </div>
          
            
        </section>

        <section className="flex flex-row justify-center min-h-[600px] text-[#052853] py-32" id="contact">
            <div className="w-[80vw] max-w-[1000px] flex flex-col gap-5 md:gap-0 md:flex-row  justify-evenly items-center">
            <div className="md:min-w-[45%] w-[80%]">
              <h3 className="text-4xl font-bold">Contact</h3>
              <ul>
                <li><span className="font-bold">Phone:</span> 01632 960123</li>
                <li><span className="font-bold">Email:</span> info@harmonfordestates.co.uk</li>
                <li><span className="font-bold">Address:</span></li>
                <li><span className="font-bold">Opening Times:</span></li>
              </ul>
            </div>
            
            <div className="md:min-w-[45%] w-[80%]">
              {/* <Image src={officeFront} width={300} height={200} className="w-full"/> */}
              <form className="flex flex-col gap-4">
                <input type="text" className="outline-none border-2 bg-white border-[#052853] py-2 px-4 rounded-sm" placeholder="Name"/>
                <input type="text" className="outline-none border-2 bg-white border-[#052853] py-2 px-4 rounded-sm" placeholder="Email"/>
                <input type="text" className="outline-none border-2 bg-white border-[#052853] py-2 px-4 rounded-sm" placeholder="Subject"/>

                <textarea className="outline-none bg-white border-2 border-[#052853] py-2 px-4 rounded-sm h-[150px] resize-none" placeholder="Message"/>

                <button className="bg-[#052853] py-2 px-4 text-white rounded-md w-[50%] self-center hover:bg-opacity-90 transition-all">Submit</button>
              </form>
            </div>
            
          </div>
            
        </section>
    </main>
  );
}
