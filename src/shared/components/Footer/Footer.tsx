import { GitHubIcon, InstagramIcon, LinkedInIcon, SocialLink, TwitterIcon } from '@/shared';

export function Footer() {
  return (
    <footer className="mt-auto w-full mx-auto max-w-7xl sm:py-3 px-5 lg:px-10 border-t border-slate-100 dark:border-slate-800 ">
      <div className="mt-4 md:mt-0 flex flex-col items-center justify-between gap-2 sm:flex-row">
        <div className="flex gap-6">
          <SocialLink link="https://twitter.com" icon={TwitterIcon} />
          <SocialLink link="https://instagram.com" icon={InstagramIcon} />
          <SocialLink link="https://github.com" icon={GitHubIcon} />
          <SocialLink link="https://linkedin.com" icon={LinkedInIcon} />
        </div>
        <div className="flex items-center justify-center p-5">
          <span className="text-slate-2 dark:text-slate-0 text-12 lg:text-14 font-Ibm">
            &copy; {new Date().getFullYear()} HK Softwares. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
