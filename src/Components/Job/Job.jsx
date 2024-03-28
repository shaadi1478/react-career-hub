const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, job_type,  location, salary } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure><img src={logo} alt="Shoes"/></figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}
</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 rounded py-2 text-[#7E90FE] font-bold border border-[#7E90FE] mr-5">{remote_or_onsite}</button>
            <button className="px-5 py-2 text-[#7E90FE] font-bold border border-[#7E90FE] ">{job_type}</button>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
