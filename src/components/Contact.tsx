"use client";
import React from 'react';

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Collect form data here if needed
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:kaniskitchenct@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`;

    // Open default mail client
    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-heroBg p-8 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center mb-6">
          Contact
        </h2>
        <p className="text-lg text-center mb-8">
          Have a question or special request? I&apos;d love to hear from you! Feel free to reach out, and I&apos;ll get back to you as soon as possible.
        </p>
        <p className="text-lg text-center mb-8 font-bold">
          <a href="mailto:kaniskitchenct@gmail.com">kaniskitchenct@gmail.com</a>
        </p>
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-10 py-5 bg-black text-heroBg font-normal text-xl rounded-tl-[50px] rounded-br-[50px] hover:bg-black/90 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
