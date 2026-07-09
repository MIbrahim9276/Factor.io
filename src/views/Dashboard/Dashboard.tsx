import EmptyDashboard from "./Empty";
import MainDashboard from "./Main";

export default function Dashboard() {
    const factorioFound = true;

    return (
        <div className='w-full min-h-full flex flex-col'>
            {factorioFound ? <MainDashboard /> : <EmptyDashboard />}
        </div>
    );
}