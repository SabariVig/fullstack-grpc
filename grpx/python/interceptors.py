import grpc

def _unary_unary_rpc_terminator(code, details):

    def terminate(ignored_request, context):
        context.abort(code, details)
    return grpc.unary_unary_rpc_method_handler(terminate)


class InceptorValidator(grpc.ServerInterceptor):
    def __init__(self,code,details):
        self._terminator = _unary_unary_rpc_terminator(code,details)

    def intercept_service(self, continuation, handler_call_details):
        # print(self._header,self._value,handler_call_details.invocation_metadata)
        for ind,val in enumerate(handler_call_details.invocation_metadata):
            print (ind,"=",val)
        print(handler_call_details.invocation_metadata)
        return continuation(handler_call_details)
