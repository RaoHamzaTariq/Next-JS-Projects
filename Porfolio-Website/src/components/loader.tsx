// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const Loader = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     setIsDark(document.documentElement.classList.contains("dark"));
//     document.body.style.overflow = "hidden";

//     const interval = setInterval(() => {
//       setProgress((prev) => Math.min(prev + 10, 100));
//     }, 500);

//     return () => {
//       clearInterval(interval);
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   const particleCount = 30;
//   const particles = Array.from({ length: particleCount });

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-background z-[9999] overflow-hidden backdrop-blur-xl">
//       {/* Floating particles constrained to viewport */}
//       {particles.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute mix-blend-screen"
//           initial={{
//             x: Math.random() * 100 - 50 + "vw",
//             y: Math.random() * 100 - 50 + "vh",
//             scale: 0,
//             rotate: Math.random() * 360,
//             opacity: 0,
//           }}
//           animate={{
//             x: [null, Math.random() * 100 - 50 + "vw"],
//             y: [null, Math.random() * 100 - 50 + "vh"],
//             scale: [0, Math.random() * 0.8 + 0.2, 0],
//             opacity: [0, 0.8, 0],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: Math.random() * 6 + 4,
//             ease: "anticipate",
//           }}
//           style={{
//             width: `${Math.random() * 20 + 10}px`,
//             height: `${Math.random() * 20 + 10}px`,
//             background: `conic-gradient(from ${Math.random() * 360}deg, 
//               ${isDark ? '#4F46E5' : '#6366f1'}, 
//               ${isDark ? '#818cf8' : '#a855f7'}, 
//               ${isDark ? '#c7d2fe' : '#ec4899'})`,
//             borderRadius: Math.random() > 0.5 ? "50%" : "30%",
//           }}
//         />
//       ))}

//       {/* Main container with responsive sizing */}
//       <motion.div
//         className="relative flex flex-col items-center justify-center space-y-8 w-full px-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "circOut" }}
//       >
//         {/* Responsive logo sphere */}
//         <div className="relative w-32 h-32 md:w-48 md:h-48 perspective-1000">
//           <motion.div
//             className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 shadow-2xl shadow-indigo-500/30"
//             animate={{
//               rotateX: [0, 360],
//               rotateY: [0, 180],
//               scale: [1, 1.05, 1],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             style={{
//               transformStyle: 'preserve-3d',
//             }}
//           >
//             <motion.div
//               className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white/90"
//               animate={{
//                 scale: [0.9, 1.1, 0.9],
//                 opacity: [0.8, 1, 0.8],
//                 rotateZ: [0, -5, 0],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//               }}
//             >
//               <span className="drop-shadow-lg">⚡</span>
//             </motion.div>
//           </motion.div>

//           {[1, 2, 3].map((i) => (
//             <motion.div
//               key={i}
//               className={`absolute inset-0 border-${i === 2 ? '4' : '2'} rounded-full`}
//               style={{
//                 borderColor: isDark ? 'rgba(165,180,252,0.2)' : 'rgba(99,102,241,0.2)',
//                 transform: `scale(${1 + i * 0.2}) rotateX(60deg)`,
//               }}
//               animate={{
//                 rotateZ: 360,
//                 opacity: [0.2, 0.8, 0.2],
//               }}
//               transition={{
//                 duration: 4 + i * 2,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>

//         {/* Responsive progress section */}
//         <motion.div
//           className="flex flex-col items-center gap-4 text-center w-full max-w-md"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent px-4">
//             Loading Experience
//           </div>
//           <div className="text-sm text-primary/80 font-mono">
//             {progress}% initialized
//           </div>
          
//           <div className="relative w-4/5 max-w-64 h-2.5 bg-primary/10 rounded-full overflow-hidden">
//             <motion.div
//               className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-400 to-pink-400"
//               initial={{ width: "0%" }}
//               animate={{ width: `${progress}%` }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="absolute inset-0 bg-white/20 animate-pulse" />
//             </motion.div>
//           </div>
//         </motion.div>

//         <motion.div
//           className="absolute -bottom-16 md:-bottom-20 text-xs text-primary/50 text-center w-full px-4"
//           animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
//           transition={{ repeat: Infinity, duration: 3 }}
//         >
//           Preparing something extraordinary...
//         </motion.div>
//       </motion.div>

//       {/* Ambient light with viewport units */}
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.05)_0%,_transparent_70%)]" />
//     </div>
//   );
// };

// export default Loader;

import React from 'react'

const Loader = () => {
  return (
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  )
}

export default Loader