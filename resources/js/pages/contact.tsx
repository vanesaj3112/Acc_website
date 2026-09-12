import { Head } from '@inertiajs/react';
import { contact } from '@/routes';
// import { AppHeader } from '@/components/app-header';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

export default function Contact() {
    return (
        <>
            <Head title="Announcements" />

                    <main className="flex-1 p-6">
                        <h1 className="text-2xl font-bold">Contact Us</h1>
                        <p>Contact information goes here.</p>
                        <PlaceholderPattern />
                    </main>

        </>
    );
}

Contact.layout = {
    breadcrumbs: [
        {
            title: 'Contact Us',
            href: contact(),
        },
    ],
};