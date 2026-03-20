import LenisProvider from "@/providers/LenisProvider";
import "../globals.css";
import ContactPopup from "@/components/layout/ContactPopup";
import Navbar from "@/components/home2/Navbar";
import Footer from "@/components/home2/Footer";

export const metadata = {
    title: "Second Theme",
    description: "Second theme layout for Rudra Build",
};

export default function SecondThemeLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <LenisProvider>
                    <Navbar />
                    {children}
                </LenisProvider>
                <Footer />
                <ContactPopup />
            </body>
        </html>
    );
}
