import { Head } from '@inertiajs/react';
import { studentsalumni } from '@/routes';
// import { AppHeader } from '@/components/app-header';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

export default function Studentsalumni() {
    return (
        <>
            <Head title="StudentsAlumni" />

                    <main className="flex-1 gap-4 p-6">
                        <h1 className="text-2xl font-bold">Students Alumni</h1>
                        <p>Students Alumni goes here.</p>
                        <PlaceholderPattern />
                    </main>

        </>
    );
}

Studentsalumni.layout = {
    breadcrumbs: [
        {
            title: 'Studentsalumni',
            href: studentsalumni(),
        },
    ],
};