// import React from "react";
// import blogImage1 from "../assets/BlogPage/Business_IMG_1.jpg";

// const BlogContent = () => {
//   const blogPosts = [
//     {
//       title: "3 Reasons a New Pre-Revenue Startup Won My Investment (Do These, and Yours Can Too)",
//       description:
//         "They say you need traction, revenue, or prior experience before seeking investment, but one founder I know proved them wrong.",
//       image: blogImage1,
//       category: "Business",
//       link: "https://medium.com/entrepreneur-s-handbook/3-reasons-a-new-pre-revenue-startup-won-my-investment-do-these-and-yours-can-too-501fb43a64cb",
//     },
//     {
//       title: "Finance Strategies for 2025: What You Need to Know",
//       description:
//         "An in-depth look at the financial strategies to employ in 2025 and beyond, with expert insights and forecasts.",
//       image: "/blog/blog-2.jpg",
//       category: "Finance",
//       link: "/blog/2",
//     },
//     {
//       title: "How Technology is Reshaping Healthcare",
//       description:
//         "The role of emerging technologies in transforming healthcare, from AI to telemedicine, and how it's improving patient care.",
//       image: "/blog/blog-3.jpg",
//       category: "Technology",
//       link: "/blog/3",
//     },
//     {
//       title: "Marketing Trends You Can't Ignore in 2025",
//       description:
//         "Get ahead of the curve with the latest marketing trends, strategies, and tools that will dominate the digital landscape in 2025.",
//       image: "/blog/blog-4.jpg",
//       category: "Marketing",
//       link: "/blog/4",
//     },
//     {
//       title: "Startups to Watch in 2025: The Next Big Things",
//       description:
//         "A curated list of promising startups to watch in 2025, with insights into their growth potential and innovation strategies.",
//       image: "/blog/blog-5.jpg",
//       category: "Startups",
//       link: "/blog/5",
//     },
//     {
//       title: "Building a Winning Strategy: Insights from Industry Leaders",
//       description:
//         "Learn from the best as industry leaders share their experiences and insights on how to build a successful business strategy.",
//       image: "/blog/blog-6.jpg",
//       category: "Strategy",
//       link: "/blog/6",
//     },
//   ];

//   return (
//     <div className="py-20 bg-white">
//       <div className="container max-w-[1200px] mx-auto px-4">
//         <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
//           Latest Articles
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {blogPosts.map((post, index) => (
//             <div key={index} className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
//               <img src={post.image} alt={post.title} className="rounded-lg mb-4" width={400} height={250} />
//               <h3 className="text-2xl font-bold text-[#001E80]">{post.title}</h3>
//               <p className="mt-2 text-[#020D3E]">{post.description}</p>
//               <button className="mt-4 text-[#001E80] font-semibold hover:underline">
//                 <a href={post.link}>Read More →</a>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogContent;

import React from "react";
import Image from "next/image"; // Import next/image

// Import images from the assets folder
import blogImage1 from "../assets/BlogPage/Business_IMG_1.jpg";
import blogImage2 from "../assets/BlogPage/FinanceIMG_1.jpg";
import blogImage3 from "../assets/BlogPage/TechnologyIMG_1.jpg";
import blogImage4 from "../assets/BlogPage/MarketingIMG_1.jpg";
import blogImage5 from "../assets/BlogPage/StartupsIMG_1.jpg";
import blogImage6 from "../assets/BlogPage/StrategyIMG_1.jpg";

const BlogContent = () => {
  const blogPosts = [
    {
      title: "3 Reasons a New Pre-Revenue Startup Won My Investment (Do These, and Yours Can Too)",
      description:
        "They say you need traction, revenue, or prior experience before seeking investment, but one founder I know proved them wrong.",
      image: blogImage1,
      category: "Business",
      link: "https://medium.com/entrepreneur-s-handbook/3-reasons-a-new-pre-revenue-startup-won-my-investment-do-these-and-yours-can-too-501fb43a64cb",
    },
    {
      title: "Warren Buffett Just Sold $133 Billion in Stock: Does He Know Something We Don't?",
      description:
        "It's a stock market signal that's becoming hard to ignore.",
      image: blogImage2,
      category: "Finance",
      link: "https://medium.com/gitconnected/warren-buffett-just-sold-133-billion-in-stock-does-he-know-something-we-dont-94e8ed5cbc3d",
    },
    {
      title: "Google just ANNIHILATED DeepSeek and OpenAI with their new Flash 2.0 model",
      description:
        "Three weeks ago, when DeepSeek released R1, their inexpensive reasoning model, I thought it was the pinnacle of",
      image: blogImage3,
      category: "Technology",
      link: "https://medium.com/codex/google-just-annihilated-deepseek-and-openai-with-their-new-flash-2-0-model-f5ac84b4bb60",
    },
    {
      title: "Why No Marketing Strategy Survives the Real World",
      description:
        "The Chaos of Paid Advertising is Unavoidable.We may face disgruntled messages from ",
      image: blogImage4,
      category: "Marketing",
      link: "https://medium.com/better-marketing/why-no-marketing-strategy-survives-the-real-world-67f6f95a1e83",
    },
    {
      title: "The Critical Difference Between Entrepreneurs and Business Builders",
      description:
        "Entrepreneurship and business building always get combined, but they're not the same things and require different mindsets.",
      image: blogImage5,
      category: "Startups",
      link: "https://medium.com/entrepreneur-s-handbook/the-critical-difference-between-entrepreneurs-and-business-builders-0907248f2eb9",
    },
    {
      title: "Building a Data-Driven Culture: More Than Just Collecting Data",
      description:
        "In today's digital world, simply having data isn't enough. A truly data-driven organization is one where data isn't just collected, it's",
      image: blogImage6,
      category: "Strategy",
      link: "https://medium.com/@tripleaceme/building-a-data-driven-culture-more-than-just-collecting-data-d5e5c3ef6bdc",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container max-w-[1200px] mx-auto px-4">
        <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
              {/* Use the Image component from next/image */}
              <div className="h-60"><Image 
                src={post.image} 
                alt={post.title} 
                className="rounded-lg mb-4" 
                width={400} 
                height={250} 
              />
              </div>
              <h3 className="text-2xl font-bold text-[#001E80]">{post.title}</h3>
              <p className="mt-2 text-[#020D3E]">{post.description}</p>
              <button className="mt-4 text-[#001E80] font-semibold hover:underline">
                <a href={post.link} target="_blank" rel="noopener noreferrer" >Read More →</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
