import axios from "axios";
import { useRef } from "react";

const Add = () => {
  const nameRef = useRef();
  const locationRef = useRef();
  const durationRef = useRef();
  const startRef = useRef();
  const stipendRef = useRef();
  const skillsRef = useRef();
  const whoRef = useRef();
  const perksRef = useRef();
  const addInfoRef = useRef();
  const noofOpeningsRef = useRef();
  const isLiveRef = useRef();
  const formRef = useRef();
  const aboutinternRef = useRef();

  const createInternship = async (e) => {
    console.log("create internship");
    e.preventDefault();
    const data = {
      internshipName: nameRef.current.value,
      location: locationRef.current.value,
      companyId: "632d2349bf18c8869f03ae24",
      duration: durationRef.current.value,
      startDate: startRef.current.value,
      stipend: stipendRef.current.value,
      requiredSkills: skillsRef.current.value,
      whocanapply: whoRef.current.value,
      perks: perksRef.current.value,
      additionalInformation: addInfoRef.current.value,
      noOfOpening: noofOpeningsRef.current.value,
      aboutInternship: aboutinternRef.current.value,
      islive: isLiveRef.current.value,
    };

    console.log(data);

    try {
      const res = await axios.post(
        "http://localhost:5000/internship/create",
        data
      );
      alert(res.data && res.data.message);
      window.location = "/";
    } catch (error) {
      console.log(error);
    }

    // formRef.current.reset()
  };

  return (
    <div className="min-h-screen">
      <form className="p-7 bg-white" ref={formRef}>
        <p className="text-gray-700 font-semibold text-2xl text-center mt-7 ">
          Add Internships
        </p>
        <div className="max-w-6xl mx-auto border border-gray-300 rounded-md p-12 shadow-xl flex justify-evenly mt-4">
          {/* <div className="space-y-1">
                        <label className="block font-semibold ">Email</label>
                        <input type='email' placeholder="tokir@example.com"  className="outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                    </div> */}
          <div className="mt-4">
            <div className="p-2">
              <label className="text-gray-800 font-semibold text-lg block">
                Internship_Name
              </label>
              <input
                type="text"
                ref={nameRef}
                placeholder="Enter internship name"
                className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96 "
              />
            </div>

            <div className="p-2">
              <label className="text-gray-800 font-semibold text-lg block">
                Location
              </label>
              <input
                type="text"
                ref={locationRef}
                placeholder="Enter Location"
                className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96"
              />
            </div>

            <div className="p-2">
              <label className="text-gray-800 font-semibold text-lg block">
                Duration
              </label>
              <input
                type="text"
                ref={durationRef}
                placeholder="Enter Duration"
                className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96"
              />
            </div>

            <div className="p-2">
              <label className="text-gray-800 font-semibold text-lg block">
                Start_date
              </label>
              <input
                type="date"
                ref={startRef}
                placeholder="Enter date"
                className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96"
              />
            </div>

            <div className="p-2">
              <label className="text-gray-900 font-semibold text-lg block">
                Stipend
              </label>
              <input
                type="text"
                ref={stipendRef}
                placeholder="Enter Stipend"
                className="hover:shadow-lg p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96"
              />
            </div>

            {/* <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">Apply By</label>
                    <input type='text' placeholder="Enter Apply date" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div> */}

            <div className="p-2">
              <label className="text-gray-900 font-semibold text-lg block">
                Required Skills
              </label>
              <textarea
                type="text"
                ref={skillsRef}
                placeholder="Enter Skills"
                className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96"
              />
            </div>

            <div className="p-2">
              <label className="text-gray-900 font-semibold text-lg block">
                About Internship
              </label>
              <textarea
                type="text"
                ref={aboutinternRef}
                placeholder="Enter Skills"
                className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96"
              />
            </div>

            {/* <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">Learning Skills By Internshala</label>
                    <textarea type='text' placeholder="Enter Skills by internshala" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div> */}
          </div>

          <div>
            <div className="p-2">
              <label className="text-gray-900 font-semibold text-lg block">
                Who can apply
              </label>
              <textarea
                type="text"
                ref={whoRef}
                placeholder="Enter Eligibility"
                className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96"
              />
            </div>

            <div className="p-2">
              <label className="text-gray-900 font-semibold text-lg block">
                Perks
              </label>
              <textarea
                type="text"
                ref={perksRef}
                placeholder="Enter perks"
                className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96"
              />
            </div>

            {/* <div className="p-2">
                            <label className="text-gray-900 font-semibold text-lg block">About company</label>
                            <textarea type='text'  placeholder="Enter Skills" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                        </div> */}

            <div className="p-2">
              <label className="text-gray-900 font-semibold text-lg block">
                Additional_information
              </label>
              <textarea
                type="text"
                ref={addInfoRef}
                placeholder="Enter Information"
                className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96"
              />
            </div>

            {/* <div className="p-2">
                <label className="text-gray-900 font-semibold text-lg block">Total No Of Applicants</label>
                    <input type='text' placeholder="Enter Applicants" className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96" />
                </div> */}

            <div className="p-2">
              <label className="text-gray-900 font-semibold text-lg block">
                No Of Opening
              </label>
              <input
                type="number"
                ref={noofOpeningsRef}
                placeholder="Enter Duration"
                className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96"
              />
            </div>

            <div className="p-2">
              <label className="text-gray-900 font-semibold text-lg block">
                Islive
              </label>
              <input
                type="boolean"
                ref={isLiveRef}
                placeholder="Enter Duration"
                className="shadow-md p-[6px] outline-none border rounded-md border-gray-300 hover:border-sky-600 w-96 "
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-10">
          <button
            onClick={createInternship}
            className="text-white bg-sky-500 hover:bg-sky-600 border rounded-md px-6 p-2 shadow-lg font-semibold text-lg"
          >
            Create Internship
          </button>
        </div>
      </form>
    </div>
  );
};
export default Add;
