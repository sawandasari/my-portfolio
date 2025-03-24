'use client';  
import Head from 'next/head'
import Navbar from './Pages/navbar'
import About from './Pages/About'
import Link from 'next/link'
import Certifications from './Pages/Certifications'
import Education from './Pages/Education';
import WorkExperience from './Pages/Work experience';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';


export default function Home() {
  
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>Sawan Dasari | Portfolio </title>
        <meta name="description" content="Portfolio website of Sawan Dasari" />
      </Head>
      
      <Navbar /> 

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Sawan Dasari</h1>
        <p className="text-xl mt-4">A brief introduction about me</p>
      </header>

      {/* Add the Navbar here to render it at the top */}
      <About />    {/* Rendering the About component */}
      <WorkExperience />
      <Education />
      <Certifications />
      <Projects />
      <Contact/>

    </div>
  )
}


