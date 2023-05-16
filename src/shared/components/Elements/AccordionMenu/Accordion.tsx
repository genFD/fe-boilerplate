import * as Accordion from '@radix-ui/react-accordion';
import { CaretDownIcon } from '@/shared';
import clsx from 'clsx';

type AccordionProps = {
  accordionData: {
    triggerTitle: string;
    content: { description: string; totalItems: number }[];
    bgColor?: string;
    borderColor?: string;
    value: string;
  }[];
};

export function AccordionMenu(props: AccordionProps) {
  const { accordionData } = props;

  return (
    <>
      <Accordion.Root
        className="w-[300px] sm:w-[400px] flex flex-col gap-y-5"
        type="single"
        collapsible
      >
        <>
          {accordionData.map((accItem, i) => {
            return (
              <Accordion.Item key={i} value={accItem.value} className="overflow-hidden">
                <Accordion.Header className="flex relative">
                  <Accordion.Trigger
                    className={clsx(
                      'relative group flex h-[45px] flex-1 items-center justify-between px-5 outline-none cursor-pointer font-Ibm py-2 transition dark:bg-transparent dark:hover:bg-white/5 text-[15px] leading-none font-bold text-slate-3 hover:text-zinc-900 dark:text-slate-0 dark:hover:text-white'
                    )}
                  >
                    <span className="">{accItem.triggerTitle}</span>
                    <CaretDownIcon
                      className="dark:fill-white fill-slate-3 w-6 h-6 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />

                    <div className={clsx('absolute left-2 h-6 w-px', accItem.bgColor)}></div>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content
                  className={clsx(
                    'text-pink-purple-1 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] pl-5'
                  )}
                >
                  <div className="py-2 px-5 flex flex-col justify-between gap-y-4">
                    {accItem.content.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className={clsx(
                            'flex justify-between px-2 border-l text-slate-3 hover:text-zinc-900 dark:text-slate-0 dark:hover:text-white',
                            accItem.borderColor
                          )}
                        >
                          <div>{item.description}</div>
                          <div>{item.totalItems}</div>
                        </div>
                      );
                    })}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </>
      </Accordion.Root>
    </>
  );
}

type ContentItemProps = {
  description: string;
  totalItems: number;
};
export function ContentItem(props: ContentItemProps) {
  const { description, totalItems } = props;
  return (
    <div className="flex justify-between px-2 border-l border-orange-status text-slate-0">
      <div>{description}</div>
      <div>{totalItems}</div>
    </div>
  );
}
