import { Montserrat } from "next/font/google";
import { RootLayoutProps } from "@/types";

const fonts = Montserrat({
  variable: "--custom-fonts",
  subsets: ["latin"],
});

export default function BodySite(props: RootLayoutProps) {
  return <body className={`${fonts.variable}`}>{props.children}</body>;
}
