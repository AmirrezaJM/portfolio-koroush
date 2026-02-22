import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        {/* a tag -> Link */}
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                        {/* Psuedo element / pseudo class */}
                            <div>
                                
                            </div>
                        </Link>
                    </div>
                </div>  
            </div>
        </footer>
    )
}



// Sections
// useRef