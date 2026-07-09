import { Button } from "#components/ui/button";
import { Checkbox } from "#components/ui/checkbox";
import { Label } from "#components/ui/label";
import { RadioGroup, RadioGroupItem } from "#components/ui/radio-group";

export default function Settings() {
    return (
        <div className='flex-1 w-full p-6 sm:p-8 lg:p-10'>
            <div className='flex h-full flex-col gap-8'>
                <section className='flex flex-col gap-3'>
                    <p className='text-sm font-medium'>Preferences</p>
                    <div className='space-y-2'>
                        <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>Settings</h1>
                        <p className='max-w-2xl text-sm text-muted-foreground sm:text-base'>Configure your Factorio installation, app appearance, and logging behavior.</p>
                    </div>
                </section>

                <section className='grid gap-4 lg:grid-cols-2'>
                    <div className='flex flex-col gap-4 rounded-lg border p-4'>
                        <div className='space-y-1'>
                            <p className='text-sm font-medium'>Factorio path</p>
                            <p className='text-sm text-muted-foreground'>Current install location</p>
                        </div>
                        <code className='rounded bg-muted px-3 py-2 text-sm'>C:\Steam\steamapps\common\Factorio</code>
                    </div>

                    <div className='flex flex-col gap-4 rounded-lg border p-4'>
                        <div className='space-y-1'>
                            <p className='text-sm font-medium'>Mods folder</p>
                            <p className='text-sm text-muted-foreground'>Choose where your mod files are stored</p>
                        </div>
                        <Button className='w-fit'>Browse</Button>
                    </div>

                    <div className='flex flex-col gap-4 rounded-lg border p-4'>
                        <div className='space-y-1'>
                            <p className='text-sm font-medium'>Theme</p>
                            <p className='text-sm text-muted-foreground'>Choose the app appearance</p>
                        </div>
                        <RadioGroup defaultValue='system' className='flex flex-col gap-3'>
                            <div className='flex items-center gap-2'>
                                <RadioGroupItem value='system' id='system' />
                                <Label htmlFor='system'>System</Label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <RadioGroupItem value='light' id='light' />
                                <Label htmlFor='light'>Light</Label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <RadioGroupItem value='dark' id='dark' />
                                <Label htmlFor='dark'>Dark</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className='flex flex-col gap-4 rounded-lg border p-4'>
                        <div className='space-y-1'>
                            <p className='text-sm font-medium'>Logging</p>
                            <p className='text-sm text-muted-foreground'>Enable extra diagnostics for troubleshooting</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Checkbox id='debug-logging' />
                            <Label htmlFor='debug-logging'>Enable debug logging</Label>
                        </div>
                    </div>
                </section>

                <section className='flex flex-col gap-2 rounded-lg border p-4'>
                    <p className='text-sm font-medium'>About</p>
                    <p className='text-sm text-muted-foreground'>Version 0.1</p>
                </section>
            </div>
        </div>
    );
}