import { Checkbox } from "#components/ui/checkbox";

const mods = [
    { name: "Factory Planner", version: "2.1.4" },
    { name: "Space Exploration", version: "1.0.0" },
    { name: "FNEI", version: "0.4.3" },
    { name: "Squeak Through", version: "1.8.2" }
];

export default function InstalledModList() {
    return (
        <section className='flex flex-col gap-3 rounded-lg border p-4'>
            <div className='flex items-center justify-between'>
                <p className='text-sm font-medium'>Installed mods</p>
                <p className='text-sm text-muted-foreground'>4 available</p>
            </div>
            <div className='flex flex-col gap-3'>
                {mods.map((mod) => (
                    <div key={mod.name} className='flex items-center justify-between gap-4 rounded-md border p-3'>
                        <div className='flex items-center gap-3'>
                            <Checkbox id={mod.name} />
                            <label htmlFor={mod.name} className='text-sm font-medium'>{mod.name}</label>
                        </div>
                        <span className='text-sm text-muted-foreground'>{mod.version}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}