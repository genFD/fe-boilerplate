import { Fragment } from 'react';
import { useDialog } from '@/hooks';
import { ChevronDownIcon, CloseIcon, Dialog, Logo } from '@/shared';
import { Popover, Transition } from '@headlessui/react';

import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { NavItem } from './NavItem';

export function MobileNavigation(props: MobileNavigationProps) {
  const { className } = props;
  const dialog = useDialog();
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Menu  */}
      <Popover className={clsx(className)}>
        <PopOverButton buttonText="Menu" />
        <UITransition>
          <Overlay />
          <Panel>
            <nav className="mt-6 flex justify-center">
              <ul className="divide-y divide-navy-1 font-Ibm text-sm text-slate-2 dark:divide-zinc-100/5 dark:text-slate-1 flex flex-col justify-center items-center">
                <NavItem className="pointer-events-auto">
                  <button type="button" onClick={dialog.openLoginDialog}>
                    Nav button 1
                  </button>
                </NavItem>
                {/*  */}
                <NavItem className="pointer-events-auto">
                  <button type="button" onClick={dialog.openRegisterDialog}>
                    Nav button 2
                  </button>
                </NavItem>
              </ul>
            </nav>
          </Panel>
        </UITransition>
      </Popover>

      {/* Register and Login Form */}
      <>
        <Dialog onClose={dialog.closeLoginDialog} isOpen={dialog.isLoginDialogOpen}>
          <div>Nav menu2</div>
        </Dialog>
        <Dialog onClose={dialog.closeRegisterDialog} isOpen={dialog.isRegisterDialogOpen}>
          <div>Nav menu</div>
        </Dialog>
      </>
    </>
  );
}

function PopOverButton(props: PopOverButtonProps) {
  const { buttonText, className } = props;
  return (
    <Popover.Button
      className={clsx(
        'flex items-center rounded-full py-1 px-4 font-Ibm text-sm font-medium text-white bg-purple-0/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-navy-1 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20',
        className
      )}
    >
      {buttonText}
      <ChevronDownIcon className="ml-3 h-auto w-2 stroke-slate-0 group-hover:stroke-slate-0 dark:group-hover:stroke-zinc-400" />
    </Popover.Button>
  );
}
function UITransition(props: UITransitionProps) {
  const { children } = props;
  return (
    <>
      <Transition.Root>{children}</Transition.Root>
    </>
  );
}

function Overlay() {
  return (
    <Transition.Child
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="duration-150 ease-in"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
    </Transition.Child>
  );
}

function Panel(props: PanelProps) {
  return (
    <Transition.Child
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-150 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 dark:bg-slate-900"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <Popover.Button aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-4 w-4 stroke-slate-3" />
          </Popover.Button>
          <h2 className="text-sm font-Ibm font-medium text-slate-2 dark:text-slate-1">
            Navigation
          </h2>
        </div>
        {props.children}
      </Popover.Panel>
    </Transition.Child>
  );
}

/*
######################################
          TYPES AND GLOBALS                              
######################################
*/

type PanelProps = {
  children: React.ReactNode;
};

type PopOverButtonProps = {
  buttonText?: string;
  className?: string;
};

type UITransitionProps = {
  children: React.ReactNode;
};

type MobileNavigationProps = {
  className?: string;
  children?: React.ReactNode;
};
