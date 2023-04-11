import ContentContainer from "@/components/Content/ContentContainer";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <ContentContainer>{children}</ContentContainer>
      </body>
    </html>
  );
}
