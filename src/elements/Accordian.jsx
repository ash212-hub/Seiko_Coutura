import React, { useState } from "react";

const Accordion = () => {
  const accordionData = [
    {
      title: "Deliver to:",
      content: ["Name", "Email"],
    },
    {
      title: "Delivery Address",
      content: ["Address", "Phone Number"],
    },
     
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full  mx-auto p-4  bg-gray-300 rounded-md">
      {accordionData.map((section, index) => (
        <div key={index} className="mb-2">
          {/* Accordion Button */}
          <button
            className="w-full flex justify-between items-center bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {section.title}
            <span
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              
            </span>
          </button>
          {/* Accordion Content */}
          {activeIndex === index && (
            <div className="mt-2 p-3 bg-gray-200 rounded">
              <ul className="flex flex-col gap-2">
                {section.content.map((item, idx) => (
                  <>
                   
                   <div className="w-full flex flex-row gap-2 items-center justify-between">
                    <label
                      htmlFor={item}
                      className="block text-sm w-auto h-auto p-2 px-6 rounded bg-white" >{item}</label>
                    <input
                      type="text"
                      placeholder={item}
                      className="rounded p-2 w-full focus:border-none"
                      required
                    />
                   </div>
                  </>
                  
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
