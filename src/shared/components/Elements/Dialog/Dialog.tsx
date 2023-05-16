import React, { Fragment } from 'react';
import { Dialog as UIDialog, Transition } from '@headlessui/react';

type DialogProps = {
  isOpen: boolean;
  isOpenReg?: boolean;
  onClose: () => void;
  onCloseReg?: () => void;
  children: React.ReactNode;
  initialFocus?: React.MutableRefObject<null>;
};

export const Dialog = ({ isOpen, onClose, children, initialFocus }: DialogProps) => {
  return (
    <Transition show={isOpen} as={React.Fragment}>
      <UIDialog
        as="div"
        static
        className="relative z-50"
        open={isOpen}
        onClose={onClose}
        initialFocus={initialFocus}
      >
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"
            aria-hidden="true"
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <UIDialog.Panel>{children}</UIDialog.Panel>
          </div>
        </Transition.Child>
      </UIDialog>
    </Transition>
  );
};
