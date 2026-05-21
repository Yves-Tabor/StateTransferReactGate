




import { useEffect } from "react";
import { useState } from "react";

const NameTransferLists = () => {
    const sourceList = 
    [
      "Alice Johnson",
      "Bob Smith",
      "Charlie Brown",
      "Diana Prince",
      "Ethan Hunt",
        ]
    
  const [firstList, setFirstList] = useState(sourceList)

  const [secondList, setSecondList] = useState([]);
  useEffect(() => {
    for (let index = 0; index < sourceList.length; index++) {
      const timeForSending = index * 2000;
      const timeout = setTimeout(() => {
          setSecondList(prev => [...prev, sourceList[index]]);
          setFirstList(prev=> prev.filter(item=> item !== sourceList[index]))
      }, timeForSending);
    }
  }, []);

  return (
    <div className="max-w-4xl p-8 mx-auto">
      <div className="grid grid-cols-2 gap-8">
        {/* First List */}
        <div className="p-6 bg-blue-100 rounded-lg">
          <h2 className="mb-4 text-xl font-bold text-blue-800">First List</h2>
          <ul className="space-y-2">
            {firstList.map((name, index) => (
              <li key={`first-${name}-${index}`} className="text-blue-700">
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Second List */}
        <div className="p-6 bg-green-100 rounded-lg">
          <h2 className="mb-4 text-xl font-bold text-green-800">Second List</h2>
          <ul className="space-y-2">
            {secondList.map((name, index) => (
              <li key={`second-${name}-${index}`} className="text-green-700">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NameTransferLists;
