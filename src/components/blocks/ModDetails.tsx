import { Button } from "#components/ui/button";

export default function ModDetails() {
    return (
        <section className='flex h-full flex-col gap-4 rounded-lg border p-4'>
            <div className='space-y-1'>
                <p className='text-sm font-medium'>Selected mod</p>
                <h2 className='text-xl font-semibold'>Space Exploration</h2>
            </div>
            <div className='space-y-2 text-sm text-muted-foreground'>
                <p><span className='font-medium text-foreground'>Author:</span> Bob</p>
                <p><span className='font-medium text-foreground'>Version:</span> 1.0.0</p>
                <p><span className='font-medium text-foreground'>Description:</span> Adds new planets, resources, and progression to the game.</p>
            </div>
            <div className='space-y-2'>
                <p className='text-sm font-medium'>Dependencies</p>
                <ul className='list-disc space-y-1 pl-5 text-sm text-muted-foreground'>
                    <li>Mod 1</li>
                    <li>Mod 2</li>
                </ul>
            </div>
            <Button className='mt-auto'>Open Folder</Button>
        </section>
    );
}