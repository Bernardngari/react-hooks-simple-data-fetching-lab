import React, {useState, useEffect} from 'react'

function App(){
	const[displayDog, setDisplayDog]= useState([]);
const [isLoaded, setIsLoaded]= useState(false);

useEffect(()=>{
fetch('https://dog.ceo/api/breeds/image/random')
	.then((r)=>r.json())
	.then((data)=>setIsLoaded(data))
		setIsLoaded(!true);
},[])

return(
<div>
<p>{!isLoaded? "Loading...": null}</p>
<img src={isLoaded.message} alt='A Rqqandom Dog' />
</div>
)

}


export default App;