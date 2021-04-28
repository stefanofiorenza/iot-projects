import SideBar from './SideBar.jsx'
import DefaultPage from './DefaultPage.jsx'
import NavigationBar from './NavigationBar.jsx'
import DashboardPage from './DashboardPage.jsx'
import GridDemoPage from './GridDemoPage.jsx'
import FormDetail from './FormDetail.jsx'
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
