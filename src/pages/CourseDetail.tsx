import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import {
  Share2,
  Star,
  Users,
  Play,
  X,
  Check,
  BookOpen,
  Video,
  Award,
  MessageSquare,
  BarChart2,
} from 'lucide-react';

export const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'about' | 'lesson' | 'reviews'>('reviews');
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<string>('All');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };

    if (isVideoModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = '';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isVideoModalOpen]);

  // Review items matching Course Reviews.png
  const reviews = [
    {
      id: 1,
      name: 'PurePearl Studio',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      id: 2,
      name: 'Albert Flores',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
      comment:
        '"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!"',
    },
    {
      id: 3,
      name: 'Cody Fisher',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
      comment:
        '"The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."',
    },
    {
      id: 4,
      name: 'Brooklyn Simmons',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      comment:
        '"The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."',
    },
  ];

  const modules = [
    {
      num: 1,
      title: 'Module 1: Introduction to Digital Assets',
      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      num: 2,
      title: 'Module 2: Design Principles for Impact',
      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      num: 4,
      title: 'Module 4: User-Centric Design Strategies',
      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      num: 5,
      title: 'Module 5: Interactive Media and Engagement',
      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      num: 6,
      title: 'Module 6: Project Showcase and Critique',
      desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      num: 7,
      title: 'Module 7: Optimizing Digital Assets for Various Platforms',
      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  const keyPoints = [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio',
  ];

  const sneakPeaks = [
    {
      url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80',
      alt: 'Sketching concepts',
    },
    {
      url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80',
      alt: 'Laptop visual UI',
    },
    {
      url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80',
      alt: 'Desktop workspace design',
    },
    {
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80',
      alt: 'Mobile app interfaces',
    },
  ];

  const renderSidebarCard = () => (
    <div className="w-full max-w-[412px] min-h-[959px] bg-white rounded-[32px] border border-slate-200/90 p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] text-left select-none flex flex-col justify-between">
      <div>
        {/* Header: Lessons & Duration */}
        <h3 className="text-lg font-black text-slate-950 tracking-tight font-poppins">
          112 Lessons (24 hours)
        </h3>

        {/* Sample Lessons */}
        <div className="mt-5 space-y-3.5 border-b border-slate-100 pb-5">
          <div className="flex items-center justify-between text-xs sm:text-[13px]">
            <span className="text-slate-800 font-medium">01 Introduction to Digital Assets</span>
            <span className="text-[#003BE2] font-semibold shrink-0">12 mins</span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-[13px]">
            <span className="text-slate-800 font-medium">02 Design Principles for Impacts</span>
            <span className="text-[#003BE2] font-semibold shrink-0">21 mins</span>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-[13px]">
            <span className="text-slate-800 font-medium">03 Advanced Techniques in Digital Creation</span>
            <span className="text-[#003BE2] font-semibold shrink-0">16 mins</span>
          </div>
          <p className="text-xs text-slate-400 pt-1">99 more videos</p>
        </div>

        {/* Promotional Callout */}
        <p className="mt-5 text-xs text-slate-500 leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        {/* Pricing */}
        <div className="mt-3.5 flex items-baseline">
          <span className="text-3xl font-black text-[#003BE2] tracking-tight">
            $25
          </span>
          <span className="text-xs text-slate-400 font-normal ml-1">
            /lifetime
          </span>
        </div>

        {/* Enroll Button */}
        <button
          type="button"
          className="mt-4 w-full py-3.5 rounded-full bg-[#CBFC01] text-slate-950 font-bold text-sm sm:text-base hover:brightness-105 active:scale-95 transition-all shadow-sm cursor-pointer"
        >
          Enroll Now
        </button>

        {/* Course Includes */}
        <div className="mt-6 border-t border-slate-100 pt-6">
          <h4 className="text-sm font-bold text-slate-900 mb-4">
            This course include
          </h4>
          <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-3">
              <BookOpen className="w-4 h-4 text-[#003BE2] shrink-0" />
              <span>Learning Resources</span>
            </div>
            <div className="flex items-center gap-3">
              <Video className="w-4 h-4 text-[#003BE2] shrink-0" />
              <span>Quality Lesson Videos</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-4 h-4 text-[#003BE2] shrink-0" />
              <span>Certificate of Completion</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-[#003BE2] shrink-0" />
              <span>Private Consultation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Card */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
            alt="PurePearl Studio"
            className="w-11 h-11 rounded-full object-cover border border-slate-100"
          />
          <div>
            <h5 className="text-sm font-bold text-slate-900">
              PurePearl Studio
            </h5>
            <p className="text-xs text-slate-400">Professional Creator</p>
          </div>
        </div>

        <p className="mt-3.5 text-xs text-slate-500 leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link
          to="/creator"
          className="mt-4 inline-block text-xs font-semibold text-slate-800 border border-slate-200 rounded-full px-6 py-2.5 hover:bg-slate-50 transition-colors"
        >
          See Full Profile
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Top Hero Background Canvas (Exact Height: 957px matching specification) */}
      <div className="absolute top-0 left-0 right-0 h-[660px] lg:h-[957px] bg-[#003BE2] pointer-events-none overflow-hidden z-0">
        {/* Graph Paper Grid Pattern Overlay matching Hero.tsx */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* 3. Main Unified Foreground Content (z-10 - Card is NEVER cut off!) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
        {/* Header Row: Title, Subtitle, Badges & Share */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 text-white text-left">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-[1.15]">
              Build Digital Asset: A Comprehensive Guide
            </h1>

            <p className="mt-2 text-sm sm:text-base text-white/90 font-medium">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>

            <p className="mt-3 text-sm text-white/80">
              by{' '}
              <Link
                to="/creator"
                className="text-white font-bold hover:underline"
              >
                purepearl studio
              </Link>
            </p>

            {/* Metadata Badges */}
            <div className="mt-5 flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 bg-white text-slate-900 text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-xs">
                <BarChart2 className="w-3.5 h-3.5 text-slate-800" />
                Intermediate
              </span>

              <span className="inline-flex items-center gap-1.5 bg-white text-slate-900 text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.8 (172 reviews)
              </span>

              <span className="inline-flex items-center gap-1.5 bg-white text-slate-900 text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-xs">
                <Users className="w-3.5 h-3.5 text-slate-800" />
                199 Students
              </span>
            </div>
          </div>

          {/* Share Button */}
          <div className="shrink-0 flex items-center">
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}
              className="inline-flex items-center gap-2 bg-[#CBFC01] text-slate-950 font-bold px-6 py-2.5 rounded-full text-sm hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <Share2 className="w-4 h-4 stroke-[2.5]" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Unified 2-Column Grid: Left = Video + Tabs Content, Right = Intact 412x959 Card */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
          {/* Left Column (8 cols): Video Player + Content */}
          <div className="lg:col-span-8 flex flex-col text-left">
            {/* Video Preview Player */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative aspect-[16/10] sm:aspect-[16/10] lg:h-[500px] xl:h-[530px] w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-900 shadow-2xl border border-white/20 group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Video Instructor Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Centered Translucent Play Button matching designs */}
              <div className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/75 backdrop-blur-md flex items-center justify-center text-slate-950 shadow-2xl group-hover:scale-110 group-hover:bg-white active:scale-95 transition-all">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-slate-950 text-slate-950 ml-1" />
              </div>
            </div>

            {/* Tabs + Content: Positioned with clean spacing so tabs sit on the white background */}
            <div className="mt-10 sm:mt-14 lg:mt-[150px]">
              {/* Tabs Selector: About, Lesson, Reviews (100% on White Canvas) */}
              <div className="flex items-center gap-2.5 sm:gap-3 select-none flex-wrap">
                <button
                  type="button"
                  onClick={() => setActiveTab('about')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'about'
                      ? 'bg-[#CBFC01] text-slate-950 shadow-2xs'
                      : 'border border-slate-200 text-slate-700 bg-white hover:bg-slate-50'
                  }`}
                >
                  About
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('lesson')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'lesson'
                      ? 'bg-[#CBFC01] text-slate-950 shadow-2xs'
                      : 'border border-slate-200 text-slate-700 bg-white hover:bg-slate-50'
                  }`}
                >
                  Lesson
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('reviews')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'reviews'
                      ? 'bg-[#CBFC01] text-slate-950 shadow-2xs'
                      : 'border border-slate-200 text-slate-700 bg-white hover:bg-slate-50'
                  }`}
                >
                  Reviews
                </button>
              </div>

              {/* TAB 1: ABOUT (matching Course Details.png) */}
              {activeTab === 'about' && (
                <div className="mt-8 animate-fadeIn">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                    Description
                  </h2>

                  <div className="mt-4 space-y-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &ldquo;Build Digital Assets: A Comprehensive Guide.&rdquo; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>
                    <p>
                      As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                    </p>
                  </div>

                  {/* Sneak Peak Section */}
                  <h3 className="mt-10 text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                    Sneak Peak
                  </h3>
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {sneakPeaks.map((item, idx) => (
                      <div
                        key={idx}
                        className="aspect-[4/3] rounded-[18px] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs"
                      >
                        <img
                          src={item.url}
                          alt={item.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Key Points Checklist */}
                  <h3 className="mt-10 text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                    Key Points
                  </h3>
                  <div className="mt-5 space-y-3.5">
                    {keyPoints.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center text-white shrink-0 shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-sm sm:text-base font-bold text-slate-800">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: LESSON (matching Course Lessons.png) */}
              {activeTab === 'lesson' && (
                <div className="mt-8 animate-fadeIn">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                    Explore the Modules
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>

                  <h3 className="mt-8 text-lg font-bold text-slate-950">Lesson List</h3>
                  <div className="mt-4 space-y-4">
                    {modules.map((m) => (
                      <div
                        key={m.num}
                        className="flex items-start gap-4 p-4 rounded-[22px] border border-slate-100 hover:border-slate-200 transition-colors bg-white shadow-2xs"
                      >
                        <div className="w-12 h-12 rounded-full bg-[#CBFC01] flex items-center justify-center text-slate-950 shrink-0 shadow-xs">
                          <Video className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-slate-950">
                            {m.title}
                          </h4>
                          <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="mt-10 text-lg font-bold text-slate-950">Lesson Content</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                  </p>

                  <h3 className="mt-10 text-lg font-bold text-slate-950">Lesson Progress Tracking</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                  </p>

                  {/* Progress Tracking Card */}
                  <div className="mt-5 p-5 sm:p-6 rounded-[24px] border border-slate-200/80 bg-white shadow-xs max-w-xl">
                    <p className="text-xs text-slate-500 font-medium">Learning Progress</p>
                    <p className="text-3xl font-black text-slate-950 mt-1 mb-3">55%</p>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#CBFC01] rounded-full w-[55%]" />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: REVIEWS (matching Course Reviews.png) */}
              {activeTab === 'reviews' && (
                <div className="mt-8 animate-fadeIn">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight font-poppins">
                    What Learners Are Saying
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Discover what our learners have to say about their experience with &lsquo;Build Digital Assets: A Comprehensive Guide.&rsquo; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>

                  {/* Ratings Breakdown Summary Box */}
                  <div className="mt-6 p-6 sm:p-8 rounded-[28px] border border-slate-200/90 bg-white shadow-xs flex flex-col sm:flex-row items-center gap-8">
                    {/* Left Big Lime Rating Box */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-[24px] bg-[#CBFC01] flex flex-col items-center justify-center shrink-0 shadow-sm">
                      <span className="text-xs font-semibold text-slate-800">Ratings</span>
                      <span className="text-4xl font-black text-slate-950 tracking-tight mt-1">
                        4.7
                      </span>
                    </div>

                    {/* Right Progress Rows */}
                    <div className="flex-1 w-full space-y-2 text-xs text-slate-600">
                      {[
                        { stars: 5, count: 720, pct: '85%' },
                        { stars: 4, count: 120, pct: '48%' },
                        { stars: 3, count: 21, pct: '18%' },
                        { stars: 2, count: 12, pct: '10%' },
                        { stars: 1, count: 16, pct: '14%' },
                      ].map((row) => (
                        <div key={row.stars} className="flex items-center gap-3">
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex-1">
                            <div
                              className="h-full bg-[#CBFC01] rounded-full"
                              style={{ width: row.pct }}
                            />
                          </div>
                          <div className="flex items-center gap-0.5 w-20 shrink-0">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < row.stars
                                    ? 'fill-slate-950 text-slate-950'
                                    : 'text-slate-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="w-8 text-right font-medium text-slate-700">
                            {row.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews Filter Pills */}
                  <h3 className="mt-10 text-lg font-bold text-slate-950">Individual Reviews:</h3>
                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    {['All rating', '5', '4', '3', '2', '1'].map((f) => {
                      const isActive = selectedRatingFilter === f || (f === 'All rating' && selectedRatingFilter === 'All');
                      return (
                        <button
                          key={f}
                          type="button"
                          onClick={() => setSelectedRatingFilter(f === 'All rating' ? 'All' : f)}
                          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#CBFC01] text-slate-950 shadow-2xs font-bold'
                              : 'border border-slate-200 text-slate-700 bg-white hover:bg-slate-50'
                          }`}
                        >
                          {f === 'All rating' ? (
                            'All rating'
                          ) : (
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-slate-700 text-slate-700 inline" />
                              {f}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Reviews List */}
                  <div className="mt-6 space-y-4">
                    {reviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="p-5 sm:p-6 rounded-[22px] border border-slate-200/80 bg-white shadow-2xs"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={rev.avatar}
                              alt={rev.name}
                              className="w-10 h-10 rounded-full object-cover border border-slate-100"
                            />
                            <div>
                              <p className="text-sm font-bold text-slate-950">{rev.name}</p>
                              <p className="text-xs text-slate-500">{rev.role}</p>
                            </div>
                          </div>
                          <span className="text-xs text-slate-400">{rev.time}</span>
                        </div>

                        <div className="flex items-center gap-1 mt-3">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                          ))}
                        </div>

                        <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {rev.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column (4 cols): Render Entire Card without any clipping */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
            {renderSidebarCard()}
          </div>
        </div>
      </div>

      {/* 4. Full-Featured Video Popup Modal with HTML5 Video Player */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-[28px] overflow-hidden shadow-2xl border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-slate-950 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CBFC01] animate-ping" />
                <h3 className="text-white text-sm sm:text-base font-bold tracking-tight">
                  Build Digital Asset: Course Introduction Video
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Video Canvas */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                poster="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* 5. Footer */}
      <Footer />
    </div>
  );
};
