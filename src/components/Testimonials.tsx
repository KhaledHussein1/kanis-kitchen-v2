import React from 'react';

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
      <div className="max-w-5xl bg-white shadow-lg rounded-xl p-8 text-center animate-fade-in">
        <h2 className="text-5xl font-bold text-accent mb-4">What Our Customers Say</h2>
        <p className="text-lg text-foreground leading-relaxed">Real stories from people who love our bakes.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f5e6ca] shadow-md rounded-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full border-4 border-accent"
              />
              <p className="text-lg mt-4 italic text-foreground">"{testimonial.review}"</p>
              <h4 className="mt-3 text-accent">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
