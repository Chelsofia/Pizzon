import Navbar from "./components/Navbar"; // Corrected import to match the convention
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "../cartContext"; // Ensure correct path

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pizzon",
  description: "Find the best pizza",
  keywords: "pizza, pizzon, best pizza",
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <ToastContainer />
          <Footer />
        </body>
      </html>
    </AppProvider>
  );
}
