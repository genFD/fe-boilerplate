import { SunIconII, MoonIconII } from '@/shared/';
import { useEffect, useState } from 'react';

export function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.theme);
  let value = theme === 'dark' ? 'light' : 'dark';

  function toggleMode() {
    const root = window.document.documentElement;
    root.classList.add(theme);
    root.classList.remove(value);
    localStorage.setItem('theme', theme);

    setTheme(value);
  }

  useEffect(() => {
    toggleMode();
  }, []);

  return (
    <>
      <button
        onClick={toggleMode}
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
        aria-label="Toggle dark mode"
      >
        <SunIconII className="h-6 w-6 stroke-slate-50" />
        <MoonIconII className=" h-6 w-6 stroke-white " />
      </button>
    </>
  );
}
