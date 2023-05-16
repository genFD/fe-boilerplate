import clsx from 'clsx';

export type IconsProps = {
  className?: string;
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  fill?: string;
};
export function MenuIcon(props: IconsProps) {
  const { className } = props;
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      className={clsx(className)}
    >
      <path d="M.5 1h9M.5 8h9M.5 4.5h9"></path>
    </svg>
  );
}
export function HamburgerMenuIcon(props: IconsProps) {
  const { className } = props;
  return (
    <svg
      className={clsx(className)}
      // width="15"
      // height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
        // fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export function CloseIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg viewBox="0 0 10 9" strokeLinecap="round" aria-hidden="true" className={clsx(className)}>
      <path d="m1.5 1 7 7M8.5 1l-7 7"></path>
    </svg>
  );
}

export function CaretDownIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg
      className={clsx(className)}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export function CaretUpIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg
      className={clsx(className)}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.18179 8.81819C4.00605 8.64245 4.00605 8.35753 4.18179 8.18179L7.18179 5.18179C7.26618 5.0974 7.38064 5.04999 7.49999 5.04999C7.61933 5.04999 7.73379 5.0974 7.81819 5.18179L10.8182 8.18179C10.9939 8.35753 10.9939 8.64245 10.8182 8.81819C10.6424 8.99392 10.3575 8.99392 10.1818 8.81819L7.49999 6.13638L4.81819 8.81819C4.64245 8.99392 4.35753 8.99392 4.18179 8.81819Z"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function CheckIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg className={clsx(className)} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function PlaneIcon(props: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-plane-departure"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
        transform="rotate(-15 12 12) translate(0 -1)"
      />
      <line x1={3} y1={21} x2={21} y2={21} />
    </svg>
  );
}

export function ChevronDownIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg className={clsx(className)} viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronUpIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg
      className={clsx(className)}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  );
}

export function LeftCaretIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg
      className={clsx(className)}
      {...props}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export function LeftArrowIcon(props: IconsProps) {
  const { className } = props;
  return (
    <svg
      className={clsx(className)}
      {...props}
      // className="dark:fill-slate-1 fill-slate-600"
      // width={20}
      // height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1942 3.71209C10.5603 4.0782 10.5603 4.6718 10.1942 5.03791L6.16958 9.0625H16.0938C16.6115 9.0625 17.0312 9.48223 17.0312 10C17.0312 10.5178 16.6115 10.9375 16.0938 10.9375H6.16958L10.1942 14.9621C10.5603 15.3282 10.5603 15.9218 10.1942 16.2879C9.82805 16.654 9.23445 16.654 8.86834 16.2879L3.24334 10.6629C2.87722 10.2968 2.87722 9.7032 3.24334 9.33709L8.86834 3.71209C9.23445 3.34597 9.82805 3.34597 10.1942 3.71209Z"
        // fill="#373737"
      />
    </svg>
  );
}

export function SignOutIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg
      className={clsx(className)}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg
      className={clsx(className)}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      // class="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

export function PaperPlaneIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className={clsx(className)}
      // class="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
}
export function ChatBubbleIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg
      className={clsx(className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    </svg>
  );
}

export function SunIcon(props: IconsProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="#AD1FEA"
      />
    </svg>
  );
}

export function SunIconII(props: IconsProps) {
  const { className } = props;
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={clsx('dark:hidden', className)}
    >
      <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
      <path
        strokeLinecap="round"
        d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
      ></path>
    </svg>
  );
}

export function MoonIcon(props: IconsProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function MoonIconII(props: IconsProps) {
  const { className } = props;
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={clsx('hidden dark:block', className)}
    >
      <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"></path>
    </svg>
  );
}

