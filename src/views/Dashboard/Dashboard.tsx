import { useFactorioInstallationStore } from "#store/FactorioInstallation.store";
import { invoke } from "@tauri-apps/api/core";
import MainDashboard from "./Main";
import { FactorioInstallation } from "#types/FactorioInstallation";
import LoadingDashboard from "./Loading";
import { useEffect, useState } from "react";
import EmptyDashboard from "./Empty";

export default function Dashboard() {
    const { installation, setInstallation } = useFactorioInstallationStore();

    const [loading, setLoading] = useState(true);

    async function detectInstallation() {
        try {
            const installation = await invoke<FactorioInstallation>("detect_installation");
            console.log(installation);

            setInstallation(installation);
        } catch {}
        finally {
            setLoading(false);
        }
    }

    
    useEffect(() => {
        detectInstallation();
    }, []);

    if (loading) {
        return <LoadingDashboard />;
    }

    if (installation) {
        return <MainDashboard />;
    }

    return (
        <EmptyDashboard />
    );
}
