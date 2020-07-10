import React, { useState } from "react";

interface Props {
  num: number;
	changenu: (num: number) => void
}

const Index2 = ({changenu}: Props) => {
  const [inpNo, setInpNo] = useState(5);
  const handelSubmit = () => {
    console.log(inpNo);
		changenu(inpNo)
  };
  const handelChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInpNo(e.currentTarget.value);
  };
  return (
    <div>
      hello from 2nd page <br />
      <input type="number" value={inpNo} onChange={handelChange} />
      <button onClick={handelSubmit} type="submit">
        Submit
      </button>
    </div>
  );
};

export default Index2;
