import { Head } from '@inertiajs/react';
import { announcements } from '@/routes';
// import { AppHeader } from '@/components/app-header';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

export default function Announcements() {
    return (
        <>
            <Head title="Announcements" />


                    <main className="flex-1 p-6">
                    <h1 className="text-2xl font-bold">Announcements</h1>
                    <p>Latest announcements go here.</p>
                    <PlaceholderPattern />
                    </main>
        </>
    );
}

Announcements.layout = {
    breadcrumbs: [
        {
            title: 'Announcements',
            href: announcements(),
        },
    ],
};