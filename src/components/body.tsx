import BodyDefault from "./BodyDefault";
import BodySite from "./BodySite";
import { RootLayoutProps } from "@/types";
import { DOMAINS } from "@/config";

export default function Body(props: RootLayoutProps) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  if (domain === DOMAINS.SITE1) {
    return <BodySite {...props} />;
  }

  return <BodyDefault {...props} />;
}
