export const validation = (data) => {

  const err = {};
  
  if(!data.email)
  {
    err.email = "**Email field should not be empty"
  }
  else if(!data.email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/))
  {
    err.email = "**Enter a Valid Email"
  }

  if(!data.password)
  {
    err.password = "**Password field should not be empty"
  }
  else{
    if(data.password.length<8)
    {
      err.password = "**Password should be more than 7 characters"
    }
  }
  return err;
}