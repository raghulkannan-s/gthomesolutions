
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.5 11.9a8.5 8.5 0 0 1-12.9 7.2L3 20l1-4.4A8.5 8.5 0 1 1 20.5 11.9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.3c.2-.4.4-.4.6-.4h.4c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.5c.6 1.1 1.5 2 2.6 2.6l.5-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.5v.4c0 .2 0 .4-.4.6-.3.2-1 .5-2.3.2-1.3-.3-3-1.3-4.4-2.7-1.4-1.4-2.4-3.1-2.7-4.4-.3-1.3 0-2 .2-2.3Z"
        fill="currentColor"
      />
    </svg>
  );
}


export { MailIcon, PhoneIcon, WhatsAppIcon };