export function Logo(props: IconsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props.width}
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      height={props.height}
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      {...props}
    >
      <defs>
        <clipPath id="7f12163e40">
          <path
            d="M 135.292969 183 L 176 183 L 176 271.484375 L 135.292969 271.484375 Z M 135.292969 183 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="77816601b5">
          <path
            d="M 185 137 L 254.542969 137 L 254.542969 223 L 185 223 Z M 185 137 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="546ee67086">
          <path
            d="M 214 114 L 254.542969 114 L 254.542969 161 L 214 161 Z M 214 114 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="3c0f7ed36d">
          <path
            d="M 135.292969 91.484375 L 215 91.484375 L 215 161 L 135.292969 161 Z M 135.292969 91.484375 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#7f12163e40)">
        <path
          fill="#5b43d6"
          d="M 138.390625 250.324219 L 175.039062 271.484375 L 175.039062 183.273438 L 135.296875 206.222656 L 135.296875 248.535156 Z M 138.390625 250.324219 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
      <g clipPath="url(#77816601b5)">
        <path
          fill="#ed5ad2"
          d="M 185.796875 177.066406 L 185.796875 222.949219 L 214.78125 206.222656 L 254.539062 183.273438 L 254.539062 137.371094 L 214.78125 160.324219 Z M 185.796875 177.066406 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
      <g clipPath="url(#546ee67086)">
        <path
          fill="#5b43d6"
          d="M 214.78125 160.324219 L 254.539062 137.371094 L 214.78125 114.4375 Z M 214.78125 160.324219 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
      <g clipPath="url(#3c0f7ed36d)">
        <path
          fill="#02efdf"
          d="M 175.039062 137.371094 L 214.78125 114.4375 L 175.039062 91.484375 L 135.296875 114.4375 L 135.296875 160.324219 Z M 175.039062 137.371094 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export function TwitterIcon(props: IconsProps) {
  return (
    <svg viewBox="0 0 24 24" aria-label="Follow on Twitter" aria-hidden="true" {...props}>
      <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconsProps) {
  return (
    <svg viewBox="0 0 24 24" aria-label="Follow on Instagram" aria-hidden="true" {...props}>
      <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z" />
      <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z" />
    </svg>
  );
}

export function GitHubIcon(props: IconsProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" aria-label="Follow on GitHub" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconsProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" aria-label="Follow on LinkedIn" {...props}>
      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
    </svg>
  );
}

