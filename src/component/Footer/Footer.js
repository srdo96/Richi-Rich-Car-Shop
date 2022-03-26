import React from "react";

const Footer = () => {
  return (
    <div>
      <h3>Q2. Deference between props and state?</h3>
      <p>
        Ans: <br />
        Props: Props are used to pass data from one Component to another. Props
        are read only. It is immutable. <br />
        State: State is a parts of application that can be change. It is the
        local state of the component which cannot be accessed and modified
        outside of the component. State is mutable.
      </p>
      <h3>Q3. How useState work?</h3>
      <p>
        Ans: useState returns a stateful value and a function that will set that
        value. And it has an argument. In the initial render the value is the
        same value of argument. Example: <br />
        <code>const [run, setRun] = useState(0)</code> <br />
        Hear the initial value of run is 0. And setRun is a function which is
        use to update run value.
      </p>
    </div>
  );
};

export default Footer;
