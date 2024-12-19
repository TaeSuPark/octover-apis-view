/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ]
  },
  rewrites: async () => {
    return [
      {
        source: "/admin/api/:path*",
        destination: "https://admin.octover.co.kr/admin/api/:path*",
      },
    ]
  },
  webpack: (config: {
    module: { rules: { test: RegExp; use: string[] }[] }
  }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
}

export default nextConfig
