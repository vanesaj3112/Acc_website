import { Head } from '@inertiajs/react';
import { admission } from '@/routes';
// import { AppHeader } from '@/components/app-header';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

export default function Admission() {
    return (
        <>
            <Head title="Admission" />

                    <main className="flex-1 gap-4 p-6">
                        <h1 className="text-2xl font-bold">Admission</h1>
                        <p>Admission goes here.</p>
                        <PlaceholderPattern />
                    </main>

        </>
    );
}

Admission.layout = {
    breadcrumbs: [
        {
            title: 'Contact Us',
            href: admission(),
        },
    ],
};