import { useFactorioInstallationStore } from "#store/FactorioInstallation.store";
import EmptyDashboard from "./Empty";
import MainDashboard from "./Main";

export default function Dashboard() {
    const { installation } = useFactorioInstallationStore();

    const factorioFound = Boolean(installation);

    return (
        <div className='w-full min-h-full flex flex-col'>
            {factorioFound ? <MainDashboard /> : <EmptyDashboard />}
        </div>
    );
}