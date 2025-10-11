import "../styles/globals.css";
import Background from "../components/Background/Background";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Background />
        <div className="layout">
          <Navbar />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
