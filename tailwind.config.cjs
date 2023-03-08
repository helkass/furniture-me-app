/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#FFF8F6",
            secondary: "#FFEAE3",
            third: "#FFBBA4",
         },
      },
   },
   plugins: [],
};
