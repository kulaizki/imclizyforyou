import Link from 'next/link';

export default function CopyrightFooter() {
  return (
    <footer className="text-center text-slate-200 py-4 bg-slate-900">
      &copy; {new Date().getFullYear()}{" "}
      <Link href="https://www.linkedin.com/in/kulaizki/" target="_blank" rel="noopener noreferrer" className="font-semibold">
        kulaizki
      </Link>{" "}
      &{" "}
      <Link href="https://tomazuu.netlify.app/" target="_blank" rel="noopener noreferrer" className="font-semibold">
        tomazuu
      </Link>
      . All rights reserved.
    </footer>
  );
}
