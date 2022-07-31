/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    pokemonBack: {
      url: process.env.BACKEND_URL,
      api: "/api/pokemon/team"
    }
  }
}

module.exports = nextConfig
