import { Head } from '@inertiajs/react';
import { academe } from '@/routes';
// import { AppHeader } from '@/components/app-header';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

export default function Academe() {
    return (
        <>
            <Head title="Academe" />

                    <main className="flex-1 gap-4 p-6">
                        <h1 className="text-2xl font-bold">Academe</h1>
                        <p>Academe goes here.</p>
                        <PlaceholderPattern />
                    </main>

        </>
    );
}

Academe.layout = {
    breadcrumbs: [
        {
            title: 'Contact Us',
            href: academe(),
        },
    ],
};