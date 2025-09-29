"use client";
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    const navItems = [
        { name: 'About', href: '#about-us' },
        { name: 'Services', href: '#services' },
        { name: 'FAQs', href: '#faq' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-[60]">
            <nav className="bg-primary">
                <div className="mx-auto flex h-[72px] sm:h-[80px] lg:h-[86px] max-w-[1200px] items-center justify-between px-4 sm:px-6">
                    <Link href="/" className="font-heading text-[22px] sm:text-[26px] md:text-[30px] font-bold tracking-tight text-primary-foreground">
                        Hola Contracting Inc.
                    </Link>

                    <div className="hidden items-center gap-8 xl:gap-10 lg:flex">
                        <div className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="font-body text-base text-primary-foreground/90 transition-opacity hover:text-primary-foreground"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <a
                            href="tel:+17805048160"
                            className="group flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-6 py-3 text-primary shadow-sm transition-colors hover:bg-gray-100"
                        >
                            <span className="font-body text-base font-medium">Call us today</span>
                            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                    
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="text-primary-foreground relative z-[61] p-1.5"
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                            onClick={() => setOpen((v) => !v)}
                        >
                            {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div id="mobile-nav" className="lg:hidden border-t border-white/10 bg-primary/95 backdrop-blur relative z-[55] pointer-events-auto">
                        <div className="mx-auto max-w-[1200px] px-6 py-4">
                            <div className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="font-body text-base text-primary-foreground/90 hover:text-primary-foreground"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <a
                                    href="tel:+17805048160"
                                    className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-primary"
                                >
                                    <span className="font-medium">Call us today</span>
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;