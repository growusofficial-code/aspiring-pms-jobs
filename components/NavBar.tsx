'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const Item = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href as string}
      className={`px-3 py-2 rounded-xl hover:bg-slate-800 transition ${pathname === href ? 'bg-slate-800' : ''}`}
    >
      {children}
    </Link>
  );
  return (
    <header className="border-b border-slate-800/60">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold">Aspiring PMs • Jobs</Link>
        <nav className="flex items-center gap-1">
          <Item href="/jobs">Jobs</Item>
          <Item href="/companies">Companies</Item>
          <Item href="/post-a-job">Post a Job</Item>
          <Item href="/candidate/dashboard">Dashboard</Item>
        </nav>
      </div>
    </header>
  );
}
