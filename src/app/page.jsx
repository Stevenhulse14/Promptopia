import Feed from "@components/Feed";

const Home = () => {
  return (
    <section
      style={{ flexDirection: "column" }}
      className="w-full flex-center flex-col"
    >
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI- Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Proptopia is an open-source AI prompting tool for modern wworld to
        discover, creae and share creative prompts ! Enjoy :)
      </p>
      {/* Feed Component */}
      <Feed />
    </section>
  );
};

export default Home;
