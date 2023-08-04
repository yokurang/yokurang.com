import { TExperience } from "@/app/data/resume/experience";

const Experiences = ({ data }: { data: TExperience[] }) => (
  <div className="space-y-4">
    {data.map((item, index) => (
      <div key={index} className="p-4 md:p-5 rounded-lg shadow-md bg-white space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-2">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-blue-500 mb-2 md:mb-0">{item.company}</h3>
          <span className="italic text-xs md:text-sm lg:text-base text-gray-500">{item.companyDescription}</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start mb-2">
          <div className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-0">{item.jobTitle}</div>
          <p className="text-gray-500 text-xs md:text-sm lg:text-base">{item.date}</p>
        </div>
        <div className="pl-5">
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            {item.responsibilities.map((res, idx) => (
              <li key={idx} className="pl-1">{res}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export default Experiences;
