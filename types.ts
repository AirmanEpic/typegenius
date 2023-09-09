export type endpointSchema = {
    endpointPath:string,
    type:"GET"|"POST"|"PUT"|"DELETE",
    accepts:any,
    returns:any
}

export type schema = {
    endpoints:endpointSchema[]
}