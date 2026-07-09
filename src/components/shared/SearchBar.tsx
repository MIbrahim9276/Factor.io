import { Input } from "#components/ui/input";
import { RiSearchLine } from "@remixicon/react";
import clsx from "clsx";
import { ComponentProps } from "react";


interface SearchBarProps extends ComponentProps<"div"> {
    onInputChange?: (query: string) => void;
}

export default function SearchBar({
    onInputChange = () => {},
    className = 'w-48'
}: SearchBarProps) {
    return (
        <div className={clsx(className, 'relative')}>
            <RiSearchLine className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground' />
            <Input
                onInput={(e) => onInputChange(e.data)}
                placeholder='Search mods...'
                className='ps-12'
            />
        </div>
    );
}