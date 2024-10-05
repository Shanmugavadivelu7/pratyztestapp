/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Add rule for .svg files
        use: ['@svgr/webpack'], // Use svgr to import SVGs as React components
      });
  
      return config; // Return the updated config
    },
  };
  
  export default nextConfig;
  