import { Link, usePathname } from "@/navigation";
import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { className } from "./style";
import Users from "../svg/users";
import LogOut from "../svg/logout";
import clsx from "clsx";

const onHoverItem = (currentPathName: string, item: { link: string }) => {
  return currentPathName === item.link ? "opacity-100 bg-primary" : "border-transparent hover:bg-default-200";
};

const Sidebar = () => {
  const pathname = usePathname();

  const items = [
    {
      link: "/admin",
      label: <Users selected={pathname === "/admin"} />
    }
  ];

  return (
    <nav className={className.wrapper}>
      <div className={className.main}>
        {items.map((item) => (
          <Link
            key={[item.link].toString()}
            href={item.link}
            className={clsx(className.item, onHoverItem(pathname, item))}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Button
        color="default"
        onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
        className={className.footer.signUpButton}
      >
        <LogOut />
      </Button>
    </nav>
  );
};

export default Sidebar;
