import SearchBar from "#components/shared/SearchBar";
import ModFilters from "./ModFilters";

export default function ModSearch() {
    return (
        <section className='flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex-1'>
                <SearchBar className='w-full sm:max-w-sm' />
            </div>
            <div className='flex items-center'>
                <ModFilters />
            </div>
        </section>
    );
}