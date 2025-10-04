import jobs from '@/data/mock-jobs.json';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { type Job } from '@/components/JobCard';

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const job = (jobs as Job[]).find(j => j.slug === params.slug);
  if (!job) return { title: 'Job not found' };
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "hiringOrganization": { "@type": "Organization", "name": job.company.name },
    "jobLocationType": job.location_type,
    "employmentType": job.employment_type,
    "description": job.description,
    "datePosted": job.posted_at || "2025-09-30"
  };
  return {
    title: `${job.title} — ${job.company.name}`,
    other: { 'script:ld+json': JSON.stringify(jsonLd) }
  };
}

export default function JobDetail({ params }: { params: Params }) {
  const job = (jobs as Job[]).find(j => j.slug === params.slug);
  if (!job) return notFound();
  return (
    <div className="space-y-4">
      <div className="card">
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <div className="text-slate-300">{job.company.name} • {job.location}</div>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="badge">{job.location_type}</span>
          <span className="badge">{job.employment_type}</span>
          <span className="badge">{job.experience_level}</span>
        </div>
        <p className="mt-4 text-slate-200">{job.description}</p>
        {job.skills?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {job.skills.map(s => <span key={s} className="badge">{s}</span>)}
          </div>
        ) : null}
        <div className="mt-6 flex gap-3">
          <button className="btn">Apply (mock)</button>
          <Link href="/jobs" className="btn">Back to jobs</Link>
        </div>
      </div>
    </div>
  );
}
