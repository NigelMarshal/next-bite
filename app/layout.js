import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "NextBite",
  description: "I'm hungryyyyy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
