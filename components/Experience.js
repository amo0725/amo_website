import React from "react";
import userData from "../constants/data";

const Experience = () => {
    return(
        <>
            <div className="max-w-4xl mx-auto h-36 bg-gray-100 dark:bg-gray-700">
                <h1 className="lg:text-8xl lg:text-left lg:py-16 py-24 text-center font-mono font-bold text-6xl text-gray-900 dark:text-white">Experience</h1>
            </div>
            <div className="bg-white dark:bg-gray-800 px-4">
                <div className="grid grid-cols-1 dark:bg-gray-800 max-w-xl mx-auto py-20">
                    {userData.experience.map((exp, idx) => (
                        <>
                            <ExperienceCard
                                key={idx}
                                title={exp.title}
                                desc={exp.desc}
                                year={exp.year}
                                company={exp.company}
                                companyLink={exp.companyLink}
                            />
                            {idx === userData.experience.length - 1 ? null : (
                                <div className="divider-container flex flex-col items-center -mt-2">
                                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                                </div>
                                <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
    return (
      <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
        <h1 className="absolute -top-10 lg:-left-10 lg:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-700">
          {year}
        </h1>
        <h1 className="font-semibold text-xl">{title}</h1>
        <a href={companyLink} className="text-gray-500">
          {company}
        </a>
        <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
      </div>
    );
};

export default Experience;