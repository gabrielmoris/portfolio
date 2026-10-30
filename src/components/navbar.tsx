import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "@/i18n/navigation";
import { ThemeToggler } from "@/components/themeToggler";

export const NavBar = () => {
  return (
    <header className="w-full border-b px-20 py-4 flex justify-end gap-4">
      <NavigationMenu className="mr-20">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-xl"
              render={<Link href="/about" />}
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeToggler />
    </header>
  );
};
