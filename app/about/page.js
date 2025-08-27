"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import BackgroundEffects from "../components/BackgroundEffects";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast",
    "Creative Thinker",
  ];

  useEffect(() => {
    // Typewriter effect
    const typeWriter = () => {
      const currentText = roles[currentRole];
      let i = 0;
      const timer = setInterval(() => {
        if (i < currentText.length) {
          setTypedText(currentText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            // Clear text
            const clearTimer = setInterval(() => {
              if (i > 0) {
                setTypedText(currentText.slice(0, i - 1));
                i--;
              } else {
                clearInterval(clearTimer);
                setCurrentRole((prev) => (prev + 1) % roles.length);
              }
            }, 100);
          }, 2000);
        }
      }, 150);
    };

    typeWriter();
  }, [currentRole]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll("[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: "100+",
      label: "Projects Completed",
      icon: "🚀",
      color: "text-blue-400",
      suffix: "",
    },
    {
      number: "4+",
      label: "Years Experience",
      icon: "⏰",
      color: "text-green-400",
      suffix: "",
    },
    {
      number: "50+",
      label: "Technologies",
      icon: "💻",
      color: "text-purple-400",
      suffix: "",
    },
    {
      number: "100",
      label: "Client Satisfaction",
      icon: "⭐",
      color: "text-yellow-400",
      suffix: "%",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: "🔧",
      color: "text-cyan-400",
      suffix: "",
    },
    {
      number: "99.9",
      label: "Uptime Guarantee",
      icon: "📈",
      color: "text-emerald-400",
      suffix: "%",
    },
  ];


  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "HTML, CSS, JS, REACT, PHP, WORDPRESS, etc.",
      period: "2017 - Present",
      description:
        "Developing comprehensive web solutions using modern technologies and frameworks",
      achievements: [
        "Expert in frontend frameworks",
        "Backend development proficiency",
        "CMS customization specialist",
      ],
      icon: "💻",
    },
    {
      title: "Discord Bot Developer",
      company: "PYTHON, JAVASCRIPT, etc",
      period: "Apr 2017 - Present",
      description:
        "Creating automated Discord bots and server management solutions",
      achievements: [
        "Custom bot development",
        "Server automation systems",
        "Community engagement tools",
      ],
      icon: "🤖",
    },
    {
      title: "Graphic Designer",
      company: "Thumbnails/Banner/Logo (YOUTUBE, INSTAGRAM, etc)",
      period: "May 2019 - Present",
      description:
        "Designing visual content for social media platforms and branding",
      achievements: [
        "YouTube thumbnail design",
        "Social media branding",
        "Logo and banner creation",
      ],
      icon: "🎨",
    },
    {
      title: "Blender Animator",
      company: "3D Animation, Modelling, Rendering, etc.",
      period: "Jan 2020 - Present",
      description:
        "Creating 3D animations, models, and rendered content using Blender",
      achievements: [
        "3D modeling expertise",
        "Animation production",
        "High-quality rendering",
      ],
      icon: "🎬",
    },
    {
      title: "Professional Gamer",
      company: "Youtube | Twitch | Instagram",
      period: "Feb 2018 - Present",
      description:
        "Content creation and streaming across multiple gaming platforms",
      achievements: [
        "Multi-platform streaming",
        "Gaming content creation",
        "Community building",
      ],
      icon: "🎮",
    },
    {
      title: "Content Creator/Writer",
      company: "Content Writing, Blogging, etc.",
      period: "March 2020 - Present",
      description:
        "Producing written content, blogs, and creative writing pieces",
      achievements: [
        "Blog content creation",
        "Creative writing projects",
        "Content strategy development",
      ],
      icon: "✍️",
    },
  ];

  const interests = [
    {
      name: "Photography",
      icon: "📸",
      description: "Capturing moments and emotions",
    },
    { name: "Gaming", icon: "🎮", description: "Strategy and adventure games" },
    { name: "Music", icon: "🎵", description: "Listening and creating beats" },
    { name: "Travel", icon: "✈️", description: "Exploring new cultures" },
    {
      name: "Reading",
      icon: "📚",
      description: "Tech blogs and sci-fi novels",
    },
    { name: "Fitness", icon: "💪", description: "Staying healthy and active" },
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-x-hidden relative">
        <BackgroundEffects />

        {/* Additional animated background elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <Header />

        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center relative pt-20 z-10"
        >
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div
            className={`relative max-w-6xl mx-auto px-6 text-center transform transition-all duration-1000 z-10 ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-8">
              {/* Enhanced title with glowing effect */}
              <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse relative">
                About Me
                <div className="absolute inset-0 text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 bg-clip-text text-transparent blur-xl animate-pulse"></div>
              </h1>

              {/* Enhanced typing animation container */}
              <div className="h-20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-2xl animate-pulse"></div>
                <span className="text-3xl md:text-4xl font-bold text-white relative z-10">
                  I&apos;m a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 relative">
                    {typedText}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 bg-clip-text text-transparent blur-sm">
                      {typedText}
                    </div>
                  </span>
                  <span className="animate-pulse text-cyan-400 ml-1">|</span>
                </span>
              </div>
            </div>

            {/* Enhanced description with glowing border */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative bg-black/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
                Passionate about creating exceptional digital experiences
                through clean code, innovative design, and cutting-edge
                technology. I turn ideas into reality with
                <span className="text-cyan-400 font-semibold">
                  {" "}
                  creativity
                </span>{" "}
                and
                <span className="text-purple-400 font-semibold">
                  {" "}
                  precision
                </span>
                .
              </p>
            </div>

            {/* Enhanced buttons with better hover effects */}
            <div className="flex flex-wrap justify-center gap-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <span>Download CV</span>
                  <span className="group-hover:translate-x-1 group-hover:scale-125 transition-all duration-300">
                    📄
                  </span>
                </span>
              </button>
              <Link href="/">
                <button className="group relative px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/40 overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    <span>Back to Home</span>
                    <span className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      🏠
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Personal Information Section */}
        <section id="personal-info" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                isVisible["personal-info"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 relative">
                Get to Know Me
                <div className="absolute inset-0 text-5xl font-black bg-gradient-to-r from-cyan-400/20 to-blue-400/20 bg-clip-text text-transparent blur-xl"></div>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Beyond the code and pixels, here's my story and what drives my
                passion.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* About Me Content - Centered */}
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible["personal-info"]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/40 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="text-4xl">👨‍💻</div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white">
                          I'm Bhupender Kumar
                        </h3>
                        <p className="text-cyan-400 font-semibold">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p className="flex items-start gap-3">
                        <span className="text-pink-400 mt-1">🧠</span>
                        <span>
                          I am a Full Stack Designer, Friction Bot Designer,
                          Realistic Originator, Blender Illustrator, Proficient
                          Gamer, Substance Creator/Writer, and a student.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">🎓</span>
                        <span>
                          I am pursuing my Bachelor of Arts (Vocational) in
                          Industrial Relations and Personnel Management from
                          College of Vocational Studies, University of Delhi.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">💻</span>
                        <span>
                          I have been a self-taught engineer since 2003.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1">🔧</span>
                        <span>
                          I have worked on various projects and have experience
                          in different areas.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1">📚</span>
                        <span>
                          I am an enthusiastic learner and always eager to learn
                          new things.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">👥</span>
                        <span>I am a fast learner and a team player.</span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">🤝</span>
                        <span>
                          I am always ready to help others and share my
                          knowledge with them.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-pink-400 mt-1">🧠</span>
                        <span>
                          I am a creative person and always try to think out of
                          the box.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-emerald-400 mt-1">💪</span>
                        <span>
                          I am a dedicated individual and always try to give my
                          best in everything I do.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">⏰</span>
                        <span>
                          I am responsible and always try to do my work on time.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">😊</span>
                        <span>
                          I am friendly and always try to get to know new
                          people.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">❤️</span>
                        <span>
                          I am supportive and always try to help those in need.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1">✨</span>
                        <span>
                          I am a positive person and always try to keep myself
                          positive in every situation.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1">🎉</span>
                        <span>
                          I am a fun-loving person and always try to enjoy life
                          to its fullest.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">👨‍👩‍👧‍👦</span>
                        <span>I take much care of my family and friends.</span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">🇮🇳</span>
                        <span>
                          I am a responsible citizen, and I always try to follow
                          the procedures and guidelines set by my country.
                        </span>
                      </p>

                      <p className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">❤️</span>
                        <span>
                          I feel proud to be an Indian and am doing something
                          for my country.
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                isVisible.stats
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 relative">
                Professional Metrics
                <div className="absolute inset-0 text-5xl font-black bg-gradient-to-r from-blue-400/20 to-cyan-400/20 bg-clip-text text-transparent blur-xl"></div>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that speak for themselves - a testament to dedication,
                quality, and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-1000 ${
                    isVisible.stats
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-700/50 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group relative overflow-hidden">
                    {/* Enhanced background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl"></div>

                    <div className="relative z-10">
                      <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter group-hover:drop-shadow-lg">
                        {stat.icon}
                      </div>
                      <div
                        className={`text-3xl lg:text-4xl font-black mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300 relative`}
                      >
                        <span className="relative z-10">
                          {stat.number}
                          {stat.suffix}
                        </span>
                        <div
                          className={`absolute inset-0 ${stat.color} blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                        >
                          {stat.number}
                          {stat.suffix}
                        </div>
                      </div>
                      <div className="text-gray-400 font-medium text-sm lg:text-base group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>

                    {/* Enhanced animated border with multiple layers */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                isVisible.experience
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 relative">
                Professional Experience
                <div className="absolute inset-0 text-5xl font-black bg-gradient-to-r from-purple-400/20 to-pink-400/20 bg-clip-text text-transparent blur-xl"></div>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                My journey through different roles and responsibilities,
                building expertise and delivering results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`group transform transition-all duration-1000 ${
                    isVisible.experience
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/40 hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20 transition-all duration-500 relative overflow-hidden">
                    {/* Enhanced background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-pink-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-6">
                        <div className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter group-hover:drop-shadow-lg">
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                {exp.title}
                              </h3>
                              <p className="text-purple-400 font-semibold text-lg">
                                {exp.company}
                              </p>
                            </div>
                            <span className="text-gray-400 font-medium mt-2 lg:mt-0">
                              {exp.period}
                            </span>
                          </div>

                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {exp.description}
                          </p>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-3 text-gray-300"
                                >
                                  <span className="text-green-400 group-hover:scale-125 transition-transform duration-300">
                                    ✓
                                  </span>
                                  <span className="group-hover:text-white transition-colors duration-300">
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced glowing border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Personal Interests */}
        <section id="interests" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                isVisible.interests
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 relative">
                Beyond Code
                <div className="absolute inset-0 text-5xl font-black bg-gradient-to-r from-green-400/20 to-blue-400/20 bg-clip-text text-transparent blur-xl"></div>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Life is more than just coding. Here's what fuels my creativity
                and keeps me inspired.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className={`group transform transition-all duration-1000 ${
                    isVisible.interests
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/40 hover:scale-105 hover:shadow-xl hover:shadow-green-400/20 transition-all duration-500 text-center relative overflow-hidden">
                    {/* Enhanced background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-blue-400/5 to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                    <div className="relative z-10">
                      <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter group-hover:drop-shadow-lg">
                        {interest.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300">
                        {interest.name}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {interest.description}
                      </p>
                    </div>

                    {/* Enhanced glowing border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-green-400/30 via-blue-400/30 to-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="cta" className="py-20 relative z-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible.cta
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/30">
                  <h2 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 relative">
                    Let's Build Something Amazing
                    <div className="absolute inset-0 text-5xl font-black bg-gradient-to-r from-yellow-400/20 to-orange-400/20 bg-clip-text text-transparent blur-xl"></div>
                  </h2>
                  <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Ready to turn your ideas into reality? Let's collaborate and
                    create something extraordinary together.
                  </p>

                  <div className="flex flex-wrap justify-center gap-6">
                    <Link href="/services">
                      <button className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/40 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center gap-3">
                          <span>Start a Project</span>
                          <span className="group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300">
                            🚀
                          </span>
                        </span>
                      </button>
                    </Link>
                    <Link href="/">
                      <button className="group relative px-10 py-5 border-2 border-orange-400 rounded-full font-bold text-lg hover:bg-orange-400 hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-400/40 overflow-hidden">
                        <div className="absolute inset-0 bg-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center gap-3">
                          <span>View Portfolio</span>
                          <span className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                            👀
                          </span>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
}
