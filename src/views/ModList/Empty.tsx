import { Button } from "#components/ui/button";

export default function EmptyModList() {
    return (
        <div className='flex-1 w-full p-6 sm:p-8 lg:p-10'>
            <div className='flex h-full flex-col justify-between gap-8'>
                <section className='flex flex-col gap-3'>
                    <p className='text-sm font-medium'>Mod management</p>
                    <div className='space-y-2'>
                        <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>No mods installed</h1>
                        <p className='max-w-2xl text-sm text-muted-foreground sm:text-base'>Install your first mod to get started and build your Refactorio setup.</p>
                    </div>
                </section>

                <section className='flex flex-col gap-4 rounded-lg border p-6'>
                    <div className='space-y-1'>
                        <p className='text-sm font-medium'>Next step</p>
                        <p className='text-sm text-muted-foreground'>Browse the mod portal or add a mod folder to begin managing your collection.</p>
                    </div>
                    <Button variant='default' size='lg'>
                        Browse Mod Portal
                    </Button>
                </section>
            </div>
        </div>
    );
}