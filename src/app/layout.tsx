import "../styles/globals.css";
import Background from "../components/Background/Background";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Background />
        {children}
      </body>
    </html>
  );
}
