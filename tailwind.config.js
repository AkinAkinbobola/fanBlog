/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ], theme: {
        extend: {
            fontFamily: {
                openSans: ['Open Sans', "sans-serif"],
                poppins: ['Poppins', "sans-serif"],
                nabla: ["Nabla", "system-ui"],
                lemonada: ['Lemonada', "cursive"],
                ubuntu: ['Ubuntu', "sans-serif"]
            },
            colors: {
                // HERO
                primaryShade1: ["#4D7F7D"],
                primaryShade2: ["#294441"],
                primaryShade3: ["#214445"],
                primaryShade4: ["#76A9AB"],
                primaryShade5: ["#153230"],
                // BACKGROUND
                whiteSmoke: ["#F5F5F5"],
                platinum: ["#DAD8DE"],
                ecru: ["#BDAA81"]
            }
        },
    },
    plugins: [],
}