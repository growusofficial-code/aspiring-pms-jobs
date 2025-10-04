import Link from 'next/link';
import JobCard, { type Job } from '@/components/JobCard';
import jobs from '@/data/mock-jobs.json';

export default function HomePage() {
  const featured = (jobs as Job[]).slice(0, 2);
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Jobs & Internships for Aspiring PMs</h1>
        <p className="text-slate-300">Create a profile, upload your resume, and apply in one click.</p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/jobs" className="btn">Browse Jobs</Link>
          <Link href="/post-a-job" className="btn">Post a Job</Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Featured Jobs</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map(j => <JobCard key={j.id} job={j} />)}
        </div>
        <div className="text-right">
          <Link href="/jobs" className="underline text-slate-300">See all jobs →</Link>
        </div>
      </section>
    </div>
  );
}
