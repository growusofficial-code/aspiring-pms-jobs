import JobCard, { type Job } from '@/components/JobCard';
import jobs from '@/data/mock-jobs.json';

export const dynamic = 'force-static';

export default function EmbedFeatured() {
  const featured = (jobs as Job[]).slice(0, 2);
  return (
    <div className="p-4 space-y-4">
      {featured.map(j => <JobCard key={j.id} job={j} />)}
    </div>
  );
}
