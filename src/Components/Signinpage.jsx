import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./Auth"
let Signinpage=()=>{
    let{id,updateid}=useAuth()
    let navigate=useNavigate()
    let signouthandler=()=>{
        updateid(false)
        localStorage.removeItem("id")
        navigate('/');
    }
    return <div>
        {
            id ? <>
            <nav className="navbar navbar-expand-lg bg-blue navbar-dark">
        {/* <input className="search-input" type="text" placeholder="&#128269;  Search 8,000+ tutorials" /> */}
        <div className="box ">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="search 8,000+ tutorials" ></input>
        </div>
        <h3 className=" ml-30"><img width="200rem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhJRCwuewyU7g7sHPWbP6okRh9JXLs24iJw&s"></img></h3>
        <div className="ml-auto">
        <button className="btn btn-light">Menu</button>
        <button onClick={signouthandler} className="ml-2 btn btn-dark">SignOut</button>
        </div>
       </nav>
       <div className="container" >
        <div className="row">
            <div className=" ml-30 mt-5">
                <h3 className="ml-5 mb-4">Welcome to freeCodeCamp.org</h3>
                <pre className="mt-5 ml-5">"I have not failed,I've just found 10,000 ways 
                <br/>              that won't work."
                <br/>               -Thomas A. Edision</pre>
                
                <ul className="navbar-nav mt-3">
                <li className="x mt-2"><i class="fa fa-laptop"></i> (new) Responsive Web Design Certification (300 hour's)</li>
                <li className="x mt-2"> <i class="fa fa-laptop"></i> Legacy Responsive Web Design Certification (300 hour's) </li>
                <li className="x mt-2"> <i class="fa-brands fa-js"></i> Javascript Algorithm and Data Structure Certification (300 hour's) </li>
                <li className="x mt-2"> <i class="fa-brands fa-react"></i> Front End Developement Libraries Certification (300 hour's) </li>
                <li className="x mt-2">  Data Visualisation Certification (300 hour's) </li>
                <li className="x mt-2"> <i class="fas fa-server"></i> Backend Developement and APIs Certification (300 hour's) </li>
                <li className="x mt-2"> <i class="fa-solid fa-clipboard-list"></i> Quality Assurance Certification (300 hour's) </li>
                </ul>
            </div>
        </div>
       </div>
            </>:<><h1><Link to="/signup">SignIn</Link> to open the page</h1></>
        }
        
    </div>
}
export default Signinpage