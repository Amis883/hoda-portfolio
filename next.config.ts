// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };
// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true }, // ESLint را در build نادیده بگیر
  typescript: { ignoreBuildErrors: true }, // TypeCheck ارور ندهد
};
module.exports = nextConfig;
