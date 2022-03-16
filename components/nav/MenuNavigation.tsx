import Link from 'next/link';

export interface IMenuNavigationItem {
  label: string;
  href: string;
  icon?: JSX.Element;
}

export const MenuNavigationComponent = ({
  items,
}: {
  items: IMenuNavigationItem[];
}): JSX.Element => {
  return (
    <ul>
      {items.map(({ href, icon, label }, index) => (
        <li
          key={index}
          className="cursor-pointer rounded p-2 py-3 text-black hover:bg-primary hover:text-white dark:text-white dark:hover:bg-backgroundSecondary dark:hover:text-primary"
        >
          <Link href={href} passHref>
            <div className="flex gap-x-2">
              {icon}
              <span>{label}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
