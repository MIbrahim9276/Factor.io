import InstalledModList from "#components/blocks/InstalledModList";
import ModDetails from "#components/blocks/ModDetails";
import ModSearch from "#components/blocks/ModSearch";

export default function MainModList() {
    return (
        <div className='flex-1 w-full p-6 sm:p-8 lg:p-10'>
            <div className='flex h-full flex-col gap-8'>
                <section className='flex flex-col gap-3'>
                    <p className='text-sm font-medium'>Mod management</p>
                    <div className='space-y-2'>
                        <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>Installed mods</h1>
                        <p className='max-w-2xl text-sm text-muted-foreground sm:text-base'>Browse, filter, and inspect the mods already available in your Factorio install.</p>
                    </div>
                </section>

                <ModSearch />

                <section className='flex flex-1 flex-col gap-6 lg:flex-row'>
                    <div className='flex-1'>
                        <InstalledModList />
                    </div>
                    <div className='w-full lg:max-w-sm'>
                        <ModDetails />
                    </div>
                </section>
            </div>
        </div>
    );
}