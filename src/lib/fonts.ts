import localFont from "next/font/local";

export const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/AvenirLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvenirBlack.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});
