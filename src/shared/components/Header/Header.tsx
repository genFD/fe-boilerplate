import { DesktopNavigation, MobileNavigation } from '@/components';
import { Logo, ToggleTheme } from '@/shared';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-full bg-slate-800 mx-auto max-w-7xl sm:py-3 px-5 lg:px-10" role="banner">
      <div className="flex justify-between">
        <Link to="/">
          <Logo className="w-16 h-16" />
        </Link>
        <div className="flex items-center">
          <ToggleTheme />
          <DesktopNavigation className="pointer-events-auto hidden md:block" />
          <MobileNavigation className="pointer-events-auto md:hidden" />
        </div>
      </div>
    </header>
  );
}
