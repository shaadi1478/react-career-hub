import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getSotreJobApplication } from "../../Utility/LocalStoarge";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(() =>{
        const storedJobId = getSotreJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job =>)
        }
    },[])
    return (
        <div>
            <h2 className="text-8xl font-serif text-orange-400">Jobs I Applied</h2>
        </div>
    );
};

export default AppliedJobs;