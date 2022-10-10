const Banner = () => {
  return (
    <header>
      <div className="row ">
        <div
          style={{
            backgroundImage: "url(http://localhost:3000/images/banner.jpg)",
            width: "100vw",
            height: "60vh",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </header>
  );
};

export default Banner;
