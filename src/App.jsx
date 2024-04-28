import React from 'react';
import Navbar from './components/Navbar';
import Hero1 from './components/Hero1';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero1 title="Test Title" subtitle="Test subtitle" />
      <HomeCards />
      <JobListings />
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
