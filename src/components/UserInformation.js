import { useEffect } from "react";

const Component = ({ data }) => {
  useEffect(() => {
    console.log("Component is updated");
  }, [data]);

  if (!data.age) return null;

  return (
      <div>
        {data.age < 18 ? (
            <span style={{ color: "red" }}>
          You are too young to be our employee
        </span>
        ) : (
            <span style={{}}>You are old enough :)</span>
        )}
      </div>
  );
};

export default Component;
