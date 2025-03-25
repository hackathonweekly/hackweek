"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = {
  posters: Array.from({ length: 6 }, (_, i) => ({
    src: `/images/posters/${i + 1}.jpg`,
    alt: `活动海报 ${i + 1}`,
    type: "poster"
  })),
  events: Array.from({ length: 6 }, (_, i) => ({
    src: `/images/events/${i + 1}.jpg`,
    alt: `活动照片 ${i + 1}`,
    type: "photo"
  }))
};

export default function GallerySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              社区活动集锦
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            记录每一次相聚，分享创造的快乐
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 海报墙 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">活动海报</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.posters.map((image, index) => (
                <div 
                  key={index} 
                  className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* 照片墙 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">活动掠影</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.events.map((image, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
