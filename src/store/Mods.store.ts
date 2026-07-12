import { Mod } from "#types/Mod";
import { create } from "zustand";

interface ModsStore {
    mods: Mod[];

    setMods: (mods: Mod[]) => void;
    clearMods: () => void;
}

export const useModsStore = create<ModsStore>((set) => ({
    mods: [],
    
    setMods: (mods) => set({ mods }),
    clearMods: () => set({ mods: [] })
}));