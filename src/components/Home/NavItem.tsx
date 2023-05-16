import clsx from 'clsx';

export function NavItem(props: NavItemProps) {
  const { children, className } = props;
  return (
    <>
      <li
        className={clsx(
          'px-3 py-1 text-12 active:text-purple-0 dark:active:text-pink-purple-1 hover:text-purple-0/70 dark:hover:text-pink-purple-1 cursor-pointer relative block transition',
          className
        )}
      >
        {children}
      </li>
      <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-purple-0/0 via-purple-0/40 to-purple-0/0 dark:from-pink-purple-1/0 dark:via-pink-purple-1/40 dark:to-pink-purple-1/0" />
    </>
  );
}

/*
######################################
          TYPES AND GLOBALS                              
######################################
*/

type NavItemProps = {
  children: React.ReactNode;
  className?: string;
};
