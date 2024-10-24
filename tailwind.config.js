/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DBB14C", // Com primária (variação clara)
        secondary: "#191919", // Cor primária (variação escura)
        bgSectionLight: "#FFFFFF",
        bgSectionDark: "#252329",
        links: "#0189BB", // Links
        buttonColor: "#D0B160", // Botões
        lighter: "#FFFFFF",
        darker: "#000000",
      },
      fontFamily: {
        mainFont: ["Poppins", "sans-serif"],
        secondFont: ["Poppins", "sans-serif"],
        league: ["League Gothic"],
        barlow: ["Barlow Condensed"],
      },
      fontSize: {
        paragraph1: "0.625rem", // 10px
        paragraph2: "0.75rem", // 12px
        paragraph3: "0.875rem", // 14px
        paragraph4: "1rem", // 16px
        paragraph5: "1.125rem", // 18px
        title1: "1.25rem", // 20px
        title2: "1.375rem", // 22px
        title3: "1.5rem", // 24px
        title4: "1.875rem", // 30px
        title5: "2.25rem", // 36px
        title6: "3rem", // 48px
        title7: "3.5rem", // 55px
      },
      spacing: {
        112: "28rem",
        120: "30rem",
        128: "32rem",
      },
      screens: {
        phone1: "320px",
        phone2: "375px",
        phone3: "425px",
        tablet1: "640px",
        tablet2: "768px",
        desktop1: "1024px",
        desktop2: "1280px",
        desktop3: "1440px",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-5%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(-5%)", opacity: "0" },
        },
      },
      animation: {
        "slide-down": "slideDown 1s ease",
        "slide-up": "slideUp 1s ease",
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
