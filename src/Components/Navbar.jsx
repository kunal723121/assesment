import { useNavigate } from "react-router";
let Navbar=()=>{
    let nav=useNavigate()
    let btnhandler=()=>{
        nav('/signin')
    }
    return <div>
        
       <nav className="navbar navbar-expand-lg bg-blue navbar-dark">
        <div className="box">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="search 8,000+ tutorials" ></input>
        </div>
        <h3 className=" ml-30"><img width="200rem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhJRCwuewyU7g7sHPWbP6okRh9JXLs24iJw&s"></img></h3>
        <div className="ml-auto">
        <button className="btn btn-dark">Menu</button>
        <button onClick={btnhandler} className="ml-2 btn btn-yellow">SignIn</button>
        </div>
       </nav>
       <div className="container">
        <div className="row">
            <div className=" ml-30 col-7 mt-30">
                <h2>Learn to code - for free.</h2>
                <h2 className="mt-4">Build projects.</h2>
                <h2 className="mt-4">Earn certifications.</h2>
                <h6 className="mt-5">since 2014,morethan 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies includes:</h6>
                <div className="flex">
                <img width="80rem" className="mt-3" height="67rem" src="https://logowik.com/content/uploads/images/t_640_apple.jpg" />
                    <img className="mt-4 ml-3" width="80rem" height="70rem" src="https://images.hindustantimes.com/img/2022/09/11/1600x900/gd_1662870108818_1662870128181_1662870128181.png" />
                    <img className="ml-5 mt-4" width="90rem" height="65rem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lN71xnkBArg2_0rfEFpfJ7zVeGGcx2TllJTGOXF6XA&s" />
                    <img width="100rem" className="ml-5" height="110rem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4g0eRyE1F7qCb6CDCXGYQJ_hm5n2BmPZcdQ&s" />
                    <img width="100rem" className="ml-5 mt-m" height="40rem" src="https://pngimg.com/d/amazon_PNG20.png" />
                </div>
                
                <button className="btn btn-yellow width mt-3 ml-8">Get started(it's free)</button>
                
            </div>
        </div>
       </div>
       
    </div>
}
export default Navbar