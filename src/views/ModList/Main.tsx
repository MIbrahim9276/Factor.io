import InstalledModList from "#components/blocks/InstalledModList";
import ModSearch from "#components/blocks/ModSearch";
import { Button } from "#components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "#components/ui/tooltip";
import { useModsStore } from "#store/Mods.store";
import { RiRefreshLine } from "@remixicon/react";
import { useState } from "react";
import { scanMods } from "../../utils/scanMods";

export default function MainModList() {
    const mods = useModsStore((state) => state.mods);
    const [selectedModName, setSelectedModName] = useState<string>();
    const selectedMod = mods.find((mod) => mod.name === selectedModName);

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
                        <InstalledModList selectedModName={selectedModName} onSelectMod={(mod) => setSelectedModName(mod.name)} />
                    </div>
                    <div className='flex-3'>
                        <section className='flex h-full flex-col gap-4 rounded-lg border p-4'>
                            {selectedMod ? (
                                <>
                                    <div className='space-y-1'>
                                        <p className='text-sm font-medium'>Selected mod</p>
                                        <h2 className='text-xl font-semibold'>{selectedMod.title || selectedMod.name}</h2>
                                        <p className='text-xs text-muted-foreground'>{selectedMod.name}</p>
                                    </div>
                                    <div className='space-y-2 text-sm text-muted-foreground'>
                                        <p><span className='font-medium text-foreground'>Author:</span> {selectedMod.author}</p>
                                        <p><span className='font-medium text-foreground'>Version:</span> {selectedMod.version}</p>
                                        <p><span className='font-medium text-foreground'>Description:</span> {selectedMod.description}</p>
                                    </div>
                                    <div className='space-y-2'>
                                        <p className='text-sm font-medium'>Dependencies</p>
                                        {selectedMod.dependencies.length > 0 ? (
                                            <ul className='list-disc space-y-1 pl-5 text-sm text-muted-foreground'>
                                                {selectedMod.dependencies.map((dependency) => (
                                                    <li key={dependency.name}>{dependency.name}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className='text-sm text-muted-foreground'>No dependencies</p>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className='space-y-1'>
                                    <p className='text-sm font-medium'>Selected mod</p>
                                    <p className='text-sm text-muted-foreground'>Click a mod to view its details.</p>
                                </div>
                            )}
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
}
