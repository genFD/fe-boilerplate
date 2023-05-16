import { ReactElement } from 'react';

type IconsProps = {
  className?: string;
};
type SocialLinkProps = {
  className?: string;
  link: string;
  icon: (props: IconsProps) => ReactElement;
  description?: string;
};
export function SocialLink({ link, icon: Icon, description }: SocialLinkProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group -m-1 p-1">
      <Icon className="h-6 w-6 fill-zinc-500 transition hover:scale-125 group-hover:fill-purple-0 dark:group-hover:fill-pink-purple-1 dark:fill-slate-1" />
      <span className="hidden sm:ml-3 sm:block">{description}</span>
    </a>
  );
}
