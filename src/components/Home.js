import {useState} from "react"
const Home = () => {
const [msg, setMsg] = useState('')
 const run = async () => {
    const url = "http://localhost:3000"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: msg })
    };
    const response = await fetch(url,requestOptions)
    console.log(response)
  
 }

return(<div>
    <input type="text" placeholder="enter the text" onChange={(e) => {setMsg(e.target.value)}}/>
    <button type="button" onClick={run}>Submit</button>
</div>)
}

export default Home