export function Pattern() {
  return (
    <svg aria-hidden="true" className="absolute left-0 top-0 h-20 w-full">
      <defs>
        <linearGradient id=":r0:-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="40%" stopColor="white"></stop>
          <stop offset="100%" stopColor="black"></stop>
        </linearGradient>
        <linearGradient id=":r0:-gradient">
          <stop offset="0%" stopColor="#4989E8"></stop>
          <stop offset="50%" stopColor="#6159DA"></stop>
          <stop offset="100%" stopColor="#FF54AD"></stop>
        </linearGradient>
        <mask id=":r0:-mask">
          <rect width="100%" height="100%" fill="url(#:r0:-pattern)"></rect>
        </mask>
        <pattern id=":r0:-pattern" width="400" height="100%" patternUnits="userSpaceOnUse">
          <rect width="2" height="83%" x="2" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="99%" x="6" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="52%" x="10" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="99%" x="14" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="86%" x="18" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="91%" x="22" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="92%" x="26" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="75%" x="30" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="51%" x="34" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="88%" x="38" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="45%" x="42" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="56%" x="46" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="80%" x="50" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="44%" x="54" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="93%" x="58" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="98%" x="62" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="41%" x="66" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="47%" x="70" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="87%" x="74" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="67%" x="78" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="73%" x="82" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="69%" x="86" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="88%" x="90" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="53%" x="94" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="69%" x="98" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="75%" x="102" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="86%" x="106" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="43%" x="110" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="80%" x="114" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="81%" x="118" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="78%" x="122" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="56%" x="126" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="47%" x="130" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="90%" x="134" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="50%" x="138" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="52%" x="142" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="77%" x="146" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="81%" x="150" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="98%" x="154" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="48%" x="158" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="87%" x="162" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="87%" x="166" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="55%" x="170" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="41%" x="174" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="42%" x="178" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="93%" x="182" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="84%" x="186" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="67%" x="190" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="68%" x="194" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="55%" x="198" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="57%" x="202" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="56%" x="206" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="55%" x="210" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="46%" x="214" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="67%" x="218" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="69%" x="222" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="79%" x="226" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="84%" x="230" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="63%" x="234" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="94%" x="238" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="90%" x="242" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="51%" x="246" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="73%" x="250" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="55%" x="254" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="57%" x="258" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="69%" x="262" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="88%" x="266" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="84%" x="270" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="49%" x="274" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="95%" x="278" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="73%" x="282" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="54%" x="286" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="57%" x="290" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="72%" x="294" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="51%" x="298" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="44%" x="302" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="52%" x="306" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="87%" x="310" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="93%" x="314" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="46%" x="318" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="47%" x="322" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="57%" x="326" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="79%" x="330" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="95%" x="334" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="54%" x="338" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="65%" x="342" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="90%" x="346" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="99%" x="350" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="82%" x="354" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="98%" x="358" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="93%" x="362" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="60%" x="366" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="50%" x="370" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="69%" x="374" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="77%" x="378" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="93%" x="382" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="44%" x="386" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="51%" x="390" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="96%" x="394" fill="url(#:r0:-fade)"></rect>
          <rect width="2" height="60%" x="398" fill="url(#:r0:-fade)"></rect>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#:r0:-gradient)"
        mask="url(#:r0:-mask)"
        opacity="0.25"
      ></rect>
    </svg>
  );
}
export function Searchbar() {
  return (
    <div className="hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        className="hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex focus:[&amp;:not(:focus-visible)]:outline-none"
      >
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5 stroke-current">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
          ></path>
        </svg>
        Find something...
        <kbd className="ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">⌘</kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
    </div>
  );
}
export function SuggestionIcon(props: IconsProps) {
  const { className } = props;
  return (
    <svg
      className={clsx(className)}
      // width="23"
      // height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 2.274c2.237 0 4.339.854 5.923 2.408a8.123 8.123 0 012.465 5.839 8.084 8.084 0 01-1.7 4.979 8.457 8.457 0 01-3.652 2.71l-.31.112.003.826h.369c.262 0 .475.21.475.469a.47.47 0 01-.39.46l-.085.008h-.365l.004 1.02h.36c.263 0 .476.21.476.469a.47.47 0 01-.39.461l-.085.008h-.358l.006 1.487a.466.466 0 01-.381.46l-.094.01H9.23a.478.478 0 01-.466-.378l-.01-.092.006-1.487h-.357a.472.472 0 01-.475-.47.47.47 0 01.39-.46l.085-.008h.361l.004-1.02h-.365a.472.472 0 01-.475-.468.47.47 0 01.39-.462l.085-.007h.368l.004-.826a8.452 8.452 0 01-3.996-2.867 8.08 8.08 0 01-1.666-5.056c.032-2.127.923-4.152 2.511-5.7 1.508-1.471 3.448-2.322 5.493-2.416l.324-.009h.06zm1.791 19.769H9.709l-.004 1.02h3.59l-.004-1.02zm-.007-1.958H9.716l-.003 1.02h3.574l-.003-1.02zM11.5 3.212h-.054c-3.946.027-7.327 3.325-7.384 7.2-.048 3.266 2.14 6.192 5.322 7.118.174.05.3.193.332.364l.008.088-.004 1.166h3.56l-.004-1.166a.47.47 0 01.34-.452c3.134-.912 5.323-3.794 5.323-7.01a7.197 7.197 0 00-2.185-5.173A7.453 7.453 0 0011.5 3.212zm.829 1.782a.4.4 0 01.401.397v.322c.48.12.932.307 1.346.552l.228-.226a.405.405 0 01.569 0L16.046 7.2a.393.393 0 010 .56l-.23.228c.247.41.437.858.557 1.333h.323a.4.4 0 01.402.397v1.645a.4.4 0 01-.402.396h-.323c-.12.476-.31.924-.557 1.333l.23.228a.393.393 0 010 .56l-1.173 1.163a.405.405 0 01-.57 0l-.227-.227a5.02 5.02 0 01-1.346.553v.322a.4.4 0 01-.401.396H10.67a.4.4 0 01-.402-.396v-.322a5.022 5.022 0 01-1.345-.553l-.228.227a.405.405 0 01-.569 0L6.954 13.88a.393.393 0 010-.56l.23-.228a4.924 4.924 0 01-.557-1.333h-.324a.4.4 0 01-.401-.396V9.719a.4.4 0 01.401-.397h.324c.12-.475.31-.923.557-1.333l-.23-.228a.393.393 0 010-.56L8.127 6.04a.405.405 0 01.569 0l.228.226a5.021 5.021 0 011.345-.552V5.39a.4.4 0 01.402-.397zM11.5 7.721c-1.572 0-2.846 1.263-2.846 2.82 0 1.558 1.274 2.82 2.846 2.82s2.846-1.262 2.846-2.82c0-1.557-1.274-2.82-2.846-2.82zm11.025 4.152c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008h-.498a.472.472 0 01-.475-.469.47.47 0 01.39-.461l.085-.008h.498zm-21.552 0c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008H.475A.472.472 0 010 12.342a.47.47 0 01.39-.461l.085-.008h.498zM3.112 3.45l.074.06.46.451c.185.183.186.48 0 .663a.476.476 0 01-.596.062l-.075-.06-.459-.451a.465.465 0 01-.001-.663.48.48 0 01.597-.062zm17.373.062c.162.16.182.408.06.59l-.061.073-.46.45a.476.476 0 01-.67 0 .464.464 0 01-.06-.59l.06-.074.46-.45a.48.48 0 01.671 0zM11.5 0c.233 0 .427.166.467.384l.008.085v.49a.472.472 0 01-.475.468.473.473 0 01-.467-.384l-.008-.084v-.49c0-.26.213-.469.475-.469z"
        // fill="#222"
        fillRule="nonzero"
      />
    </svg>
  );
}

