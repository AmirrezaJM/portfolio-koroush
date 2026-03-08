import Footer from "@/features/footer";
import Navbar from "@/features/Navbar";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow pt-20">{children}</main>
            </div>
            <Footer />
        </>
    );
}
