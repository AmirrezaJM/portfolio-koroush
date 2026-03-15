import { LucideIcon } from "lucide-react";

export interface HighlightItem {
    Icon: LucideIcon;
    label: string;
    value: string;
}

interface HighlightsProps {
    items: HighlightItem[];
}

export default function Highlights({ items }: HighlightsProps) {
    return (
        <div className="grid grid-cols-2 gap-6">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)]"
                >
                    {/* Subtle hover gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <item.Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                                {item.label}
                            </p>
                            <p className="text-lg font-semibold tracking-tight">
                                {item.value}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
