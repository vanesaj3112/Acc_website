import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { landingpage } from '@/routes';
// import { AppSidebar } from '@/components/app-sidebar';
// import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
// import { AppHeader } from '@/components/app-header';

export default function Landingpage() {
    return (
        <>
            <Head title="Home"/>
            
                    <main className="flex flex-1 flex-col gap-4 p-6">
                        <h1 className="text-2xl font-bold">Home</h1>
                        <p>Welcome to your Homepage!</p>
                        <PlaceholderPattern />
                    </main>

        </>
    );
}

Landingpage.layout = {
    breadcrumbs: [
        {
            title: 'Home',
            href: landingpage(),
        },
    ],
};

