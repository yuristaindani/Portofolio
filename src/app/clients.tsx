"use client";

import { Typography } from "@material-tailwind/react";

const TECH_STACK = [
  { name: "HTML", slug: "html5/html5-original.svg" },
  { name: "CSS", slug: "css3/css3-original.svg" },
  { name: "JavaScript", slug: "javascript/javascript-original.svg" },
  { name: "MySQL", slug: "mysql/mysql-original.svg" },
  { name: "React", slug: "react/react-original.svg" },
  { name: "OpenCV", slug: "opencv/opencv-original.svg" },
  { name: "Git", slug: "git/git-original.svg" },
  { name: "Python", slug: "python/python-original.svg" },
  { name: "NumPy", slug: "numpy/numpy-original.svg" },
  { name: "PyTorch", slug: "pytorch/pytorch-original.svg" },
  { name: "TensorFlow", slug: "tensorflow/tensorflow-original.svg" },
  { name: "Figma", slug: "figma/figma-original.svg" },
];

export function Clients() {
  return (
    <section id="skills" className="px-8 pb-16 pt-10 scroll-mt-20">
      <div className="container mx-auto mt-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Skills 
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {TECH_STACK.map((tech, key) => (
            <div key={key} className="flex flex-col items-center gap-3 p-4 w-28 rounded-xl hover:bg-gray-50 transition-all duration-300">
              <div className="h-10 w-10 flex items-center justify-center">
                {/* Menggunakan CDN Devicon yang dijamin memiliki warna asli */}
                <img
                  alt={tech.name}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.slug}`}
                />
              </div>
              <span className="text-xs font-medium text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;