export function PlusIcon(props: IconsProps) {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={clsx(className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function EmptyIcon(props: IconsProps) {
  const { className } = props;

  return (
    <svg {...props} className={clsx(className)} xmlns="http://www.w3.org/2000/svg">
      <g fillRule="nonzero" opacity=".5">
        <path
          d="M48.73 15.593C25.822 15.59 7.246 34.224 7.235 57.22c-.01 22.997 18.55 41.649 41.458 41.665 22.909.016 41.494-18.61 41.516-41.606a41.72 41.72 0 00-12.132-29.473A41.4 41.4 0 0048.73 15.593z"
          stroke="#3A4374"
          strokeWidth="1.045"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse fill="#231F20" cx="70.476" cy="43.691" rx="1.917" ry="2.862" />
        <path
          d="M0 44.902l97.429-21.645-19.167-5.612S67.881.37 65.11.01C62.338-.351 11.979 10.43 11.979 10.43L8.785 34.77 0 44.902zM20.284 103.503L9.272 86.027l48.14-8.265 3.305 16.746 4.888-15.424 24.628 4.882-5.007 19.537z"
          fill="#3A4374"
        />
        <path
          d="M81.97 65.607l4.438-.617L88.7 81.618a2.115 2.115 0 01-1.799 2.387l-.261.036a2.11 2.11 0 01-2.377-1.806L81.97 65.607z"
          fill="#FFF"
        />
        <path
          d="M86.352 84.471A2.519 2.519 0 0183.87 82.3l-2.292-16.634a.4.4 0 01.343-.45l4.432-.617a.398.398 0 01.296.08c.085.063.14.16.151.265l2.276 16.626a2.508 2.508 0 01-.479 1.868 2.49 2.49 0 01-1.66.97l-.256.04a2.474 2.474 0 01-.328.024zm-3.929-18.518l2.236 16.234c.132.936.991 1.59 1.925 1.467h.263a1.714 1.714 0 001.454-1.932l-2.236-16.234-3.642.465z"
          fill="#3A4374"
        />
        <path fill="#FFF" d="M78.562 50.93l7.159-.995 2.242 16.263-7.16.995z" />
        <path
          d="M80.802 67.605a.43.43 0 01-.24-.08.361.361 0 01-.151-.265l-2.244-16.274a.394.394 0 01.072-.296.423.423 0 01.263-.153l7.187-.994a.39.39 0 01.448.345l2.244 16.266a.4.4 0 01-.344.448l-7.187.995-.048.008zm-1.789-16.33l2.132 15.472 6.39-.882-2.133-15.472-6.389.882z"
          fill="#3A4374"
        />
        <path
          d="M85.573 78.014l.725-.1a3.248 3.248 0 013.664 2.773l3.013 21.85a3.248 3.248 0 01-2.77 3.661l-.726.1a3.248 3.248 0 01-3.664-2.773l-3.013-21.85a3.248 3.248 0 012.77-3.66z"
          fill="#FFF"
        />
        <path
          d="M88.429 106.83a2.959 2.959 0 01-2.923-2.558L82.31 81.064a2.959 2.959 0 012.516-3.343l2.108-.288a2.949 2.949 0 013.322 2.525l3.195 23.248a2.964 2.964 0 01-2.516 3.335l-2.108.297-.4-.008zm-1.086-28.628a1.838 1.838 0 00-.296 0l-2.108.289a2.13 2.13 0 00-1.422.842c-.35.455-.5 1.034-.415 1.603l3.194 23.248a2.166 2.166 0 002.396 1.844l2.108-.297a2.163 2.163 0 001.837-2.405l-3.194-23.248a2.159 2.159 0 00-2.124-1.868l.024-.008z"
          fill="#3A4374"
        />
        <ellipse fill="#FFF" cx="81.569" cy="46.288" rx="19.19" ry="19.264" />
        <path
          d="M81.553 65.953c-10.474-.005-19.093-8.275-19.569-18.778-.476-10.503 7.359-19.525 17.789-20.485 10.43-.96 19.768 6.482 21.202 16.897 1.47 10.746-5.992 20.662-16.691 22.182-.905.122-1.818.184-2.731.184zm0-38.536c-.868 0-1.736.059-2.596.177-7.532 1.045-13.696 6.542-15.616 13.927-1.92 7.386.78 15.206 6.844 19.812a18.74 18.74 0 0020.853 1.234c6.56-3.86 10.157-11.307 9.114-18.868-1.298-9.305-9.207-16.24-18.567-16.282h-.032z"
          fill="#3A4374"
        />
        <ellipse fill="#FFF" cx="81.569" cy="46.288" rx="15.589" ry="15.648" />
        <path
          d="M81.56 62.338c-8.606 0-15.665-6.846-15.962-15.48-.297-8.635 6.275-15.953 14.862-16.548 8.586-.596 16.098 5.745 16.987 14.339.889 8.593-5.165 16.348-13.69 17.536-.728.103-1.462.154-2.196.153zm0-31.265c-.707 0-1.414.049-2.116.144-8.096 1.127-13.848 8.489-13.009 16.65.839 8.162 7.967 14.19 16.122 13.634 8.154-.556 14.405-7.496 14.136-15.697-.268-8.2-6.959-14.713-15.132-14.731z"
          fill="#3A4374"
        />
        <path
          d="M99.896 89.714a11.645 11.645 0 00-3.913-3.206c-4.576-2.405-9.822-2.325-14.638-.802-1.709.545-5.023 1.323-5.199 3.6a2.115 2.115 0 001.526 2.004 6.254 6.254 0 002.675.104 6.887 6.887 0 00-3.618.914c-1.03.73-1.597 2.324-.75 3.294.374.404.861.683 1.397.802a6.365 6.365 0 003.554-.048c-1.251.24-2.47.625-3.634 1.146-.703.313-1.485.866-1.405 1.604.08.737.798 1.074 1.453 1.298 1.378.475 2.817.745 4.273.802a8.4 8.4 0 00-3.474 1.5c-1.598 1.346-1.598 3.903.567 4.633a6.366 6.366 0 002.14.248c6.389 0 14.04-.801 18.368-6.14a9.993 9.993 0 002.044-9.067 8.702 8.702 0 00-1.366-2.686z"
          fill="#FFF"
        />
        <path
          d="M80.802 107.984c-.75.037-1.5-.053-2.22-.265a2.762 2.762 0 01-1.9-2.108 3.502 3.502 0 011.197-3.207 5.952 5.952 0 011.725-1.002 14.816 14.816 0 01-2.396-.617c-1.062-.369-1.597-.914-1.717-1.603-.12-.69.495-1.523 1.598-2.044l.567-.24a4.211 4.211 0 01-.432-.105 3.008 3.008 0 01-1.597-.914 2.219 2.219 0 01-.471-1.732 3.209 3.209 0 011.294-2.14c.248-.175.516-.32.798-.433a2.461 2.461 0 01-1.525-2.3c.184-2.342 3.067-3.207 4.967-3.793l.511-.152c5.335-1.691 10.646-1.395 14.942.802a11.99 11.99 0 014.049 3.35 9.207 9.207 0 011.445 2.79 10.363 10.363 0 01-2.116 9.444c-4.528 5.555-12.37 6.277-18.695 6.285l-.024-.016zm-.759-11.055c-.887.226-1.752.53-2.587.906-.375.168-1.23.625-1.166 1.219.064.593.67.801 1.182.97 1.34.47 2.742.74 4.16.801a.392.392 0 01.384.353.4.4 0 01-.296.433 8.289 8.289 0 00-3.322 1.419 2.659 2.659 0 00-.934 2.453 1.953 1.953 0 001.373 1.499 5.73 5.73 0 002.005.224c6.157 0 13.768-.69 18.08-5.988a9.567 9.567 0 001.98-8.698 8.413 8.413 0 00-1.325-2.541 11.094 11.094 0 00-3.777-3.127c-4.113-2.124-9.2-2.405-14.335-.801l-.52.16c-1.692.513-4.264 1.29-4.408 3.086.031.753.54 1.4 1.262 1.604a3.86 3.86 0 001.43.176c.375-.04.742-.064 1.094-.088a.416.416 0 01.423.369.408.408 0 01-.36.433c-.359 0-.734.08-1.117.088a4.898 4.898 0 00-2.308.753c-.525.382-.874.96-.967 1.604-.063.395.041.799.288 1.114.325.334.742.563 1.198.657a6.11 6.11 0 002.396.16c.32-.08.646-.152.966-.216a.4.4 0 01.463.297.41.41 0 01-.271.48 6.097 6.097 0 01-.99.201z"
          fill="#3A4374"
        />
        <path
          d="M55.367 46.593s9.727 14.67 3.84 14.879c-5.885.208-6.388-1.339-6.388-1.339"
          fill="#FFF"
        />
        <path
          d="M58.154 61.937c-4.936 0-5.646-1.355-5.742-1.603a.425.425 0 01.263-.53.415.415 0 01.52.265s.718 1.243 5.997 1.05a1.348 1.348 0 001.294-.673c1.261-2.461-3.514-10.622-5.463-13.556a.418.418 0 01.128-.553.414.414 0 01.56.088c.742 1.122 7.186 11.063 5.51 14.43a2.139 2.139 0 01-1.997 1.13l-1.07-.048z"
          fill="#3A4374"
        />
        <ellipse fill="#C0C5DC" cx="82.455" cy="45.799" rx="3.53" ry="6.036" />
        <ellipse fill="#3A4374" cx="39.259" cy="45.799" rx="2.691" ry="4.882" />
      </g>
    </svg>
  );
}

export function NewfeedbackIcon(props: IconsProps) {
  return (
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a">
          <stop stopColor="#E84D70" offset="0%" />
          <stop stopColor="#A337F6" offset="53.089%" />
          <stop stopColor="#28A7ED" offset="100%" />
        </radialGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle fill="url(#a)" cx="28" cy="28" r="28" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
        />
      </g>
    </svg>
  );
}
