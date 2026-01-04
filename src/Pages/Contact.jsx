import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative z-10">

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-lime-500 text-center">
        Contact Me
      </h1>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left - Profile Image */}
        <div className="flex justify-center">
          <img
            src="/images/arslan.jpg" // ✅ replace with your image
            alt="Arslan Profile"
            className="w-64 h-64 object-cover rounded-2xl border-4 border-lime-500 shadow-lg opacity-90"
          />
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-semibold text-lime-500">My Name is Arslan</h2>

          <p className="text-gray-300 text-lg">
            Contact me for web development projects, collaborations or any queries.
          </p>

          <div className="flex flex-col gap-3 mt-4">
            {/* Email */}
            <a
              href="mailto:likerexpert@gmail.com"
              className="px-5 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
            >
              Email: likerexpert@gmail.com
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mr_arsalnnnnn/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-400 transition"
            >
              Instagram: @mr_arsalnnnnn
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mr-arslan-411137262/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
