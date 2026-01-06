import React from "react";
import arslan from '../assets/images/arslan.jpg'
const About = () => {
  return (
    <div className="min-h-[80vh] text-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img id="aboutImage"
            src={arslan} // replace with your image path
            alt="Arslan Profile"
            className="w-64 h-64 object-cover rounded-2xl  shadow-lg opacity-80"
          />
        </div>

        {/* Profile Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4"
            style={{
              fontFamily: "Lilex",
              fontWeight: 200
            }}
          >
            Hi, I'm <span className="text-green-500">Arslan</span>
          </h1>

          <p className="text-gray-300 mb-6">
            I am a passionate front-end web developer who loves building
            responsive, modern and user-friendly websites using the latest
            technologies.
          </p>

          {/* Skills */}
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {["HTML", "CSS", "SCSS", "JavaScript", "React", "Tailwind CSS"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm border border-green-500 hover:bg-green-500 hover:text-black transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/mr-arslan-411137262/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition"
          >
            Visit My LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
};

export default About;
