import { DESTRUCTION } from "dns";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites : async() => {
    return [
      {
        source: '/backend/:path',
        destination: 'http://localhost:8000/:path*'
      }
    ]
  },
  images: {
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
