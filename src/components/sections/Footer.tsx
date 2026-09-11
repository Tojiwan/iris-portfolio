import Container from "@/components/layout/Container";
import { contact } from "@/data/portfolio";

function MailIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x={3} y={3} width={18} height={18} rx={5} />
      <circle cx={12} cy={12} r={4} />
      <circle cx={17.2} cy={6.8} r={1} fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3Z" />
    </svg>
  );
}

const gridStyle = {
  backgroundImage:
    "linear-gradient(#dfeae2 1px, transparent 1px), linear-gradient(90deg, #dfeae2 1px, transparent 1px)",
  backgroundSize: "40px 40px",
} as const;

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full overflow-hidden bg-lavender">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={gridStyle}
      />

      <Container className="relative py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-montserrat text-sm font-bold uppercase tracking-[0.18em] text-dark-purple">
              Connect with me:
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-3 font-montserrat text-[11px] text-dark-purple hover:underline hover:underline-offset-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-white"
                  >
                    <MailIcon />
                  </span>
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`${contact.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 font-montserrat text-[11px] text-dark-purple hover:underline hover:underline-offset-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-white"
                  >
                    <InstagramIcon />
                  </span>
                  {contact.instagram}
                </a>
              </li>
              <li>
                <a
                  href={`${contact.facebook}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 font-montserrat text-[11px] text-dark-purple hover:underline hover:underline-offset-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-white"
                  >
                    <FacebookIcon />
                  </span>
                  {contact.facebook}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <h2 className="font-le-jour text-[clamp(2.5rem,8vw,3.725rem)] uppercase leading-none text-dark-purple">
              Thank You!
            </h2>
            <p className="mt-4 font-montserrat text-sm text-dark-purple">
              Iris Quiambao | portfolio &lsquo;26
            </p>
          </div>
        </div>
      </Container>
      <div className="relative w-full bg-navy">
        <Container className="py-4">
          <p className="text-center font-montserrat text-[11.1px] text-white">
            Established in 2026
          </p>
        </Container>
      </div>
    </footer>
  );
}
