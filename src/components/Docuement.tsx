import { FaFilePdf } from "react-icons/fa";
import { FaFilePowerpoint } from "react-icons/fa";

// Keep your original file imports unchanged
import pdf from "../assets/documents/24-25J-096_Final_RP_Report.pdf";
import chekcList from "../assets/documents/CheckList1 .pdf";
import invidulekame from "../assets/documents/it21155352_24-25J-096 (3).pdf";
import reserchpaper from "../assets/documents/IEEE_Conference_Template (65).pdf";

// Utility components matching Eco-vision style
const PrimaryTypo = ({ text }) => {
  return (
    <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl text-center">
      <span className="block">{text}</span>
      <span className="block h-1 w-20 bg-green-500 mt-4 mx-auto"></span>
    </h2>
  );
};

const SecondaryTypo = ({ text }) => {
  return (
    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
      {text}
      <span className="block h-1 w-14 bg-green-400 mt-2 mx-auto"></span>
    </h3>
  );
};

// Document component with Eco-vision styling
function Document() {
  return (
    <section id="documents" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrimaryTypo text="Documents" />
        
        {/* Research Paper Section */}
        <div className="mt-12" data-aos="fade-up">
          <SecondaryTypo text="Research Paper" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 justify-items-center">
            <a
              href={reserchpaper}
              download="E-learning_Report.pdf"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <FaFilePdf className="text-4xl text-red-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Research Paper</h3>
            </a>
          </div>
        </div>

        {/* Final Document and Power Point Sections */}
        <div className="mt-16 grid md:grid-cols-2 gap-x-8 gap-y-12">
          {/* Final Document Section */}
          <div data-aos="fade-up">
            <SecondaryTypo text="Final Documents" />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 justify-items-center">
              <a
                href={pdf}
                download="E-learning_Report.pdf"
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full transform transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <FaFilePdf className="text-4xl text-red-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Final Report</h3>
              </a>
              <a
                href={chekcList}
                download="E-learning_Report.pdf"
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full transform transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <FaFilePdf className="text-4xl text-red-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">PP1</h3>
              </a>
              <a
                href="/assets/documents/report.pdf"
                download="E-learning_Report.pdf"
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full transform transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <FaFilePdf className="text-4xl text-red-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">PP2</h3>
              </a>
            </div>
          </div>

          {/* Power Point Section */}
          <div data-aos="fade-up" data-aos-delay="100">
            <SecondaryTypo text="Presentations" />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 justify-items-center">
              <a
                href="/assets/documents/presentation.pptx"
                download="E-learning_Presentation.pptx"
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full transform transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <FaFilePowerpoint className="text-4xl text-orange-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Final PPT</h3>
              </a>
              <a
                href="/assets/documents/presentation.pptx"
                download="E-learning_Presentation.pptx"
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full transform transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <FaFilePowerpoint className="text-4xl text-orange-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">PP1 PPT</h3>
              </a>
              <a
                href="/assets/documents/presentation.pptx"
                download="E-learning_Presentation.pptx"
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full transform transition duration-300 hover:shadow-xl hover:scale-105"
              >
                <FaFilePowerpoint className="text-4xl text-orange-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">PP2 PPT</h3>
              </a>
            </div>
          </div>
        </div>

        {/* Individual Document Section */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="200">
          <SecondaryTypo text="Individual Documents" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            <a
              href={invidulekame}
              download="E-learning_Report.pdf"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <FaFilePdf className="text-4xl text-red-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">
                Kamesh Diviyanajana Final Report
              </h3>
            </a>
            <a
              href="/assets/documents/report.pdf"
              download="E-learning_Report.pdf"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <FaFilePdf className="text-4xl text-red-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">
                W R A H Kumara Final Report
              </h3>
            </a>
            <a
              href="/assets/documents/report.pdf"
              download="E-learning_Report.pdf"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <FaFilePdf className="text-4xl text-red-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">
                Jayawardana W G L P Final Report
              </h3>
            </a>
            <a
              href="/assets/documents/report.pdf"
              download="E-learning_Report.pdf"
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <FaFilePdf className="text-4xl text-red-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2 text-center">
                Wijesinghe S A A K Final Report
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Document;