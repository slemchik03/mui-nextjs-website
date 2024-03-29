import Content from "@/components/Content/Content";
import "./global.css";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Content>{children}</Content>;
}
