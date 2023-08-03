import { TExperience } from "@/app/data/resume/experience";

const Experiences = ({ data }: { data: TExperience[] }) => (
  <div className="space-y-4">
    {data.map((item, index) => (
      <div key={index} className="p-4 md:p-5 rounded-lg shadow-md bg-white space-y-2">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-base md:text-lg font-bold text-blue-500">{item.company}</h3>
          <span className="italic text-sm md:text-base text-gray-500">{item.companyDescription}</span>
        </div>
        <div className="flex justify-between items-baseline mb-2">
          <div className="text-base md:text-lg font-semibold">{item.jobTitle}</div>
          <p className="text-gray-500 text-sm md:text-base">{item.date}</p>
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
