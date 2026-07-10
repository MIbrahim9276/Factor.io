import { Button } from "#components/ui/button";
import {
    RiPlayLargeLine
} from '@remixicon/react';
import { useNavigate } from "react-router";

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className='flex p-4 border-b-2 justify-between items-center'>
            <h1 className='text-4xl font-factorio text-primary'>Refactorio</h1>
            <Button variant='default' size='lg' onClick={() => navigate('/settings')}>
                <RiPlayLargeLine />
                Launch Factorio
            </Button>
        </div>
    );
}
