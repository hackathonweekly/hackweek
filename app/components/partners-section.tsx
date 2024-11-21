'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const partnerLogos = [
  {
    src: "/partners/706.jpg",
    alt: "706 Space",
  },
  {
    src: "/partners/bayswork.jpg",
    alt: "Bayswork",
  },
  {
    src: "/partners/cyte.jpg",
    alt: "Cyte",
  },
  {
    src: "/partners/deeptech.jpg",
    alt: "DeepTech",
  }
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-zinc-900 font-mono relative overflow-hidden">
      {/* Terminal background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4px_4px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700/50 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
            合作伙伴
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Partners<span className="text-green-500">.list()</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            感谢各位合作伙伴的支持与信任
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg overflow-hidden hover:border-green-500/50 transition-colors p-6 flex items-center justify-center"
            >
              <div className="relative w-32 h-32">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;