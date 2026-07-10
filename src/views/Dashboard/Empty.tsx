import { Button } from "#components/ui/button";
import { useFactorioInstallationStore } from "#store/FactorioInstallation.store";
import { RiToolsLine } from "@remixicon/react";
import { factorioInstallationMock } from "../../mock/FactorioInstallationMock";
import { useEffect } from "react";
import { getCurrentWindow } from '@tauri-apps/api/window';
import { open } from '@tauri-apps/plugin-dialog';
import { invoke } from "@tauri-apps/api/core";

export default function EmptyDashboard() {
    const { setInstallation } = useFactorioInstallationStore();

    async function locateInstallationHandle() {
        const folder = await open({
            multiple: false,
            directory: true
        });
        if (!folder) return;

        try {
            const path = await invoke("locate_installation", {
                path: folder
            });
            console.log(path);

            setInstallation({
                ...factorioInstallationMock,
                path: folder
            });
        } catch(err: any) {
            console.log(err);
        }
    }

    useEffect(() => {
        const unlisten = getCurrentWindow().onDragDropEvent((event) => {
            if (event.payload.type === 'drop') {
                console.log(event.payload.paths);
            }
        });

        return () => {
            unlisten.then(f => f());
        };
    }, []);

    return (
        <div className='flex-1 w-full p-6 sm:p-8 lg:p-10'>
            <div className='flex h-full flex-col justify-between gap-8'>
                <section className='flex flex-col gap-4'>
                    <p className='text-sm font-medium'>Getting started</p>
                    <div className='space-y-3'>
                        <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>Welcome to Refactorio</h1>
                        <p className='max-w-2xl text-sm text-muted-foreground sm:text-base'>A modding workspace is ready. Point the app to your Factorio install and you can start managing mods right away.</p>
                    </div>
                </section>

                <section className='flex flex-col gap-4 rounded-lg border p-6'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm font-medium'>Next step</p>
                        <p className='text-sm text-muted-foreground'>Choose your Factorio install so the app can discover your mods and settings.</p>
                    </div>
                    <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                        <Button variant='default' size='lg' onClick={locateInstallationHandle}>
                            <RiToolsLine />
                            Locate Installation
                        </Button>
                        <p className='text-sm text-muted-foreground'>You can also drag the install folder here.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}