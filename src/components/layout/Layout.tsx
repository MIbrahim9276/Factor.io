import { Outlet } from "react-router";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout() {
    return (
        <div className='min-h-screen flex flex-col'>
            <div className='w-full fixed inset-x-0 top-0 z-50 bg-background'>
                <Header />
                <nav className='p-2 border-b-2 justify-center flex'>
                    <Nav />
                </nav>
            </div>
            <main className='flex-1 flex relative pt-32'>
                <img
                    src='/images/wallpaper.jpg'
                    className='absolute inset-0 h-full w-full object-cover opacity-20'
                />
                <div
                    className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-background"
                />

                <div className="relative z-10 w-full flex-1">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}