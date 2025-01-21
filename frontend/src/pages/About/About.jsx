import React from 'react';
import { AnimationBorder } from '../../Animation';

export function About() {
  return (
    <div>
      <div className="py-20 text-center px-4 dark:text-white dark:bg-gray-900 border-b-2">
        <AnimationBorder isNav={false} keyValue="about-heading">
          <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 pb-5 inline-block">
            About Us
          </h2>
        </AnimationBorder>
        <div className="container mx-auto max-w-4xl p-8">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-semibold text-gray-800">
              Welcome to The Blog Hub
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              A vibrant space where thoughts, ideas, and stories come alive!
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-3xl text-start font-bold text-gray-800">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-start">
              Our blog is a hub of diverse content, carefully curated to cater
              to readers from all walks of life. From personal growth and
              lifestyle tips to technology insights and global trends, we aim to
              cover topics that resonate with our readers. Whether you’re here
              to learn, share, or simply unwind, The Blog Hub has something for
              you.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl text-start font-bold text-gray-800">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-start">
              We envision a world where information is accessible, ideas flow
              freely, and communities are built through shared experiences and
              knowledge. Our goal is to be a trusted destination where readers
              can find authentic, high-quality content that adds value to their
              lives.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl text-start font-bold text-gray-800">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-start">
              Behind The Blog Hub is a passionate team of writers, editors, and
              creators dedicated to crafting engaging and thought-provoking
              articles. Each piece of content reflects our commitment to
              authenticity, creativity, and excellence. We’re a group of
              storytellers at heart, driven by the belief that great stories can
              inspire change.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl text-start font-bold text-gray-800">
              Why Choose Us?
            </h2>
            <ul className="list-inside list-disc mt-4 text-lg text-gray-600 text-start">
              <li>
                Quality Content: Our articles are written with care, offering
                well-researched and insightful perspectives.
              </li>
              <li>
                Diverse Topics: We explore a wide range of subjects to ensure
                there’s something for everyone.
              </li>
              <li>
                Community-Centric Approach: We value our readers and strive to
                build a community where everyone feels heard and valued.
              </li>
              <li>
                Constant Growth: We are always learning, evolving, and
                innovating to bring you the best content experience.
              </li>
            </ul>
          </section>

          <section className="text-start mt-16">
            <h2 className="text-3xl font-bold text-gray-800">Join Us</h2>
            <p className="text-lg text-gray-600 mt-4 text-start">
              At The Blog Hub, we don’t just want you to read; we want you to be
              part of the journey. Share your thoughts, engage with our content,
              and feel free to contribute if you have a story to tell or
              expertise to share. Together, we can make The Blog Hub a thriving
              space for creativity and connection.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Thank you for being here. Let’s explore, learn, and grow together!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
