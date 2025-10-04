import Link from 'next/link';

export type Job = {
  id: string;
  slug: string;
  title: string;
  company: { name: string; slug: string; logo?: string };
  location_type: string;
  location: string;
  employment_type: string;
  experience_level: string;
  salary_min?: number;
  salary_max?: number;
  description: string;
  skills?: string[];
  posted_at?: string;
};

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Link href={`/jobs/${job.slug}`} className="text-xl font-semibold hover:underline">{job.title}</Link>
          <div className="mt-1 text-sm text-slate-300">{job.company.name} • {job.location}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="badge">{job.location_type}</span>
            <span className="badge">{job.employment_type}</span>
            <span className="badge">{job.experience_level}</span>
            {job.salary_min && job.salary_max ? (
              <span className="badge">₹{(job.salary_min/100000).toFixed(1)}–{(job.salary_max/100000).toFixed(1)} LPA</span>
            ) : null}
          </div>
        </div>
        <Link href={`/jobs/${job.slug}`} className="btn">View</Link>
      </div>
      <p className="mt-3 text-slate-300 line-clamp-2">{job.description}</p>
      {job.skills?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {job.skills.slice(0,5).map(s => <span key={s} className="badge">{s}</span>)}
        </div>
      ) : null}
    </div>
  );
}
