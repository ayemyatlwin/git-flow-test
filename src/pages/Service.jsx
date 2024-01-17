import React, { useState } from "react";

const data = [
  {
    parents: [{ firstName: "aye", lastName: "myat" }],
    children: [{ address: "pzd", phone: "09786732377" }],
  },
];

const Service = () => {
  const [items, setItems] = useState([...data]);

  console.log(items);

  const handleParentChange = (parentIndex, field, value) => {
    const newItems = [...items];
    newItems[parentIndex].parents[0][field] = value;
    setItems(newItems);
  };

  const handleChildChange = (parentIndex, childIndex, field, value) => {
    const newItems = [...items];
    newItems[parentIndex].children[childIndex][field] = value;
    setItems(newItems);
  };

  const addParentDiv = () => {
    setItems([
      ...items,
      { parents: [{ firstName: "", lastName: "" }], children: [] },
    ]);
  };

  const addchildDiv = (parentIndex) => {
    const newItems = [...items];
    newItems[parentIndex].children.push({ address: "", phone: "" });
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
                <input
                  type="text"
                  name="firstName"
                  value={p.firstName || ""}
                  onChange={(e) =>
                    handleParentChange(
                      parentIndex,
                      e.target.name,
                      e.target.value
                    )
                  }
                />
                <input
                  type="text"
                  name="lastName"
                  value={p.lastName || ""}
                  onChange={(e) =>
                    handleParentChange(
                      parentIndex,
                      e.target.name,
                      e.target.value
                    )
                  }
                />
                <button onClick={() => addchildDiv(parentIndex)}>
                  Add Child
                </button>
              </div>
            ))}
            {m.children.map((c, index) => (
              <div key={index} className="child-div">
                <input
                  type="text"
                  name="address"
                  value={c.address || ""}
                  onChange={(e) =>
                    handleChildChange(
                      parentIndex,
                      index,
                      e.target.name,
                      e.target.value
                    )
                  }
                />
                <input
                  type="text"
                  name="phone"
                  value={c.phone || ""}
                  onChange={(e) =>
                    handleChildChange(
                      parentIndex,
                      index,
                      e.target.name,
                      e.target.value
                    )
                  }
                />
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
