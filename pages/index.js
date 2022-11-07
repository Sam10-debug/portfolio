import Head from 'next/head'
import Image from 'next/image'

import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import musk from '../public/images/IMG-3326 (1).JPG'
import code from '../public/images/code.png'
import tip_calculator from '../public/images/tip_calc.jpg'
import barca from '../public/images/pedri.jpg'
import intro from '../public/images/intro.jpg'
import time from '../public/images/time.jpg'
import tenzies from '../public/images/Screenshot (13).png'
import shopping from '../public/images/active-states-basket-filled.jpg'
import musica from "../public/images/Screenshot (23).png"
import {useState} from 'react'
import Form from '../components/Form'

export default function Home() {
  const [darkMode,setDarkMode] = useState(false)

  const SetDarkMode=()=>{
    setDarkMode(prev=>!prev)
  }
  
  return (
    <div   className={darkMode?"dark":""}>
      <Head>
        <title>Emor Musk Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="  min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl dark:text-white'>Emor Musk</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={SetDarkMode} className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li><a href="Emorinken_Samuel_resume.pdf" download target="_blank" rel="noreferrer" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">EMOR MUSK</h2>
            <h3 className="text-2xl py-2 md:;text-3xl dark:text-white">Front End web developer </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-xl mx-auto">
              Front end web developer providing services for programming and needs. Join me down below let &apos; s get cracking
            </p>
          </div>
          
          <div className="relative  rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden ">
            <Image src={musk} className=" rounded-full w-80 h-80" layout='fill' objectFit='cover' alt='profile-picture' />
          </div>  
        </section>
        <section className="">
          <div className="dark:text-white">
            <h3 className="text-3xl text-center  py-1  mt-4">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a front end web developer, I have been able to bring lots of designs to life. I &apos; ve done remote works for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talented people to create digital products for both business andd consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">I offer a wide range of services including programming and teaching.</p>
          </div>
          <div className="lg:flex gap-10 ">
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white md:mx-auto">
              <Image src={code} height={100} width={100} alt="code-img" />
              <h3 className="pb-2 text-lg font-medium pt-8 ">Front End Web Development</h3>
              <p className="py-2">Implementing elegant and optimized front end web designs suited for production</p>
              <h4 className=" text-teal-600 py-4 ">Front end  tools i use</h4>
              <li className="text-gray-800 py-1">Html</li>
              <li className="text-gray-800 py-1">CSS3</li>
              <li className="text-gray-800 py-1">TailwindCSS</li>
              <li className="text-gray-800 py-1">Javascript</li>
              <li className="text-gray-800 py-1">ReactJS</li>
              <li className="text-gray-800 py-1">NextJS</li>
            </div>
            
          </div>
        </section>
        <section className="">
          <div className="dark:text-white">
            <h3 className="text-3xl py-1 text-center">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a front end web developer, I have been able to bring lots of designs to life. I &apos; ve done remote works for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talented people to create digital products for both business andd consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">I offer a wide range of services including programming and teaching.</p>
          </div>
          <h2 className="text-gray-900 text-3xl text-center my-4 dark:text-white" >Check out some of my Projects below</h2>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1"><h1 className="text-center dark:text-white text-gray-700 mb-4 text-2xl"><a href=""  target="_blank" rel="noreferrer" >Musica App</a></h1><a href="https://musica-app-two.vercel.app/"  target="_blank" rel="noreferrer" ><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" src={musica} alt="musica-image" /></a></div>
            <div className="my-4 md:my-0 basis-1/3 flex-1"><h1 className="text-center dark:text-white text-gray-700 mb-4 text-2xl"><a href="https://tenzies-game-react-app.vercel.app/"  target="_blank" rel="noreferrer" >Tenzies Game App</a></h1><a href="https://tenzies-game-react-app.vercel.app/"  target="_blank" rel="noreferrer" ><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" src={tenzies} alt="tenzies-game" /></a></div>
            <div className="my-4 md:my-0 basis-1/3 flex-1"><h1 className="text-center dark:text-white text-gray-700 mb-4 text-2xl"><a href="https://eclectic-sorbet-ef1f3a.netlify.app"  target="_blank" rel="noreferrer" >Tip calculator</a></h1><a href="https://eclectic-sorbet-ef1f3a.netlify.app" target="_blank" rel="noreferrer" ><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" src={tip_calculator} alt="tip-calculator" /></a></div>
            <div className="my-4 md:my-0 basis-1/3 flex-1"><h1 className="text-center dark:text-white text-gray-700 mb-4 text-2xl"><a href="https://barca-players-app-2-0.vercel.app/"  target="_blank" rel="noreferrer" >Barca Players Info App</a></h1><a href="https://barca-players-app-2-0.vercel.app/" target="_blank" rel="noreferrer" ><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" src={barca} alt="barca-players-app" /></a></div>
            <div className="my-4 md:my-0 basis-1/3 flex-1"><h1 className="text-center dark:text-white text-gray-700 mb-4 text-2xl"><a href="https://sam10-debug.github.io/intro-main/"  target="_blank" rel="noreferrer" >Intro section Landing Page</a></h1><a href="https://sam10-debug.github.io/intro-main/" target="_blank" rel="noreferrer" ><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" src={intro} alt="intro-page" /></a></div>
            <div className=" basis-1/3 flex-1"><h1 className="text-center dark:text-white text-gray-700 mb-4 text-2xl"><a href="https://splendid-sfogliatella-8b42ab.netlify.app/"  target="_blank" rel="noreferrer" >Time Tracking Dashboard</a></h1><a href="https://splendid-sfogliatella-8b42ab.netlify.app/" target="_blank" rel="noreferrer" ><Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" src={shopping} alt="shoping-cart" /></a></div>
          </div>
        </section>
        {/* <Form /> */}
        <footer className="footer">
          <div className="flex justify-between">
            <div className="text-[12px] md:text-[1rem]">
              <h5 className="text-gray-600 dark:text-white ">CALL</h5>
              <h6 className="text-gray-600 dark:text-white">+2347063503671</h6>
            </div>
            <div className="text-[12px] md:text-[1rem]">
              <h5 className="text-gray-600 dark:text-white">EMAIL</h5>
              <h6 className="text-gray-600 dark:text-white">emorinkensam@gmail.com</h6>
            </div>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="https://twitter.com/Emor__Musk" className="" target="_blank" rel="noreferrer"  ><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/samuel-emorinken-401b10203/" className="mx-8 md:mx-0" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            <a href="https://github.com/Sam10-debug" className="" target="_blank" rel="noreferrer"><AiFillGithub /></a>
          </div>
        </footer>
      </main>
    </div>
  )
}
//burtons
