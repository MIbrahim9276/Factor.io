import { Progress } from "#components/ui/progress";

export default function LoadingModList() {
    return (
        <div className='flex-1 w-full p-6 sm:p-8 lg:p-10'>
            <div className='flex h-full flex-col justify-between gap-8'>
                <section className='flex flex-col gap-3'>
                    <p className='text-sm font-medium'>Mod management</p>
                    <div className='space-y-2'>
                        <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>Scanning installed mods</h1>
                        <p className='max-w-2xl text-sm text-muted-foreground sm:text-base'>We’re reading your installation and collecting the current mod state.</p>
                    </div>
                </section>

                <section className='flex flex-col gap-4 rounded-lg border p-6'>
                    <div className='space-y-2'>
                        <p className='text-sm font-medium'>Progress</p>
                        <Progress value={75} />
                    </div>
                    <p className='text-sm text-muted-foreground'>This should only take a moment.</p>
                </section>
            </div>
        </div>
    );
}