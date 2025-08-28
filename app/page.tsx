// app/page.tsx
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center 
                   bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white"
      >
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Navnath R. Bhorde</h1>
        <p className="mt-4 text-2xl font-light">
          Frontend Developer • Next.js • React.js
        </p>
        <div className="mt-8 flex gap-6">
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
          >
            Hire Me
          </a>
          <a
            href="https://github.com/navnathbhorde143"
            target="_blank"
            className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            I am a passionate Frontend Developer with 3+ years of experience in
            Next.js, React.js, and modern frameworks. I build scalable,
            SEO-optimized apps with responsive UI and high performance.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Next.js","React","Angular","TypeScript","JavaScript","TailwindCSS","Bootstrap",
              "HTML5","CSS3","Redux","Redux Toolkit","RTK Query","Zustand","Context API","Electron (basic understanding)","Git","SEO","Radix UI","shadcn/ui",
            ].map(skill => (
              <div
                key={skill}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl 
                           transition text-gray-700 font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Projects */}
<section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Projects</h2>
    <div className="grid gap-8 md:grid-cols-2">
      
      {/* Diamond SIS */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700">Diamond SIS</h3>
        <p className="text-gray-600 mt-2">
            Built a scalable Student Information System (SIS) using Next.js with SSR and SEO best practices. 
    Developed modular, reusable components and implemented dynamic routing for performance and scalability. 
    Delivered a fully responsive and accessible UI supporting admissions, registrar, and financial aid modules.
        </p>
        <a
          href="https://www.diamondsis.com/"
          target="_blank"
          className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:shadow-lg transition"
        >
          Visit Website
        </a>
      </div>

      {/* My Vet Hub */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-700">My Vet Hub</h3>
        <p className="text-gray-600 mt-2">
         Developed a comprehensive Pet Hospital Management System tailored for veterinary clinics. 
    Implemented appointment scheduling and medical record management with SEO-friendly structures, 
    ensuring efficiency, accessibility, and responsive design across both web and mobile devices.
        </p>
        <a
          href="https://myvethub.com/"
          target="_blank"
          className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:shadow-lg transition"
        >
          Visit Website
        </a>
      </div>

      {/* Heaven's Best Carpet Cleaning */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
        <h3 className="text-xl font-semibold text-blue-700">
          Heaven&apos;s Best Carpet Cleaning – Mesa, AZ
        </h3>
        <p className="text-gray-600 mt-2">
            Contributed as a Frontend Developer for Heaven’s Best Carpet Cleaning website, 
    focusing on creating a modern, responsive, and SEO-friendly user interface. 
    Implemented performance optimizations and ensured cross-device compatibility 
    for a seamless customer experience. The platform highlights carpet, rug, and 
    upholstery cleaning services with a strong focus on usability and fast load times.
        </p>
        <a
          href="https://mesaaz.heavensbest.com/"
          target="_blank"
          className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:shadow-lg transition"
        >
          Visit Website
        </a>
      </div>

    </div>
  </div>
</section>


     {/* Contact */}
<section
  id="contact"
  className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-center text-white"
>
  <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
  <p className="text-lg">
    Email:{" "}
    <a
      href="mailto:navnathbhorde98@gmail.com"
      className="font-medium text-white underline decoration-white/50 hover:decoration-white transition"
    >
      navnathbhorde98@gmail.com
    </a>
  </p>
  <p className="text-lg">
    Phone:{" "}
    <a
      href="tel:8530407816"
      className="font-medium text-white underline decoration-white/50 hover:decoration-white transition"
    >
      8530407816
    </a>
  </p>
  <p className="text-lg">
    LinkedIn:{" "}
    <a
      href="https://www.linkedin.com/in/navnath-bhorde-b01332245"
      target="_blank"
      className="font-medium text-white underline decoration-white/50 hover:decoration-white transition"
    >
      View Profile
    </a>
  </p>
</section>

    </div>
  )
}
