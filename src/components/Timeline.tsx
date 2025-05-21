import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS once when importing the component
if (typeof window !== 'undefined') {
  AOS.init();
}

const StandaloneTimeline = ({ 
  title = "Project Timeline", 
  timelineData = defaultTimelineData,
  backgroundColor = "bg-white",
  stepColor = "bg-green-600",
  cardColor = "bg-gray-100"
}) => {
  return (
    <section id="timeline" className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading component included directly */}
        <h2 className="text-3xl font-bold text-center text-blue-800 sm:text-4xl mb-12">
          {title}
        </h2>
        
        <div className="relative">
          <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {timelineData.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col sm:items-end hover:scale-105 duration-300 ${
                  index % 2 === 0
                    ? "sm:flex-row-reverse ml-4"
                    : "sm:flex-row mr-4"
                } sm:items-start`}
              >
                <div
                  data-aos="zoom-in-left"
                  data-aos-duration="3000"
                  className={`flex items-center justify-center w-8 h-8 ${stepColor} text-white rounded-full`}
                >
                  {event.step}
                </div>
                <div
                  className={`relative md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-8 md:pr-0" : "md:pr-8 md:pl-0"
                  } mt-4 md:mt-0`}
                >
                  <div
                    data-aos="zoom-in-left"
                    data-aos-duration="3000"
                    className={`${cardColor} p-6 rounded-lg shadow-lg m-1`}
                  >
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <p className="mt-2 text-gray-700">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Default timeline data included directly
const defaultTimelineData = [
  {
    step: "1",
    title: "Project Proposal",
    date: "August 2024",
    description:
      "Started the project by defining requirements and gathering the team.",
  },
  {
    step: "2",
    title: "Progress Presentation I",
    date: "November 2024",
    description:
      "Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
  },
  {
    step: "3",
    title: "Research Paper",
    date: "March 2025",
    description:
      "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge",
  },
  {
    step: "4",
    title: "Progress Presentation II",
    date: "March 2025",
    description:
      "Progress Presentation II reviews the 90% completion status demonstration of the project.",
  },
    {
    step: "7",
    title: "Final Report",
    date: "April 2025",
    description:
      "Final Report evaluates the completed project done throughout the year.",
  },
  {
    step: "5",
    title: "Website Assessment",
    date: "May 2025",
    description:
      "The Website helps to promote our research project, publish the findings and inform the clients about the research progress.",
  },
  {
    step: "8",
    title: "Final Presentation & Viva",
    date: "May 2025",
    description:
      "Viva is held individually to assess each members contribution to the project.",
  },
];

export default StandaloneTimeline;