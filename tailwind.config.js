/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    colors: {
      "white": "#ffffff",
      "black": "#333",
      "midnight": "#0E1F33",
      "linksHighlight": "#1D4ED8",
      "emailBorder": "#D1D5DB",
      "emailUnreadBg": "#E5E7EB",
      "logOut": "#EF4444",
      "errMessage": "#ef4444",
      "mainNav": "#122842",
      "emailSummaryHead": "#6b7280",
      "buttonReply": "#6b7280",
      "greenOutline": "#10B981",
      "redOutline": "#EF4444"
    },
  },
  plugins: [],
}

