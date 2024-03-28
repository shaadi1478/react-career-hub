import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((ref) => ref.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-7xl text-orange-400 font-serif mt-6">
          Featured jobs: {jobs.length}
        </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-6">
        {
            jobs.map(job => <Job job={job}></Job>)
        }
      </div>
    </div>
  );
};

export default FeaturedJob;
