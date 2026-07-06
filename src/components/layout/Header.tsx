import { Button } from "#components/ui/button";
import {
    RiFlaskLine,
    RiSettingsLine
} from '@remixicon/react';
import { useNavigate } from "react-router";

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className='flex p-4 border-b-2 justify-between items-center'>
            <button onClick={() => navigate('/')}>
                <RiFlaskLine />
            </button>
            <h1 className='text-4xl'>Refactorio</h1>
            <Button variant='secondary' size='icon-lg' onClick={() => navigate('/settings')}>
                <RiSettingsLine />
            </Button>
        </div>
    );
}