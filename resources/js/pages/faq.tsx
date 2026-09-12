import { Head } from '@inertiajs/react';
import { faq } from '@/routes';
// import {AppSidebar} from '@/components/app-sidebar';
// import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
// import { AppHeader } from '@/components/app-header';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

export default function FAQ() {
    return (
        <>
            <Head title="FAQ" />

                <main className="flex-1 p-6">
                    <h1 className="text-2xl font-bold">FAQ</h1>
                    <p>Frequently asked questions go here.</p>
                    <PlaceholderPattern />
                </main>

        </>
    );
}

FAQ.layout = {
    breadcrumbs: [
        {
            title: 'FAQ',
            href: faq(),
        },
    ],
};