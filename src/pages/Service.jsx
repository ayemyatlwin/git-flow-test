import { produce } from "immer";
import React, { useCallback, useState } from "react";

const data = [
  {
    parents: [{ firstName: "aye", lastName: "myat" }],
    children: [{ address: "pzd", phone: "09786732377" }],
  },
];

const Service = () => {
  const [items, setItems] = useState([...data]);

  console.log(items);

  const handleParentChange = useCallback((parentIndex, key, value) => {
    setItems(
      produce((draft) => {
        draft[parentIndex].parents[0][key] = value;
      })
    );
  }, []);

  const handleChildChange = useCallback(
    (parentIndex, childIndex, key, value) => {
      setItems(
        produce((draft) => {
          draft[parentIndex].children[childIndex][key] = value;
        })
      );
    },
    []
  );

  const addParentDiv = useCallback(() => {
    setItems(
      produce((draft) => {
        draft.push({
          parents: [{ firstName: "", lastName: "" }],
          children: [],
        });
      })
    );
  }, []);

  const addchildDiv = useCallback((parentIndex) => {
    setItems(
      produce((draft) => {
        draft[parentIndex].children.push({ address: "", phone: "" });
      })
    );
  }, []);

  const deletechildDiv = useCallback((parentIndex, childIndex) => {
    setItems(
      produce((draft) => {
        draft[parentIndex].children.splice(childIndex, 1);
      })
    );
  }, []);

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
