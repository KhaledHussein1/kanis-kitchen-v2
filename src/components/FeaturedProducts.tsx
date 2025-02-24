const FeaturedProducts = () => {
    const products = [
      {
        name: "Fresh Sourdough Bread",
        image: "/images/sourdough.jpg",
        description: "Crispy on the outside, soft on the inside. Baked fresh daily.",
      },
      {
        name: "Chocolate Chip Cookies",
        image: "/images/cookies.jpg",
        description: "Golden brown, gooey chocolate, and a sprinkle of love.",
      },
      {
        name: "Blueberry Muffins",
        image: "/images/muffins.jpg",
        description: "Bursting with juicy blueberries and a buttery crumb topping.",
      },
    ];
  
    return (
      <section className="my-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#5a3e2b]">Our Featured Bakes</h2>
        <p className="mt-2 text-lg text-[#7a5d43]">Handcrafted treats made fresh every day.</p>
  
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-[#f5e6ca] rounded-lg shadow-lg p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold text-[#5a3e2b]">{product.name}</h3>
              <p className="mt-2 text-[#7a5d43]">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedProducts;
  