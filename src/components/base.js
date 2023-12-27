import { useNavigate } from "react-router-dom";

function Base({children}){

    let navigate = useNavigate();

    function naviagteToLogin(){
      localStorage.removeItem("myUSer");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("userId");
      localStorage.removeItem("myUser");
      navigate("/login");

    }
    return (
        <div className="base-div">
            <nav class="navbar navbar-expand-lg bg-secondary nav-bar">
        <div class="container-fluid d-flex justify-content-space-between">
         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": 100 + "px" }}>
              <li class="nav-item">
                <button className='btn bg-warning ms-3 mt-3 mb-3 bt' onClick={()=>navigate("/available-bikes")}>All  products</button>
              </li>
              <li class="nav-item">
                <button className='btn bg-warning ms-3 mt-3 mb-3 bt' onClick={()=>navigate("/bookings")}>My booking</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout-btn">
          <button className="btn bg-danger text-white" onClick={naviagteToLogin}>Logout</button>
        </div>
        
      </nav>
      <p className="username">Welcome {localStorage.getItem("myUser")}</p>
      <div className="child">
        {children}
      </div>
  
        </div>
    )
}
export default Base;
