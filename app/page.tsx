import Head from 'next/head'
import Navbar from './Components/navbar'

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <Head>
        <title>Sawan Dasari | Portfolio </title>
        <meta name="description" content="Portfolio website of Sawan Dasari" />
      </Head>
      
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Sawan Dasari</h1>
        <p className="text-xl mt-4">A brief introduction about you</p>
      </header>

      <main>
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p>
            This is where you'll introduce yourself. Add information about your skills, interests, and experience.
          </p>
          
          <h2 className="text-3xl font-semibold">Work Experience</h2>
          <p>
            Add a section for your work experience, including your past roles and responsibilities.
          </p>

          <h2 className="text-3xl font-semibold">Education</h2>
          <p>
            List your educational background you've obtained.
          </p>
          <h2 className="text-3xl font-semibold">Certifications</h2>
          <p>
            List any certifications you've obtained.
          </p>
           
          <h2 className="text-3xl font-semibold">Projects</h2>
          <p>
            Describe some of the projects you've worked on. You can link to GitHub repositories or live demos.
          </p>

        </section>
      </main>
    </div>
  )
}
