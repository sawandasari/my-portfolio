import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">Sawan Dasari</div>
        <div className="space-x-4">
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
          <Link href="#about">
            <a className="text-white">About</a>
          </Link>
          <Link href="#work-experience">
            <a className="text-white">Work Experience</a>
          </Link>
          <Link href="#education">
            <a className="text-white">Education</a>
          </Link>
          <Link href="#certifications">
            <a className="text-white">Certifications</a>
            </Link>
          <Link href="#projects">
            <a className="text-white">Projects</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
