import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/Table";
import "../../App.css"

const HomePage = () =>{
      return (
        <div className="homepage">
          <Header />
          <div className="homepage-site">
        <div className="homepage-left">
        <Dashboard  />
        </div>
            <div className="homepage-right" >
                
                <Table  />
            





            </div>

            </div>
        
    </div>
  )

    
}

export default HomePage;