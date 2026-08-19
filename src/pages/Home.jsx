import React, { useState } from 'react';

export default function BookingAgentLanding() {
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    genre: '',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.artistName && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-800">
        <div className="text-xl font-bold tracking-wider text-amber-400 uppercase">
          First Kevington Agency
        </div>
        <a
          href="#contact"
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Book Now
        </a>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto text-center px-6 py-20">
        <span className="inline-block px-3 py-1 bg-amber-400/10 text-amber-400 rounded-full text-sm font-medium mb-6 border border-amber-400/20">
          For Independent Musicians & Bands
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Focus on the music. <br />
          <span className="text-amber-400">We’ll handle the venues.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          We connect original artists and cover acts with top local clubs, theaters, and private venues. Stop pitching endlessly—start filling your gig calendar.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors text-center"
          >
            Get Booked
          </a>
          <a
            href="#how-it-works"
            className="border border-slate-700 hover:bg-slate-900 text-slate-300 font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors text-center"
          >
            How It Works
          </a>
        </div>
      </header>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-900">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Why Artists Partner With Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="w-12 h-12 bg-amber-400/10 text-amber-400 flex items-center justify-center rounded-lg text-xl font-bold mb-4">
              01
            </div>
            <h3 className="text-xl font-bold mb-2">Direct Venue Access</h3>
            <p className="text-slate-400">
              Skip cold emailing talent buyers. We have active relationships with bookers looking for talent right now.
            </p>
          </div>
          <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="w-12 h-12 bg-amber-400/10 text-amber-400 flex items-center justify-center rounded-lg text-xl font-bold mb-4">
              02
            </div>
            <h3 className="text-xl font-bold mb-2">Fair Guarantees</h3>
            <p className="text-slate-400">
              We negotiate competitive guarantees, door splits, and hospitality riders so you never get underpaid.
            </p>
          </div>
          <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800">
            <div className="w-12 h-12 bg-amber-400/10 text-amber-400 flex items-center justify-center rounded-lg text-xl font-bold mb-4">
              03
            </div>
            <h3 className="text-xl font-bold mb-2">Route Optimization</h3>
            <p className="text-slate-400">
              Planning a regional tour? We construct realistic routing that keeps travel costs low and show frequency high.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          How To Get Started
        </h2>
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <h3 className="text-lg font-semibold mb-1">Submit Your Electronic Press Kit (EPK)</h3>
              <p className="text-slate-400">Fill out the form below with links to your live audio, videos, and social profiles.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <h3 className="text-lg font-semibold mb-1">Consultation Call</h3>
              <p className="text-slate-400">We evaluate your draws, targeted markets, and desired payout structure.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <h3 className="text-lg font-semibold mb-1">Confirm Dates</h3>
              <p className="text-slate-400">We handle negotiations, issue contracts, and lock in your show schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="contact" className="max-w-2xl mx-auto px-6 py-20">
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-center">Let’s Book Your Next Show</h2>
          <p className="text-slate-400 text-center mb-8">
            Tell us about your act and where you want to perform.
          </p>

          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-lg text-center">
              <h3 className="font-bold text-lg mb-2">Submission Received!</h3>
              <p>Thanks for reaching out, {formData.artistName}. We'll review your music and get back to you within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-slate-300">
                  Artist or Band Name *
                </label>
                <input
                  type="text"
                  name="artistName"
                  required
                  value={formData.artistName}
                  onChange={handleChange}
                  placeholder="e.g. The Midnight Echoes"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-300">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="booking@yourband.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-slate-300">
                    Genre
                  </label>
                  <input
                    type="text"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    placeholder="Indie Rock, Jazz, DJ, etc."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-slate-300">
                  Target Cities / Base Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Austin, TX & surrounding areas"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-slate-300">
                  Links to Music/EPK & Tour Goals
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Include Spotify, YouTube, or EPK links, along with dates or venues you're targeting."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3.5 rounded-lg transition-colors mt-2"
              >
                Submit Booking Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} First Kevington Agency. All rights reserved.
      </footer>
    </div>
  );
}
