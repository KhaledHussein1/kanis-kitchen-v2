"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:kaniskitchenct@gmail.com?subject=Message from ${name}&body=Email: ${email}%0A%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-heroBg p-8 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center mb-6">Contact</h2>
        <p className="text-lg text-center mb-8">
          Have a question or special request? I&apos;d love to hear from you! Feel free to reach out, and I&apos;ll get back to you as soon as possible.
        </p>
        <p className="text-lg text-center mb-8 font-bold">
          <a href="mailto:kaniskitchenct@gmail.com" className="underline">
            kaniskitchenct@gmail.com
          </a>
        </p>
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
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
        
        {status && <p className="text-center mt-4">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
