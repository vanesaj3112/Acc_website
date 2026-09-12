import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { researchextension } from '@/routes';
// import { AppSidebar } from '@/components/app-sidebar';
// import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
// import { AppHeader } from '@/components/app-header';

export default function Researchextension() {
    return (
        <>
            <Head title="Research Extension"/>
            
                    <main className="flex flex-1 flex-col gap-4 p-6">
                        <h1 className="text-2xl font-bold">Research Extension</h1>
                        <p>Research Extension is here.</p>
                        <PlaceholderPattern />
                    </main>

        </>
    );
}

Researchextension.layout = {
    breadcrumbs: [
        {
            title: 'Researchextensio',
            href: researchextension(),
        },
    ],
};

