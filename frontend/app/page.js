import Image from "next/image";
import harmonfordImage from "@/public/harmonford.jpg"
import officeFront from "@/public/office_front.jpg"

export default function Home() {
  return (
    <main className="text-black">
        <div className="w-[full] h-[700px] mx-auto relative flex flex-row justify-center">
          <Image src={harmonfordImage} width={1000} height={700} className="w-full h-full object-cover"/>
          <div className="bg-[#052853] bg-opacity-80 p-3 absolute max-w-[900px] w-[80%] text-5xl font-extrabold text-white text-center z-10 top-[50%]">Proud To Be The Official Estate Agents of Harmonford</div>
        </div>

        <section className="flex flex-row justify-center min-h-[500px] text-[#052853]">
            <div className="max-w-[1000px] flex flex-row justify-between items-center px-5">
            <div className="w-[40%]">
              <h3 className="text-4xl font-bold">Featured Properties</h3>
              <p>Welcome to Harmonford Estate Agents, your trusted partner in property since 2017. Founded with a vision to redefine the property market, Harmonford Estate Agents has quickly established itself as a leading force in the industry, known for our unwavering commitment to excellence and client satisfaction.</p>
            </div>
            
            <div className="w-[40%]">
              <Image src={officeFront} width={300} height={200} className="w-full"/>
            </div>
            
          </div>

        </section>

        <section className="bg-[#052853] text-white flex flex-row justify-center min-h-[500px]">
          <div className="max-w-[1000px] flex flex-row-reverse justify-between items-center px-5">
            <div className="w-[40%]">
              <h3 className="text-4xl font-bold">About Us</h3>
              <p>Welcome to Harmonford Estate Agents, your trusted partner in property since 2017. Founded with a vision to redefine the property market, Harmonford Estate Agents has quickly established itself as a leading force in the industry, known for our unwavering commitment to excellence and client satisfaction.</p>
            </div>
            
            <div className="w-[40%]">
              <Image src={officeFront} width={300} height={200} className="w-full"/>
            </div>
            
          </div>
          
            
        </section>

        <section className="flex flex-row justify-center min-h-[500px] text-[#052853]">
            <div className="max-w-[1000px] flex flex-row justify-between items-center px-5">
            <div className="w-[40%]">
              <h3 className="text-4xl font-bold">Contact</h3>
              <ul>
                <li><span className="font-bold">Phone:</span> 01632 960123</li>
                <li><span className="font-bold">Email:</span> info@harmonfordestates.co.uk</li>
                <li><span className="font-bold">Address:</span></li>
                <li><span className="font-bold">Opening Times:</span></li>
              </ul>
            </div>
            
            <div className="w-[40%]">
              {/* <Image src={officeFront} width={300} height={200} className="w-full"/> */}
              <form className="flex flex-col gap-4">
                <input type="text" className="outline-none border-2 border-[#052853] py-2 px-4 rounded-sm" placeholder="Name"/>
                <input type="text" className="outline-none border-2 border-[#052853] py-2 px-4 rounded-sm" placeholder="Email"/>
                <input type="text" className="outline-none border-2 border-[#052853] py-2 px-4 rounded-sm" placeholder="Subject"/>

                <textarea className="outline-none border-2 border-[#052853] py-2 px-4 rounded-sm h-[150px] resize-none" placeholder="Message"/>

                <button className="bg-[#052853] py-2 px-4 text-white rounded-sm w-[50%] self-center hover:bg-opacity-90 transition-all">Submit</button>
              </form>
            </div>
            
          </div>
            
        </section>
    </main>
  );
}
