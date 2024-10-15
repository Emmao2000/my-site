import Image from "next/image";

export default function Home() {
  return (

    <div className="p-8 pb-20 gap-16 lm:p-20 font-[family-name:var(--font-geist-sans)]">
      
     {/* This is the nav bar section */}

  <header className="bg-blue-600" > 
    <h1 className="px-20 text-black font-extrabold" >Tech Start</h1>
  <nav className=" flex flex-row justify-end">
    <ul className="flex flex-wrap pt-10  gap-20 text-white">
      <li>
      
         Home
    
      </li>

      <li>
     
         About
    
      </li>
      
      <li>
      
         Service
   
        </li>

        <li>
        
         Contact
    
        </li>

    </ul>
  </nav>
  
  </header>
{/* This is the hero section */}
  <main className="pt-5 bg-orange-500">
    <h1 className="text-black">Welcome to Tech Start Worldwide</h1>
    <h2>We help you build your Tech Dreams</h2>

    <button className="border-2 black bg-green-500">Get Started</button>
  </main>

{/* This is the service section */}
  <section className="  flex">
    {/* <h3>We offers the following Services</h3> */}
    <div className="bg-yellow-500">
      <h5>Web Development</h5>
      <p>Web development is the work involved in developing a website for the Internet <br /> (World Wide Web) or an intranet (a private network).</p>


    </div>
    <div className="bg-blue-500">Cybersecurity</div>
    <div className="bg-green-500">Digital Marketing</div>
  </section>

{/* The footer section */}
  <footer>

  </footer>


  </div>
  











      );
}
