import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";

import Index2 from "./Index2";
import { useFetch } from "./effects/useFetch";
import { useState } from "react";

interface da {
  id: number;
  name: string;
  rating: string;
}

const index = () => {
  grpc.setDefaultTransport(NodeHttpTransport());
  const [num, setNum] = useState(80);

  const data: da = useFetch(num);
  console.log(data);

  const inc = () => {
    setNum(num + 1);
    console.log(num);
  };

  return (
    <div>
      hello
			 <Index2 num={num} changenu={setNum} />
      {JSON.stringify(data)}  	
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
			<h1>{data.rating}</h1> 
      <button onClick={inc}>inc +</button>
    </div>
  );
};

export default index;
