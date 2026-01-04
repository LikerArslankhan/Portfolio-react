import React from "react";

const servicesList = [
  { id: 1, title: "Web Development", description: "Building responsive and modern websites using React, Tailwind CSS and latest technologies." },
  { id: 2, title: "UI/UX Design", description: "Designing user-friendly interfaces with attention to detail and usability." },
  { id: 3, title: "Performance Optimization", description: "Improving website speed, responsiveness, and overall user experience." },
  { id: 4, title: "Consulting", description: "Providing guidance on best practices, frameworks, and development workflow." },
];

const Services = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
      
      <h1 className="text-4xl font-bold mb-10 text-lime-800 text-center">My Services</h1>

      <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="bg-black-400  border-4 border-lime-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition transform"
          >
            {/* Unique Number */}
            <div className="flex items-center justify-center mb-4">
              <div className="text-3xl font-bold text-lime-500 rounded-full w-12 h-12 flex items-center justify-center border-2 border-lime-500">
                {service.id}
              </div>
            </div>

            {/* Service Title */}
            <h2 className="text-2xl text-lime-400 font-semibold mb-2">{service.title}</h2>

            {/* Service Description */}
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;
