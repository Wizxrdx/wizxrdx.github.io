import "../styles/globals.css";
import Background from "../components/Background/Background";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { IBM_Plex_Sans, Newsreader } from 'next/font/google'
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
})

const newsreader = Newsreader({
      weight: ['400', '700'],
      subsets: ['latin'],
      variable: '--font-newsreader',
      display: 'swap',
    });

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${newsreader.variable}`}>
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
