console.log(firstName);//uninitialize
let firstName="vinay"; //initialization phase
console.log(firstName);

// compilation phase - early error check and scope decide
// no error and Global scope---firstName


// code execution phase- global execution context is created into two step
// 1)Global memory/Creation phase-some variable are set into global memory
//window={};
//this=window{};
//in case var (undefined) and in case of let&const
//firstName= unitialised
//2) code execution phase
//error-cannot access before initialize ex we have pen but not copy

//the time for which variable stay in unitialize zone is called temporal dead zone(TDZ)