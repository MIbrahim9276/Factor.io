import { Outlet } from "react-router";
import Header from "./Header";
import Nav from "./Nav";
import StatusBar from "./StatusBar";

export default function Layout() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex grow border-b-2'>
                <nav className='p-4 border-e-2'>
                    <Nav />
                </nav>
                <main className='p-4'>
                    <Outlet />
                </main>
            </div>
            <StatusBar />
        </div>
    );
}