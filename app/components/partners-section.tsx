"use client";

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

export default function PartnersSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              生态伙伴
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            与优秀的组织一起，共建开放创新的生态
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-4"
            >
              <div className="relative w-32 h-32 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 