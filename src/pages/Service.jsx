import React, { useState } from "react";

const data = [
  {
    parents: [{ firstname: "aml", lastname: "aml" }],
    children: [{ address: "aa", phone: "098989" }],
  },
];

const Service = () => {
  const [items, setItems] = useState([...data]);
  console.log(items);
  const addParentDiv = () => {
    setItems([...items, { parents: [""], children: [] }]);
  };
  const addchildDiv = (parentIndex) => {
    const newItems = [...items];
    newItems[parentIndex].children.push("");
    setItems(newItems);
  };
  const deletechildDiv = (parentIndex, childIndex) => {
    const newItems = [...items];
    newItems[parentIndex].children.splice(childIndex, 1);
    setItems(newItems);
  };
  return (
    <>
      <h1>State Management Task</h1>
      <div>
        <button onClick={() => addParentDiv()}>Add Parent</button>
        {items.map((m, parentIndex) => (
          <main key={parentIndex} className="parent-div">
            {m.parents.map((p, pIndex) => (
              <div key={pIndex} className="">
                <input type="text" value={p.firstname} onChange={(e)=>e.target.value} />
                <input type="text" value={p.lastname} />
                <button onClick={() => addchildDiv(parentIndex)}>
                  Add Child
                </button>
              </div>
            ))}
            {m.children.map((c, index) => (
              <div key={index} className="child-div">
                <input type="text" value={c.address} />
                <input type="text" value={c.phone} />
                <button onClick={() => deletechildDiv(parentIndex, index)}>
                  delete
                </button>
              </div>
            ))}
          </main>
        ))}
      </div>
    </>
  );
};

export default Service;
