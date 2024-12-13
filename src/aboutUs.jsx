import React from 'react';
import { TiGroup } from "react-icons/ti";

const AboutUs = () => {
  return (
    <div className="bg-gray-50  px-10 md:px-8 py-14 mt-20">
      {/* About Top Section */}
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <div className="w-full md:w-7/10 px-4 mb-6 md:mb-0">
          <h4 className="text-3xl text-gray-900  mb-4 font-poetsen">Experience the Call Center with PrimeLine</h4>
          <p className="text-sm text-gray-900 font-Inder w-[80%]">
            Conveys the forward-thinking nature of Posinnove's solution, emphasizing its interactive and innovative approach to education. 
            Through this platform, users are offered a glimpse into a future where technology enhances learning outcomes, fosters engagement, 
            and prepares learners for success in a rapidly evolving digital world.
            I recently had the opportunity to interact with a call center, and I must say, it was a mixture of challenges and relief. I had a technical issue with a product, and I called the customer service number expecting a long wait and perhaps some frustration. To my surprise, the call center representative answered promptly, greeting me with professionalism and a calm, helpful tone.

            At first, I was unsure of how to explain the issue, as it was a complex technical problem, but the representative was patient and guided me through the process of troubleshooting. They took the time to ask the right questions, making sure they understood the problem clearly before providing solutions. The clarity and precision in their responses were impressive, and it helped build trust in their expertise.
          </p>
        </div>
        <img src="/image/exp.png" alt="Experience Image" className="w-full md:w-1/3 h-auto rounded-sm" />
      </div>

      {/* About Content Section */}
      <div className="flex flex-wrap justify-between gap-8 px-4 mb-20 mt-8">
        <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
          <h4 className="text-1xl text-blue-800 text-center mb-4 font-poetsen">Description</h4>
          <p className="text-sm text-gray-700 text-center font-Inder">
            PrimeLine is a groundbreaking online platform transforming education through immersive, hands-on learning experiences that bridge theory with practice, fostering collaboration and readiness for the contemporary world.
          </p>
        </div>
        <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
          <h4 className="text-1xl text-blue-800 text-center mb-4 font-poetsen">Our Mission</h4>
          <p className="text-sm text-gray-700 text-center font-Inder">
            PrimeLine's mission is to revolutionize education by empowering students with hands-on learning experiences, cultivating creativity, critical thinking, and problem-solving skills to inspire lifelong learning and success in the modern era.
          </p>
        </div>
        <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
          <h4 className="text-1xl text-blue-800 text-center mb-4 font-poetsen">Our Vision</h4>
          <p className="text-sm text-gray-700 text-center font-Inder">
            Long-Term Vision Posinnove aspires to be a catalyst for positive change in the African education landscape.
            to help to improve secure while you are using technology nowdays.
          </p>
        </div>
      </div>

      {/* About Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between px-4 mb-12">
        <img src="/image/aboutus.webp" alt="Graph" className="w-full md:w-2/5 rounded-lg" />
        <div className="w-full md:w-3/5 px-4 mt-6 md:mt-0">
          <h4 className="text-1xl text-gray-900 font-poetsen mb-4 text-center">Our Story</h4>
          <p className="text-1xl text-gray-700 w-[100%] px-6 font-poetsen">
            In Kigali, Rwanda, Bonheur, a driven student, observed the disparity between classroom teachings and practical skills needed for success. Motivated by this gap, he envisioned Posinnove, an online platform to bridge theory with practice in education. With determination and a dedicated team, they overcame challenges to create Posinnove, empowering Rwandan students with hands-on learning experiences.
            Despite hurdles, Posinnove's launch captivated the education sector, inspiring learners and educators alike. Today, Posinnove continues to revolutionize education, embodying the power of student-led innovation in Rwanda and beyond.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="text-center mb-12">
        <h4 className="text-1xl text-blue-800 font-semibold mb-4">Our Core Values</h4>
        <div className="grid grid-cols-2 w-full">
          <div className="w-full md:w-full p-2 m-4 ml-2 bg-white rounded-lg shadow-md border border-gray-300">
            <div className="flex items-center mb-2">
              <TiGroup size={30} color="#005ea1" />
              <div className="ml-4">
                <h2 className="text-1xl text-blue-800">Team Work</h2>
                <p className="text-sm text-gray-700">
                  Teamwork is a core value of our team, fostering collaboration, synergy, and mutual support to achieve our shared objectives effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-full p-2 m-4 bg-white rounded-lg shadow-md border border-gray-300 float-right">
            <div className="flex items-center mb-4 ">
              <TiGroup size={30} color="#005ea1" />
              <div className="ml-4">
                <h2 className="text-1xl text-blue-800">Ownership</h2>
                <p className="text-sm text-gray-700">
                  Ownership is a key value that drives our commitment to delivering results, fostering a sense of responsibility and pride in our work.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-full p-2 ml-2 bg-white rounded-lg m-4 shadow-md border border-gray-300">
            <div className="flex items-center mb-2 justify-between">
              <TiGroup size={30} color="#005ea1" />
              <div className="ml-4">
                <h2 className="text-1xl text-blue-800">Accountability</h2>
                <p className="text-sm text-gray-700">
                  Accountability means taking ownership of our actions and ensuring that we meet our commitments with integrity and transparency.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-full p-2 bg-white rounded-lg m-4 shadow-md border border-gray-300">
            <div className="flex items-center mb-2 justify-between">
              <TiGroup size={20} color="#005ea1" />
              <div className="ml-4">
                <h2 className="text-1xl text-blue-800">Collaboration</h2>
                <p className="text-sm text-gray-700">
                  Collaboration is vital to success. We value the contributions of others, working together to achieve common goals and solve problems creatively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
