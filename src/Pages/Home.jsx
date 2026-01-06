const Home = () => {
  return (
    <div
      className="flex items-center justify-center text-center text-white"
      style={{
        minHeight: "calc(100vh - 96px)", // subtract fixed navbar height
        paddingTop: "0px", // Navbar ke liye separate padding already handled
      }}
    >
      <div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-lime-500 font-bold mb-6"
        style={{
           fontFamily: "Lilex",
          fontWeight: 200,
        }}
        >
          Welcome to My Portfolio website
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl text-blue-50 mx-auto">
          Hi, I’m Arslan, a front-end web developer who loves creating beautiful,
          responsive websites using modern web technologies.
        </p>
      </div>
    </div>
  );
};

export default Home;
