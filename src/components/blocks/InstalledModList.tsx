import { Checkbox } from "#components/ui/checkbox";
import { useModsStore } from "#store/Mods.store";
import { Mod } from "#types/Mod";

interface InstalledModListProps {
    selectedModName?: string;
    onSelectMod?: (mod: Mod) => void;
}

export default function InstalledModList({ selectedModName, onSelectMod }: InstalledModListProps) {
    const mods = useModsStore((state) => state.mods);

    return (
        <section className='flex flex-col gap-3 rounded-lg border p-4'>
            <div className='flex items-center justify-between'>
                <p className='text-sm font-medium'>Installed mods</p>
                <p className='text-sm text-muted-foreground'>{mods.length} available</p>
            </div>
            <div className='flex flex-col gap-3'>
                {mods.map((mod) => (
                    <button
                        key={mod.name}
                        type='button'
                        onClick={() => onSelectMod?.(mod)}
                        className={`flex items-center justify-between gap-4 rounded-md border p-3 text-left transition-colors hover:bg-muted ${selectedModName === mod.name ? "bg-muted" : ""}`}
                    >
                        <div className='flex items-center gap-3'>
                            <Checkbox id={mod.name} checked={mod.enabled} onClick={(e) => e.stopPropagation()} />
                            <label htmlFor={mod.name} className='text-sm font-medium'>{mod.title || mod.name}</label>
                        </div>
                        <span className='text-sm text-muted-foreground'>{mod.version}</span>
                    </button>
                ))}
            </div>
        </section>
    );
}
