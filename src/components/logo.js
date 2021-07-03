import * as React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ width = '200', height = '30' }) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124.3 20.98"
    >
      <title>WeatherRadar</title>
      <circle cx={18.92} cy={9.21} r={5.63} fill="#ffd340" />
      <path
        d="M18.92 2.04a.51.51 0 01-.46-.51v-1a.51.51 0 011 0v1a.51.51 0 01-.54.51zm5.43 2.25a.51.51 0 01-.36-.87l.72-.72a.51.51 0 01.72.72l-.72.72a.51.51 0 01-.36.15zm3.27 5.43h-1a.51.51 0 01-.52-.51.51.51 0 01.52-.51h1a.51.51 0 01.51.51.51.51 0 01-.51.51zM13.46 4.29a.51.51 0 01-.36-.15l-.64-.72a.51.51 0 01.72-.72l.73.72a.51.51 0 010 .72.51.51 0 01-.37.15z"
        fill="#ffd347"
      />
      <path
        d="M16.86 11.25a4.09 4.09 0 00-4.09-4.09 4 4 0 00-1.6.33 4.6 4.6 0 00-8.6 2.78 3.07 3.07 0 00.48 6.1h13.81a2.56 2.56 0 100-5.12z"
        fill="#88d5ee"
      />
      <path
        d="M25.56 12.79a4 4 0 00-1.19.18 5.62 5.62 0 00-11.06.89 3.29 3.29 0 00-.54-.05 3.58 3.58 0 100 7.16h12.79a4.09 4.09 0 000-8.18z"
        fill="#b5e3f4"
      />
      <path
        d="M35.36 12.65h1.43v1.22h.08a2 2 0 011.94-1.33 6.25 6.25 0 01.64 0v1.43a3.25 3.25 0 00-.78-.09 1.72 1.72 0 00-1.83 1.77v4.66h-1.48zm4.76 3.87c0-2.34 1.4-4 3.53-4 1.73 0 3.38 1.08 3.38 3.84v.53H41.6a2.1 2.1 0 002.17 2.3 1.74 1.74 0 001.76-1.09l1.41.25a3 3 0 01-3.19 2.07c-2.29.03-3.63-1.52-3.63-3.9zm5.45-.71a1.89 1.89 0 00-1.91-2 2.06 2.06 0 00-2.06 2zm2.75 2.33c0-1.74 1.49-2.12 2.93-2.29s1.93-.15 1.93-.69a1.27 1.27 0 00-1.45-1.37 1.77 1.77 0 00-1.77 1.06l-1.4-.32a3.08 3.08 0 013.15-2c1.21 0 3 .45 3 2.67v5.07h-1.49v-1h-.06a2.38 2.38 0 01-2.26 1.21 2.32 2.32 0 01-2.58-2.34zm4.87-.6v-1a5.57 5.57 0 01-1.84.41c-.86.12-1.57.4-1.57 1.19s.61 1.12 1.45 1.12a1.79 1.79 0 001.96-1.72zm3.12-1.03c0-2.33 1.39-4 3.54-4a2.93 2.93 0 013.16 2.57h-1.45a1.64 1.64 0 00-1.68-1.31c-1.24 0-2.07 1-2.07 2.66s.81 2.72 2.07 2.72a1.63 1.63 0 001.68-1.31h1.45a2.92 2.92 0 01-3.14 2.57c-2.22.04-3.56-1.6-3.56-3.9zm11.86-2.66H66.6v4.2c0 .86.43 1 .92 1a2.55 2.55 0 00.52-.06l.27 1.22a2.67 2.67 0 01-1 .16 2 2 0 01-2.23-2v-4.52h-1.09v-1.2h1.12v-1.83h1.49v1.83h1.57z"
        fill="#1f2937"
      />
      <path
        d="M71.31 20.29l-2.16-7.64h1.83l1.35 5.37h.07l1.37-5.37h1.81l1.37 5.34h.08l1.32-5.34h1.84l-2.16 7.63h-1.88l-1.43-5.16h-.1l-1.43 5.16zm13.32.15a3.94 3.94 0 01-2-.48 3.24 3.24 0 01-1.27-1.31 5.11 5.11 0 010-4.15 3.33 3.33 0 011.26-1.39 3.63 3.63 0 011.91-.5 3.77 3.77 0 011.74.4 3 3 0 011.27 1.26 4.45 4.45 0 01.48 2.2v.55H82.7a2.11 2.11 0 00.55 1.52 1.84 1.84 0 001.4.55 1.94 1.94 0 001-.25 1.47 1.47 0 00.61-.73l1.68.19a2.63 2.63 0 01-1.11 1.59 3.84 3.84 0 01-2.2.55zm-1.92-4.68h3.59a1.84 1.84 0 00-.49-1.29 1.64 1.64 0 00-1.25-.51 1.72 1.72 0 00-1.31.53 1.9 1.9 0 00-.54 1.27zm9.03 4.69a2.8 2.8 0 01-1.82-.59 2.06 2.06 0 01-.74-1.71 1.93 1.93 0 01.42-1.33 2.35 2.35 0 011.08-.69 6.33 6.33 0 011.4-.3c.68-.07 1.16-.14 1.45-.2s.44-.23.44-.49a1.15 1.15 0 00-.33-.87 1.38 1.38 0 00-1-.3 1.74 1.74 0 00-1 .28 1.52 1.52 0 00-.52.68l-1.66-.28a2.6 2.6 0 011.17-1.58 3.93 3.93 0 012.07-.53 4.51 4.51 0 011.09.13 3.22 3.22 0 011 .42 2.29 2.29 0 01.73.81 2.67 2.67 0 01.27 1.26v5.11h-1.73v-1H94a2.17 2.17 0 01-.79.84 2.62 2.62 0 01-1.47.34zm.47-1.32a1.78 1.78 0 001.25-.48 1.49 1.49 0 00.48-1.1v-.9a1.06 1.06 0 01-.42.17 6.25 6.25 0 01-.65.12l-.58.09a2.46 2.46 0 00-1 .33.82.82 0 00-.4.76.86.86 0 00.36.75 1.57 1.57 0 00.96.26zm9.19-6.48v1.4h-1.51v4a.83.83 0 00.24.71 1 1 0 00.58.17h.31l.22-.05.3 1.41-.41.11a3.69 3.69 0 01-.65.07 2.58 2.58 0 01-1.7-.5 1.88 1.88 0 01-.69-1.6v-4.32h-1.08v-1.4h1.08v-1.82h1.8v1.82zm3.47 3.17v4.47h-1.8V10.11h1.76v3.85h.09a2.15 2.15 0 01.82-1 2.91 2.91 0 013.36.37 3 3 0 01.72 2.13v4.86h-1.8v-4.61a1.69 1.69 0 00-.4-1.2 1.4 1.4 0 00-1.1-.43 1.65 1.65 0 00-1.19.45 1.74 1.74 0 00-.46 1.29zm10.16 4.62a3.87 3.87 0 01-2-.48 3.12 3.12 0 01-1.26-1.31 4.52 4.52 0 01-.45-2.08 4.54 4.54 0 01.45-2.07 3.21 3.21 0 011.26-1.39 3.57 3.57 0 011.9-.5 3.77 3.77 0 011.74.4 3 3 0 011.27 1.26 4.45 4.45 0 01.48 2.2v.55h-5.32a2.11 2.11 0 00.55 1.52 1.84 1.84 0 001.4.55 1.92 1.92 0 001-.25 1.47 1.47 0 00.61-.73l1.68.19a2.63 2.63 0 01-1.11 1.59 3.81 3.81 0 01-2.2.55zm-1.92-4.68h3.59a1.84 1.84 0 00-.49-1.29 1.64 1.64 0 00-1.25-.51 1.72 1.72 0 00-1.31.53 2 2 0 00-.54 1.27zm6.83 4.53v-7.64h1.75v1.27h.08a1.88 1.88 0 01.72-1 2 2 0 011.16-.36h.65v1.69a2.86 2.86 0 00-.36-.07 4 4 0 00-.48 0 1.72 1.72 0 00-1.23.46 1.6 1.6 0 00-.49 1.2v4.48z"
        fill="#9ca3af"
      />
    </svg>
  );
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export { Logo };