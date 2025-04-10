import { Open_Sans } from "next/font/google";
import { RootLayoutProps } from "@/types";

const fonts = Open_Sans({
  variable: "--custom-fonts",
  subsets: ["latin"],
});

export default function BodyDefault(props: RootLayoutProps) {
  return <body className={`${fonts.variable}`}>{props.children}</body>;
}
