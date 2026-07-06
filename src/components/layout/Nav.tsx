import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "#components/ui/navigation-menu";
import { Link } from "react-router";

export default function Nav() {
    const itemClassName = `${navigationMenuTriggerStyle()} w-full`;

    return (
        <NavigationMenu orientation='vertical'>
            <NavigationMenuList className='flex-col justify-stretch gap-4'>
                <NavigationMenuItem className='w-full'>
                    <NavigationMenuLink className={itemClassName} render={<Link to='/'>Dashboard</Link>} />
                </NavigationMenuItem>
                <NavigationMenuItem className='w-full'>
                    <NavigationMenuLink className={itemClassName} render={<Link to='/mods'>ModList</Link>} />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}