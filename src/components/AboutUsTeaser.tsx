const AboutUsTeaser = () => {
    return (
      <section className="my-16 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-[#5a3e2b]">Baked with Love, Served with Joy</h2>
        <p className="mt-4 text-lg text-[#7a5d43]">
          At Kani’s Kitchen, we believe in the magic of homemade baking.  
          Every loaf, cookie, and pastry is crafted with care, using only the finest ingredients.  
          Come taste the warmth of tradition, one bite at a time.
        </p>
        <a
          href="/about"
          className="mt-6 inline-block bg-[#c59c6c] text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300 hover:bg-[#a87e4f] hover:scale-105"
        >
          Learn More
        </a>
      </section>
    );
  };
  
  export default AboutUsTeaser;
  