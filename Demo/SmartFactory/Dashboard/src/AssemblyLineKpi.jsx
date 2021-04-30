import Row from './Row.jsx';
import RowColumn from './RowColumn.jsx';
import Card from './Card.jsx';
import React, { useState,useEffect } from 'react';
import mqtt from 'mqtt';


let kpiDataInitialState ={
    "data":[
        {
        "name":"T65",
        "input":100,
        "assemblies":70,
        "scrap":30,
        "temp":'30',
        "vibr":'0.02',
        "kW":'177',
        "working":'55',
        "idle":'35',
        "down":'10'
        },{
        "name":"G679",  
        "input":70,
        "assemblies":60,
        "scrap":10,
        "temp":'20',
        "vibr":'0.01',
        "kW":'150',
        "working":'45',
        "idle":'45',
        "down":'10'
        },{
        "name":"T881",  
        "input":50,
        "assemblies":45,
        "scrap":5,
        "temp":'60',
        "vibr":'0.5',
        "kW":'191',
        "working":'75',
        "idle":'25',
        "down":'0'
        },{
        "name":"B904",
        "input":50,
        "assemblies":45,
        "scrap":5,
        "temp":'48',
        "vibr":'0.08',
        "kW":'155',
        "working":'75',
        "idle":'20',
        "down":'5'
    }  ]      
};



