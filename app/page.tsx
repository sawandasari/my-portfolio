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
import Layout from './Pages/Layout';


export default function Home() {
  
  return (
    <div className="container p-8">
      <Head>
        <title>Sawan Dasari | Portfolio </title>
        <meta name="description" content="Portfolio website of Sawan Dasari" />
      </Head>

      <Navbar /> 
      {/* Added the Navbar here to render it at the top */}
      <About />    {/* Rendering the About component */}
      <WorkExperience />
      <Education />
      <Certifications />
      <Projects />
      <Contact/>

    </div>
  )
}


