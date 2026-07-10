import { Button } from "#components/ui/button";

export default function ErrorModList() {
    return (
        <div className='flex-1 w-full p-6 sm:p-8 lg:p-10'>
            <div className='flex h-full flex-col justify-between gap-8'>
                <section className='flex flex-col gap-3'>
                    <p className='text-sm font-medium'>Mod management</p>
                    <div className='space-y-2'>
                        <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>Unable to read mod-list.json</h1>
                        <p className='max-w-2xl text-sm text-muted-foreground sm:text-base'>The file could not be parsed, so your installed mods could not be loaded.</p>
                    </div>
                </section>

                <section className='flex flex-col gap-4 rounded-lg border p-6'>
                    <div className='space-y-1'>
                        <p className='text-sm font-medium'>What to do next</p>
                        <p className='text-sm text-muted-foreground'>Try again or open the folder containing the mod list to inspect the file directly.</p>
                    </div>
                    <div className='flex flex-col gap-3 sm:flex-row'>
                        <Button variant='default' size='lg'>
                            Retry
                        </Button>
                        <Button variant='secondary' size='lg'>
                            Open Folder
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}