import { useEffect, useState } from "react";
import { useModsStore } from "#store/Mods.store";
import { scanMods } from "../../utils/scanMods";
import EmptyModList from "./Empty";
import ErrorModList from "./Error";
import LoadingModList from "./Loading";
import MainModList from "./Main";

export default function ModList() {
    const mods = useModsStore((state) => state.mods);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const isEmpty = !isLoading && !error && mods.length === 0;

    useEffect(() => {
        let cancelled = false;

        async function loadMods() {
            setIsLoading(true);
            setError(null);

            const result = await scanMods();
            if (cancelled) return;

            if (!result.ok) {
                setError(result.error);
            }

            setIsLoading(false);
        }

        loadMods();

        return () => {
            cancelled = true;
        };
    }, []);

    if (isLoading) {
        return <LoadingModList />
    }

    if (error) {
        return <ErrorModList />
    }

    if (isEmpty) {
        return <EmptyModList />;
    }

    return (
        <MainModList />
    );
}
