import { Geist, Geist_Mono } from "next/font/google";
import Session from "@/helpers/SessionProvider";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { AppContextProvider } from "@/context/Context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppContextProvider>
          <Session>
            {children}

            <ToastContainer
              position="top-right"
              theme="colored"
              closeOnClick
              autoClose={3000}
            />
          </Session>
        </AppContextProvider>
      </body>
    </html>
  );
}
