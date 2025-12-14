import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
            <div className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    <span className="rounded-md bg-primary px-2 py-1 text-background">
                        HP
                    </span>
                </Link>

                <div className="flex items-center gap-4 sm:gap-6">
                    <nav className="flex gap-4 sm:gap-6">
                        <Link
                            href="/projects"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/posts"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Posts
                        </Link>
                    </nav>

                    <ThemeToggle />

                </div>
            </div>
        </header>
    )
}