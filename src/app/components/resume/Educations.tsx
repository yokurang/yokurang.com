import { TEducation } from "@/app/data/resume/education";

const Educations = ({ data }: { data: TEducation[] }) => (
  <div className="space-y-4">
    {data.map((item, index) => (
      <div key={index} className="p-4 md:p-5 rounded-lg shadow-md bg-white">
        <h4 className="font-bold text-lg md:text-xl mb-1">{item.degree} in {item.field}</h4>
        <div className="mb-2 flex justify-between text-sm md:text-base text-gray-500 border-b pb-2">
          <span className="font-semibold">{item.school}</span>
          <span>{item.date}</span>
        </div>
        <ul className="list-disc list-inside pl-5 space-y-1 text-sm md:text-base">
          {item.props.map((prop, i) => (
            <li key={i}>{prop}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Educations;
