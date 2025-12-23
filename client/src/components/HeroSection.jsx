import React from "react";
import { motion as Motion } from "framer-motion";
import HeroImage from "../assets/heroImage1.png";
import { 
  MagnifyingGlassIcon, 
  ShoppingBagIcon, 
  ArrowRightIcon,
  SparklesIcon,
  TagIcon
} from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary/5">
      
      {/* Simple gradient background without animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <Motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
            >
              <SparklesIcon className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                🎯 Premium Quality Guaranteed
              </span>
            </Motion.div>

            {/* Main Heading */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-gray-900">Elevate Your</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-cta bg-clip-text text-transparent">
                  Daily Experience
                </span>
              </h1>
            </Motion.div>

            {/* Subtitle */}
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed"
            >
              Discover curated collections that blend innovation with style. 
              <span className="block mt-2 text-primary font-medium">
                Smart choices. Next-gen style. Premium quality — all in one place.
              </span>
            </Motion.p>

            {/* Search Bar */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative max-w-md"
            >
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/5 border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="pl-4">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for products, brands, or categories..."
                  className="flex-1 px-4 py-4 text-lg bg-transparent focus:outline-none placeholder-gray-400"
                />
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-full px-6 bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Search
                </Motion.button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Electronics", "Fashion", "Home", "Fitness"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </Motion.div>

            {/* CTA Buttons */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center justify-center space-x-2">
                  <ShoppingBagIcon className="w-5 h-5" />
                  <span>Start Shopping</span>
                  <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Motion.button>
              
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="flex items-center justify-center space-x-2">
                  <TagIcon className="w-5 h-5" />
                  <span>Explore Categories</span>
                  <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Motion.button>
            </Motion.div>

            {/* Stats */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-8 grid grid-cols-3 gap-6"
            >
              {[
                { value: "10K+", label: "Products" },
                { value: "4.8★", label: "Rating" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </Motion.div>
          </Motion.div>

          {/* Right Image */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Simple image container without complex animations */}
              <div className="relative">
                {/* Image with gradient border */}
                <div className="relative w-[500px] max-w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-cta rounded-3xl blur-xl opacity-30" />
                  <img
                    src={HeroImage}
                    alt="Modern Shopping Experience"
                    className="relative rounded-3xl shadow-2xl shadow-black/20 border-8 border-white object-cover"
                  />
                </div>
                
                {/* Simple floating elements without Math.random */}
                <Motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">30%</div>
                    <div className="text-xs font-semibold text-gray-700">OFF</div>
                  </div>
                </Motion.div>
                
                <Motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-cta/20 to-pink-500/20 backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center"
                >
                  <ShoppingBagIcon className="w-8 h-8 text-cta" />
                </Motion.div>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;