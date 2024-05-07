// next.config.mjs
const nextConfig = {
  webpack(config, { isServer }) {
    // Add a rule to handle mp4 files
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            // Set output directory for mp4 files
            publicPath: '/_next/',
            outputPath: 'static/media/',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
