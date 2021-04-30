import NavigationBar from './NavigationBar.jsx'
import AssemblyLineKpi from './AssemblyLineKpi.jsx'


function DashboardMain() {
  return (
    <div className="wrapper">
  
      <div  >
          <NavigationBar />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="content" >  
            <AssemblyLineKpi />
          </div> 
      </div>   
  </div>
  );
}

export default DashboardMain;
