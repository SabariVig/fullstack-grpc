import { grpc } from '@improbable-eng/grpc-web'

import {MovieService} from './generated/movie_pb_service'
import  {Movie,Search } from './generated/movie_pb'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport'
import Index2 from './index2'

const index = () => {

grpc.setDefaultTransport(NodeHttpTransport())
const call = new Search()

call.setId(69)

grpc.invoke(MovieService.GetMovie,{
	request: call,
	host: "http://localhost:8080",
	onMessage: (message: Movie)=>{
console.log("Recived",message.toObject());

	},
	onEnd:(code:grpc.Code,msg:string | undefined | number, trailers: grpc.Metadata)=>{
   if(code = grpc.Code.OK){
			console.log("Worked")
	 }else{
			console.log("Not Working")
	 }
	}
});

	return (
		<div>
			hello			
			<Index2/>
		</div>
	)
}

export default index

