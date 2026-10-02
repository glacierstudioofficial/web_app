import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export const TypeScriptLogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" rx="16" fill={fill} />
    <path
      d="M72.2 103.8c3.2 2.6 7.6 4.2 12.8 4.2 10.4 0 16.4-5.4 16.4-13.8 0-8.6-6-12.2-16.2-16.4l-3.2-1.4c-6.8-2.8-9.4-5.4-9.4-9.8 0-4.6 4.2-8.2 10.8-8.2 4.8 0 8.4 1.4 11.2 3.4l4-7.6c-3.6-2.6-8.6-4.2-14.8-4.2-10.4 0-16.4 5.8-16.4 13.8 0 8.2 5.8 11.8 15.2 15.6l3.2 1.4c7.4 3 10.6 5.8 10.6 10.4 0 5-4.4 8.8-11.8 8.8-5.8 0-10.6-2-14-4.8l-4.6 8.6zM46.8 59h14.8v49H46.8V59zM36 49.8h36.4V59H36v-9.2z"
      fill="#0B0F17"
    />
  </svg>
);

export const TailwindLogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

export const VercelLogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 256 222" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M128 0L256 222H0L128 0Z" />
  </svg>
);

export const GithubLogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
    />
  </svg>
);

export const DockerLogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M13 8.5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 3h2v2H4zm0 3h2v2H4zm0 3h16.5C21.5 16.5 23 14 23 14c-.6.3-2.1.8-3.4.6C18.2 13 16.7 12 15 12H1v2.5C2 17 5 19 11 19c6 0 9.5-2 10.5-3.5H13z" />
  </svg>
);

export const PrismaLogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M2.2 19.3L11.5 1.5c.3-.5 1-.5 1.3 0l9.1 17.8c.3.5 0 1.1-.6 1.1H2.8c-.6 0-.9-.6-.6-1.1zm9.9-14L4.8 18.5h14.5L12.1 5.3z" />
  </svg>
);

export const SupabaseLogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M21.36 9.23c-.56-.7-1.44-1.07-2.36-1.07H13.5V2.62c0-1.12-.86-2.07-1.98-2.12-1.2-.06-2.22.88-2.22 2.07v6.59H3.7c-.92 0-1.8.37-2.36 1.07C.78 10.93.81 12.08 1.4 12.8l7.63 9.32c.56.69 1.43 1.06 2.35 1.06h5.82v-6.59c0-1.19 1.02-2.13 2.22-2.07 1.12.05 1.98 1 1.98 2.12v1.07h2.2c.92 0 1.8-.37 2.36-1.07.59-.72.56-1.87-.03-2.59l-4.57-5.59z" />
  </svg>
);

export const StripeLogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.763-1.444 2.153-1.444 2.186 0 3.882.915 4.954 1.704l1.391-2.921C17.72 2.923 15.54 2 12.723 2 8.796 2 6.012 4.148 6.012 7.5c0 4.167 4.298 5.176 7.42 6.307 2.458.887 3.324 1.674 3.324 2.709 0 1.053-.941 1.758-2.617 1.758-2.38 0-4.664-1.122-6.02-2.164L6.5 19.3c1.724 1.454 4.316 2.45 7.273 2.45 4.373 0 7.215-2.193 7.215-5.834 0-4.403-4.22-5.46-7.012-6.766z" />
  </svg>
);

export const ReactLogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill={fill} />
    <g stroke={fill} strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextjsLogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 180 180" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="white" />
    </mask>
    <g mask="url(#mask0)">
      <circle cx="90" cy="90" r="90" fill={fill} />
      <path d="M149.508 157.52L69.141 54H54V126H67.8762V71.5544L137.94 161.42C142.119 160.315 145.986 159.006 149.508 157.52Z" fill="#0B0F17" />
      <rect x="115" y="54" width="14" height="72" fill="#0B0F17" />
    </g>
  </svg>
);

export const PythonLogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.95 2c-5.26 0-4.94.23-4.94 2.27v2.16h9.88v1.08H5.78C3.74 7.51 2 8.79 2 11.97c0 3.2 1.48 4.46 3.78 4.46h1.61v-2.27c0-2.37 2.05-4.46 4.47-4.46h5.04c2.04 0 3.73-1.64 3.73-3.68V4.27C20.63 2.23 17.21 2 11.95 2zm-2.6 1.62c.57 0 1.03.46 1.03 1.03 0 .57-.46 1.03-1.03 1.03-.57 0-1.03-.46-1.03-1.03 0-.57.46-1.03 1.03-1.03zm2.7 18.38c5.26 0 4.94-.23 4.94-2.27v-2.16H7.11v-1.08h11.11c2.04 0 3.78-1.28 3.78-4.46 0-3.2-1.48-4.46-3.78-4.46h-1.61v2.27c0 2.37-2.05 4.46-4.47 4.46H7.1c-2.04 0-3.73 1.64-3.73 3.68v1.81c0 2.04 3.42 2.27 8.68 2.27zm2.6-1.62c-.57 0-1.03-.46-1.03-1.03 0-.57.46-1.03 1.03-1.03.57 0 1.03.46 1.03 1.03 0 .57-.46 1.03-1.03 1.03z" />
  </svg>
);

export const OpenAILogo: React.FC<IconProps> = ({ className = "h-8 w-8", fill = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.281 9.82a5.984 5.984 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 10.523.75a6.035 6.035 0 0 0-5.759 4.152A6.05 6.05 0 0 0 1.099 6.94a6.035 6.035 0 0 0 .744 7.15 5.98 5.98 0 0 0 .516 4.911 6.05 6.05 0 0 0 6.51 2.9 6.06 6.06 0 0 0 4.732 2.259 6.035 6.035 0 0 0 5.759-4.152 6.05 6.05 0 0 0 3.665-3.04 6.034 6.034 0 0 0-.744-7.149z" />
  </svg>
);
