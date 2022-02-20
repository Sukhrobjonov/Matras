

import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import MahsulotlarTable from "../../Components/MahsulotlarTable/MahsulotlarTable";
import "../../App.css"

const MahsulotlarPage = () =>{
      return (
        <div className="homepage">
          <Header />
          <div className="homepage-site">
        <div className="homepage-left">
        <Dashboard  />
        </div>
            <div className="homepage-right" >
                
            
            <MahsulotlarTable />


            </div>

            </div>
        
    </div>
  )

    
}

export default MahsulotlarPage;