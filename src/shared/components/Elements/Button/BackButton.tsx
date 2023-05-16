import { useNavigate } from 'react-router-dom';
import { LeftCaretIcon } from '@/shared';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className="flex cursor-pointer gap-x-3 items-center">
      <LeftCaretIcon className="w-5 h-5 fill-purple-0 dark:fill-pink-purple-1" />
      <p className="text-sm font-bold text-slate-500 dark:text-white">Back</p>
    </div>
  );
}
