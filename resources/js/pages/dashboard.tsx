import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
// import { AppSidebar } from '@/components/app-sidebar';
// import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
// import { AppHeader } from '@/components/app-header';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            
                    <main className="flex flex-1 flex-col gap-4 p-6">
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <p>Welcome to your dashboard!</p>
                        <PlaceholderPattern />
                    </main>

        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};

