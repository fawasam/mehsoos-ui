const GradientTitle = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <span
        className="text-2xl font-bold ml-3 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 inline-block text-transparent bg-clip-text"
        style={{
          fontFamily: "cursive", // Replace with the exact font
        }}
      >
        Mehzoozeuromillion
      </span>
    </>
  );
};

export default GradientTitle;
