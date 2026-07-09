import { Button } from "#components/ui/button";
import { RiCheckLine, RiSearchLine } from "@remixicon/react";
import { useNavigate } from "react-router";

export default function MainDashboard() {
    const navigate = useNavigate();

    return (
        <div className='flex-1 w-full p-6 sm:p-8 lg:p-10'>
            <div className='flex h-full flex-col justify-between gap-8'>
                <section className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2 text-sm font-medium'>
                        <RiCheckLine />
                        Factorio detected
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>Welcome back</h1>
                        <p className='max-w-2xl text-sm text-muted-foreground sm:text-base'>Factorio 2.1.x is available from your Steam installation and is ready for mod browsing.</p>
                    </div>
                </section>

                <section className='flex flex-col gap-4 rounded-lg border p-6 sm:flex-row sm:items-center sm:justify-between'>
                    <div className='space-y-1'>
                        <p className='text-sm font-medium'>Current installation</p>
                        <p className='text-sm text-muted-foreground'>Steam installation</p>
                    </div>

                    <Button variant='default' size='lg' onClick={() => navigate('/mods')}>
                        <RiSearchLine />
                        Browse Mods
                    </Button>
                </section>

                <section className='grid max-w-xl grid-cols-[140px_1fr] gap-x-4 gap-y-2 text-sm'>
                    <span className='text-muted-foreground'>Installed Mods</span>
                    <span>37</span>

                    <span className='text-muted-foreground'>Enabled Mods</span>
                    <span>24</span>

                    <span className='text-muted-foreground'>Disabled Mods</span>
                    <span>13</span>
                </section>
            </div>
        </div>
    );
}