'use client';

import { useMemo, useState } from 'react';
import JobCard, { type Job } from '@/components/JobCard';
import jobsData from '@/data/mock-jobs.json';

export default function JobsPage() {
  const [q, setQ] = useState('');
  const [type, setType] = useState('');
  const jobs = jobsData as Job[];

  const filtered = useMemo(() => {
    return jobs.filter(j => {
      const hay = (j.title + ' ' + j.company.name + ' ' + j.description + ' ' + (j.skills || []).join(' ')).toLowerCase();
      const okQ = q ? hay.includes(q.toLowerCase()) : true;
      const okT = type ? j.employment_type === type : true;
      return okQ && okT;
    });
  }, [q, type, jobs]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">All Jobs</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <input className="input md:col-span-2" placeholder="Search by title, company, or skill" value={q} onChange={e => setQ(e.target.value)} />
        <select className="select" value={type} onChange={e => setType(e.target.value)}>
          <option value="">Any type</option>
          <option value="internship">Internship</option>
          <option value="full_time">Full-time</option>
          <option value="contract">Contract</option>
        </select>
      </div>
      <div className="grid gap-4">
        {filtered.map(j => <JobCard key={j.id} job={j} />)}
        {!filtered.length && <div className="card">No jobs found.</div>}
      </div>
    </div>
  );
}
