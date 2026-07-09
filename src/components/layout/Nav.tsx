import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "#components/ui/navigation-menu";
import { useFactorioInstallationStore } from "#store/FactorioInstallation.store";
import { Link } from "react-router";

export default function Nav() {
    const { installation } = useFactorioInstallationStore();

    const factorioFound = Boolean(installation);

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        render={<Link to='/' />}
                        className={navigationMenuTriggerStyle()}
                    >
                        Dashboard
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {factorioFound && (
                    <>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            render={<Link to='/mods' />}
                            className={navigationMenuTriggerStyle()}
                        >
                            Installed Mods
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            render={<Link to='/settings' />}
                            className={navigationMenuTriggerStyle()}
                        >
                            Settings
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    </>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}