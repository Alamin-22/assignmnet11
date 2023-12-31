import PropTypes from 'prop-types';
const AllJobCard = ({ job }) => {
    const { JobTitle, Category, ApplicationStartDate, ApplicationEndDate, Salary, JobApplicantsNumber, JobBanner, LoggedInUser, DetailDescription } = job;
    return (
        <div className='flex justify-center'>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="flex items-center  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img src={JobBanner} alt="Job Related Img" className=" object-cover rounded-md w-20 h-28" />
                </div>
                <div className="p-2">
                    <div className='flex space-x-3 '>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {JobTitle}
                        </h4>
                        <button className=' btn btn-primary btn-sm btn-outline'>{Category}</button>
                    </div>
                    <div className='md:flex  md:space-x-10'>
                        <div className='text-left'>
                            <p>Posting Date: <span className='font-medium'>{ApplicationStartDate}</span></p>
                            <p>Application Deadline: <span className='font-medium'>{ApplicationEndDate}</span></p>
                        </div>
                        <div className='text-left'>
                            <p>Salary: <span className='font-medium'>{Salary}</span></p>
                            <p>Applied: <span className='font-medium'>{JobApplicantsNumber}</span></p>
                        </div>
                        <div className='flex flex-row-reverse justify-between md:grid'>
                            <button className='btn btn-sm btn-primary'>Details</button>
                            <p>Posted By: <span className='font-semibold'>{LoggedInUser}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllJobCard.propTypes = {
    job: PropTypes.object.isRequired,
};
export default AllJobCard;

