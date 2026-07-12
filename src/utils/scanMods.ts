import { useModsStore } from "#store/Mods.store";
import { Mod } from "#types/Mod";
import { invoke } from "@tauri-apps/api/core";

export type ScanModsResult =
    | { ok: true; mods: Mod[] }
    | { ok: false; error: string };

export async function scanMods(): Promise<ScanModsResult> {
    try {
        let mods = await invoke<Mod[]>("scan_mods");
        useModsStore.getState().setMods(mods);
        return { ok: true, mods };
    } catch (err: any) {
        return { ok: false, error: err instanceof Error ? err.message : String(err) };
    }
}
