// function sum(a,b){
//     return a+b;
// }

// function sumWithMsg(clbk,msg){
//            const result=clbk(20,40);
//            console.log(msg+":"+result)
// }

// sumWithMsg(sum,"Hey using calculation with jS")




function login(msg,error){
    if(error){
        console.log("Error is"+error)
    }
    else{
        console.log("Welcome"+msg);
    }
}

 function loginVerification(username,password,clbk){
   if(username=="ptomer40" && password=="1234556"){
    clbk("Success",null);
   }else{
    clbk(null,"Username or password is incorrect")
   }

 }

 loginVerification("ptomer40","1234556",login)