const Testimonials = () => {
    const testimonials = [
      {
        name: "Emily Johnson",
        image: "/testimonials/emily.jpg",
        review: "The pastries are absolutely divine! You can taste the love and passion in every bite.",
      },
      {
        name: "Michael Brown",
        image: "/testimonials/michael.jpg",
        review: "Best sourdough bread I’ve ever had! Soft inside, perfectly crisp crust. Will order again!",
      },
      {
        name: "Sophie Martinez",
        image: "/testimonials/sophie.jpg",
        review: "Kani’s Kitchen makes my mornings better. The cinnamon rolls are a dream!",
      },
    ];
  
    return (
      <section className="flex justify-center items-center py-16">
        {/* Contained Card-like Box */}
        <div className="max-w-5xl bg-[#f9f1e7] shadow-lg rounded-xl p-8 text-center">
          <h2 className="text-4xl font-bold text-[#5a3e2b]">What Our Customers Say</h2>
          <p className="text-lg text-[#7a5d43] mt-2">
            Real stories from people who love our bakes.
          </p>
  
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 mx-auto rounded-full border-4 border-[#e0c3a0]"
                />
                <p className="text-lg mt-4 italic">"{testimonial.review}"</p>
                <h4 className="mt-3 font-semibold text-[#5a3e2b]">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  