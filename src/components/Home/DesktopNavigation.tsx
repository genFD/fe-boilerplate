import { useDialog } from '@/hooks';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { NavItem } from './NavItem';
import { Dialog } from '@/shared';

export function DesktopNavigation(props: DesktopNavigationProps) {
  const { className } = props;
  const navigate = useNavigate();
  const dialog = useDialog();

  return (
    // Navigation
    <nav className={clsx(className)}>
      <ul className="flex rounded-full px-2 font-Ibm text-sm font-medium text-purple-0 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-navy-1 dark:text-slate-1 dark:ring-white/10">
        <NavItem>
          <button type="button" onClick={dialog.openLoginDialog}>
            Nav button 1
          </button>
        </NavItem>
        <NavItem>
          <button type="button" onClick={dialog.openRegisterDialog}>
            Nav button 2
          </button>
        </NavItem>
      </ul>

      <Dialog onClose={dialog.closeLoginDialog} isOpen={dialog.isLoginDialogOpen}>
        <div>Nav menu 1</div>
      </Dialog>

      <Dialog onClose={dialog.closeRegisterDialog} isOpen={dialog.isRegisterDialogOpen}>
        <div>Nav menu 2</div>
      </Dialog>
    </nav>
  );
}

/*
######################################
          TYPES AND GLOBALS                              
######################################
*/

type DesktopNavigationProps = {
  className?: string;
};
