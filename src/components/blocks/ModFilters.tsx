import { ToggleGroup, ToggleGroupItem } from "#components/ui/toggle-group";

export default function ModFilters() {
    return (
        <div>
            <h1>Filters</h1>
            <ToggleGroup defaultValue={['all']}>
                <ToggleGroupItem value='all'>All</ToggleGroupItem>
                <ToggleGroupItem value='enabled'>Enabled</ToggleGroupItem>
                <ToggleGroupItem value='disabled'>Disabled</ToggleGroupItem>
            </ToggleGroup>
        </div>
    );
}