import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dzhalil Kalimov - Frontend Developer",
    short_name: "fujuro",
    description: "Frontend Engineer with 3+ years of experience in Web3 and Enterprise solutions",
    start_url: "/ru",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
