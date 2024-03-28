import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5  rounded py-2 text-[#7E90FE] font-bold border border-[#7E90FE] mr-5">
            {remote_or_onsite}
          </button>
          <button className="px-5 rounded py-2 text-[#7E90FE] font-bold border border-[#7E90FE] ">
            {job_type}
          </button>
        </div>
        <div className="flex gap-8">
          <h2 className="flex font-semibold text-xl items-center gap-2">
            <FaLocationDot></FaLocationDot>
            {location}
          </h2>
          <h2 className="flex font-semibold text-xl items-center gap-2">
            <AiOutlineDollar></AiOutlineDollar>
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
