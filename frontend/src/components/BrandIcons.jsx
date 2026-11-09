import React from 'react';

/**
 * Bespoke, sharp, high-contrast athletic brand SVG icons.
 * Optimized for high-DPI displays with exact pixel geometry.
 */

export function TikTokIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.6c-.02 2.21-.92 4.38-2.52 5.86-1.6 1.48-3.79 2.23-5.98 2.06-2.18-.17-4.22-1.29-5.55-3.03-1.33-1.74-1.84-4-1.39-6.14.45-2.14 1.83-3.95 3.75-4.91 1.92-.96 4.2-.96 6.12 0v4.14c-1.07-.53-2.36-.59-3.48-.15-1.12.44-1.99 1.42-2.33 2.58-.34 1.16-.08 2.42.71 3.34.79.92 2 1.41 3.21 1.28 1.21-.13 2.26-.92 2.77-2.02.26-.56.39-1.17.37-1.79V.02z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M17.472 14.382c-.301-.15-1.776-.876-2.051-.976-.275-.1-.476-.15-.676.15-.2.301-.776.976-.951 1.176-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.787-1.674-2.088-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.676-1.63-.927-2.233-.245-.588-.493-.508-.676-.517-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.802.376-.275.301-1.053 1.029-1.053 2.509 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.895.12.577-.087 1.776-.726 2.026-1.427.251-.702.251-1.303.176-1.428-.075-.125-.276-.201-.577-.351zM12.004 21.75c-1.748 0-3.43-.46-4.912-1.334l-.352-.209-3.652.957.974-3.559-.229-.364a9.71 9.71 0 0 1-1.491-5.241c0-5.385 4.381-9.766 9.766-9.766 2.608 0 5.061 1.016 6.906 2.861 1.844 1.845 2.86 4.298 2.86 6.906 0 5.386-4.382 9.749-9.872 9.749zM12.004 0C5.384 0 0 5.384 0 12.004c0 2.109.55 4.167 1.594 5.976L0 24l6.196-1.625A11.96 11.96 0 0 0 12.004 24c6.62 0 12.004-5.384 12.004-12.004C24.008 5.384 18.624 0 12.004 0z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function DiagonalArrowIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

