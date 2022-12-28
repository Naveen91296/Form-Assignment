export const validation = (data) => {
  const err = {};
  
  if(!data.firstName)
  {
    err.firstName = "**Name field should not be empty"
  }
  else if(!data.firstName.match(/^[A-Z]/))
  {
    err.firstName = "**Start with Upper Case"
  }
  else if(data.firstName.length<3){
    err.firstName = "**Name should be more than 2 characters"
  }
  else
  {
    for(let i=1;i<data.firstName.length;i++)
    {
      if(!((data.firstName[i] >='A' && data.firstName[i] <='Z') || (data.firstName[i]>='a' && data.firstName[i] <='z') || data.firstName[i] === " "))
      {
        err.firstName = "**Name should contain only alphabets"
      }
    }
  }

  if(data.lastName)
 
   if(!data.lastName.match(/^[A-Z]/))
  {
    err.lastName = "**Start Name with Upper Case"
  }
  else if(data.lastName.length<3){
    err.lastName = "**Name should be more than 2 characters"
  }
  else
  {
    for(let i=1;i<data.lastName.length;i++)
    {
      if(!((data.lastName[i] >='A' && data.lastName[i] <='Z') || (data.lastName[i]>='a' && data.lastName[i] <='z') || data.lastName[i] === " "))
      {
        err.lastName = "**Name should contain only alphabets"
      }
    }
  }

  if(!data.address)
  {
    err.address = "**Address field should not be empty"
  }

  
  return err;
}