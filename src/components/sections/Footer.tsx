import Container from "@/components/layout/Container";
import { contact } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-lavender">
      <Container className="py-16 md:py-20">
        <p className="font-montserrat text-sm uppercase tracking-[0.18em] text-dark-purple">
          Connect with me:
        </p>
        <ul className="mt-4 flex flex-wrap gap-6">
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="font-montserrat text-xs uppercase tracking-[0.14em] text-dark-purple hover:underline hover:underline-offset-4"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="font-montserrat text-xs uppercase tracking-[0.14em] text-dark-purple hover:underline hover:underline-offset-4"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="font-montserrat text-xs uppercase tracking-[0.14em] text-dark-purple hover:underline hover:underline-offset-4"
            >
              Facebook
            </a>
          </li>
        </ul>
        <p className="mt-4 font-montserrat text-[11px] text-dark-purple">
          {contact.email} · FB/IG: {contact.instagram}
        </p>
        <h2 className="mt-10 font-le-jour text-[clamp(2.5rem,8vw,3.725rem)] leading-none text-dark-purple">
          THANK YOU!
        </h2>
        <p className="mt-6 font-montserrat text-sm text-dark-purple">
          Iris Quiambao | portfolio &lsquo;26
        </p>
      </Container>
      <div className="w-full bg-navy">
        <Container className="py-4">
          <p className="font-montserrat text-[11.1px] text-white">
            All rights reserved — Established in 2026
          </p>
        </Container>
      </div>
    </footer>
  );
}
