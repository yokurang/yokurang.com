import { TCourse } from "@/app/data/resume/courses";

const Courses = ({ data }: { data: TCourse[] }) => (
  <div className="flex flex-wrap justify-start">
    {data.map((item, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <div className="p-4 md:p-5 rounded-lg shadow-md bg-white border border-gray-200">
          <h4 className="font-bold text-lg md:text-xl mb-2 text-blue-700">{item.course}</h4>
          <p className="text-gray-700 text-sm md:text-base">{item.institution}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Courses;
