import axios from 'axios'
// const player='Diogo Jota'
 const url='https://reqres.in/api/users'
 export const getUser=()=>{
   return new Promise((resolve,reject)=>{
        const promise= axios.get(url)
        promise.then((res)=>{
           
             resolve(res.data)
         }).catch((err)=>{
             console.log('error coming  ',err)
             reject("show error")
         });

    });
  
 }
 
 export const getUserDetails=(id)=>{
    const url1=`https://reqres.in/api/users/${id}`
    return new Promise((resolve,reject)=>{
         const promise= axios.get(url1)
         promise.then((res)=>{
            
              resolve(res.data)
          }).catch((err)=>{
              console.log('error coming  ',err)
              reject("show error")
          });
 
     });
   
  }