export default function AssemblyLineKpi() {  
 
 
    var note;
    const [kpiData,setKpiMockData]=useState(kpiDataInitialState)
    const [temperature,setTemperature]=useState("40")


    var options = {          
        clientId: 'b0908853' 	
    };
    var client  = mqtt.connect('mqtt://localhost:8822', options);
  
    client.subscribe('engine/temperature');

    client.on('message', function (topic, message) {
        note = message.toString();       
        setTemperature(note);
        console.log(note);
       
    });
    

    const imgInlineStyle={
        maxWidth: '10%',
        height: 'auto',
        marginLeft:'12px',
        verticalAlign:'bottom'
    }

    const imgInlineStyleMachines={
        maxWidth: '15%',
        height: 'auto',
        verticalAlign:'bottom'        
    }

    // marginLeft:'30px'
    return (
        <div style={{paddingLeft:'25px', paddingRight:'20px'}}>
          <Row>  
              <RowColumn size="3">
                  <Card title="T65" category="MACHINE" >
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>I:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px',color: ' #e9ecef'}} >{kpiData.data[0].input}</span>  
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>A:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px', color: '#2dce89'}} >{kpiData.data[0].assemblies}</span>  
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>S:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px',color: '#f5365c'}} >{kpiData.data[0].scrap}</span>      
                  </Card>
              </RowColumn>                  
              <RowColumn size="3">
                  <Card title="B904" category="MACHINE" >
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>I:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px',color: ' #e9ecef'}} >{kpiData.data[1].input}</span>  
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>A:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px', color: '#2dce89'}} >{kpiData.data[1].assemblies}</span>  
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>S:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px',color: '#f5365c'}} >{kpiData.data[1].scrap}</span>      
                  </Card>
              </RowColumn>
              <RowColumn size="3">
                  <Card title="T881" category="MACHINE" >
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>I:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px',color: ' #e9ecef'}} >{kpiData.data[2].input}</span>  
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>A:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px', color: '#2dce89'}} >{kpiData.data[2].assemblies}</span>  
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>S:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px',color: '#f5365c'}} >{kpiData.data[2].scrap}</span>                       
                  </Card>
              </RowColumn>
              <RowColumn size="3">
                  <Card title="B904" category="MACHINE" >
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>I:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px'}} >{kpiData.data[3].input}</span>  
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>A:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px', color: '#2dce89'}} >{kpiData.data[3].assemblies}</span>  
                    <span style={{fontSize: '30px', marginLeft:'25px',color: '#9A9A9A'}}>S:</span>
                    <span style={{fontSize: '30px', marginLeft:'5px',color: '#f5365c'}} >{kpiData.data[3].scrap}</span>                         
                  </Card>
              </RowColumn>
          </Row>
          <Row>  
            <RowColumn size="3">
                <Card title="Health" category="METRICS" >                  
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>T:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}} >{temperature}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>&#8451;</span>

                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>V:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}} >{kpiData.data[0].vibr}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>g</span>
                   
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>E:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#11cdef'}} >{kpiData.data[0].kW}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>Kw/H</span> 
                </Card>
              </RowColumn>               
              <RowColumn size="3">
                  <Card title="Health" category="METRICS" >
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>T:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}} >{kpiData.data[1].temp}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>&#8451;</span>

                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>V:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}} >{kpiData.data[1].vibr}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>g</span>
                   
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>E:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#11cdef'}} >{kpiData.data[1].kW}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>Kw/H</span>                                                              
                  </Card>
              </RowColumn>  
              <RowColumn size="3">
                  <Card title="Health" category="METRICS" >
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>T:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}} >{kpiData.data[2].temp}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>&#8451;</span>

                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>V:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}} >{kpiData.data[2].vibr}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>g</span>
                   
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>E:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#11cdef'}} >{kpiData.data[2].kW}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>Kw/H</span>                                                           
                  </Card>
              </RowColumn>  
              <RowColumn size="3">
                  <Card title="Health" category="METRICS" >
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>T:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}} >{kpiData.data[3].temp}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>&#8451;</span>

                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>V:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}} >{kpiData.data[3].vibr}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>g</span>
                   
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>E:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#11cdef'}} >{kpiData.data[3].kW}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>Kw/H</span>                                                              
                  </Card>
              </RowColumn>  
          </Row>
          <Row>  
              <RowColumn size="3">
                  <Card title="Availability" category="METRICS" >
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#2dce89'}}>U:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}}>{kpiData.data[0].working}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#2dce89'}}>%</span>


                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>I:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#9A9A9A'}}>{kpiData.data[0].idle}</span> 
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>%</span>

                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#f5365c'}}>D:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#f5365c'}}>{kpiData.data[0].down}</span> 
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#f5365c'}}>%</span>
                                                             
                  </Card>
              </RowColumn>                  
              <RowColumn size="3">
                <Card title="Availability" category="METRICS" >
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#2dce89'}}>U:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}}>{kpiData.data[1].working}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#2dce89'}}>%</span>


                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>I:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#9A9A9A'}}>{kpiData.data[1].idle}</span> 
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>%</span>

                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#f5365c'}}>D:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#f5365c'}}>{kpiData.data[1].down}</span> 
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#f5365c'}}>%</span>
                                                             
                  </Card>
              </RowColumn>
              <RowColumn size="3">
              <Card title="Availability" category="METRICS" >
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#2dce89'}}>U:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}}>{kpiData.data[2].working}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#2dce89'}}>%</span>


                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>I:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#9A9A9A'}}>{kpiData.data[2].idle}</span> 
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>%</span>

                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#f5365c'}}>D:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#f5365c'}}>{kpiData.data[2].down}</span> 
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#f5365c'}}>%</span>
                                                             
                  </Card>
              </RowColumn>
              <RowColumn size="3">
              <Card title="Availability" category="METRICS" >
                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#2dce89'}}>U:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#2dce89'}}>{kpiData.data[3].working}</span>  
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#2dce89'}}>%</span>


                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#9A9A9A'}}>I:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#9A9A9A'}}>{kpiData.data[3].idle}</span> 
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#9A9A9A'}}>%</span>

                    <span style={{fontSize: '24px', marginLeft:'25px',color: '#f5365c'}}>D:</span>
                    <span style={{fontSize: '24px', marginLeft:'5px',color: '#f5365c'}}>{kpiData.data[3].down}</span> 
                    <span style={{fontSize: '20px', marginLeft:'2px',color: '#f5365c'}}>%</span>
                                                             
                  </Card>
              </RowColumn>
          </Row>         
        </div>     
    )
}

   // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setKpiMockData(kpiMockData());
    //     }, 1000);
    // });


   // useEffect(() => {
    //   setTimeout(() => {
    //          client.end();
    //          console.log("Closed Connection")
    //     }, 10000);
    //  });

    // const kpiMockData = () => {
//     return kpiDataInitialState;
// }