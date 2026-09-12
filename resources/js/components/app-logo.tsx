import { Link, usePage } from '@inertiajs/react';

// You can safely remove the AppLogoIcon import if you are not using it anymore

export default function AppLogo() {
    const { name } = usePage().props;

    return (
        <Link href="/dashboard" className="flex items-center gap-2 w-full">
            {/* Your Custom PNG Logo Container */}
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-transparent shrink-0">
                <img 
                    src="/logos/acc-logo.png" 
                    alt="ACC Logo" 
                    className="h-8 w-8 object-contain" 
                />
            </div>
            
            {/* The Brand Name Text Container */}
            <div className="grid flex-1 text-left text-sm min-w-0">
                <span className="mb-0.5 truncate leading-tight font-semibold text-sidebar-foreground">
                    Abuyog Community College
                </span>
            </div>
        </Link>
    );
}
