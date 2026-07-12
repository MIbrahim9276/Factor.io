import InstalledModList from "#components/blocks/InstalledModList";
import ModDetails from "#components/blocks/ModDetails";
import ModSearch from "#components/blocks/ModSearch";
import { Button } from "#components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "#components/ui/tooltip";
import { RiRefreshLine } from "@remixicon/react";
import { scanMods } from "../../utils/scanMods";

export default function MainModList() {
    return (
        <div className='flex-1 w-full p-6 sm:p-8 lg:p-10'>
            <div className='flex h-full flex-col gap-8'>
                <section className='flex justify-between'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-sm font-medium'>Mod management</p>
                        <div className='space-y-2'>
                            <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>Installed mods</h1>
                            <p className='max-w-2xl text-sm text-muted-foreground sm:text-base'>Browse, filter, and inspect the mods already available in your Factorio install.</p>
                        </div>
                    </div>
                    <Tooltip>
                        <TooltipTrigger render={
                            <Button variant='secondary' size='icon-lg' onClick={scanMods}>
                                <RiRefreshLine />
                            </Button>
                        } />
                        <TooltipContent>
                            <p>Rescan Mods</p>
                        </TooltipContent>
                    </Tooltip>
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