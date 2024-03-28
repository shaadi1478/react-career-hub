import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((ref) => ref.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="mt-32 text-center">
        <h2 className="text-5xl text-orange-400 font-serif mt-6 mb-5">
          Featured jobs
        </h2>
        <p className="mb-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && 'hidden'} >
        <button
        onClick={() => setDataLength(jobs.length)}
        className="btn btn-primary mt-7">See All Job</button>
      </div>
    </div>
  );
};

export default FeaturedJob;
