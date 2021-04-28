import Row from './Row.jsx';
import RowColumn from './RowColumn.jsx';
import Card from './Card.jsx';




export default function DashboardKpi() {

    const imgInlineStyle={
        maxWidth: '15%',
        height: 'auto',
        verticalAlign:'bottom'
    }

    const imgInlineStyleMachines={
        maxWidth: '50%',
        height: 'auto',
        verticalAlign:'bottom'        
    }

    // marginLeft:'30px'
    return (
        <div>
          <Row>  
              <RowColumn size="4">
                  <Card title="In Use" category="Machine" >
                  <img src="./InUse.png"  alt=""  style={imgInlineStyle}/>
                      <span style={{fontSize: '30px', marginLeft:'20px'}} >50</span>                                                             
                  </Card>
              </RowColumn>                  
              <RowColumn size="4">
                  <Card title="Idle" category="Machine" >
                      <img src="./Idle.jpg"  alt=""  style={imgInlineStyle}/>
                      <span style={{fontSize: '30px', marginLeft:'20px'}} >50</span>    
                  </Card>
              </RowColumn>
              <RowColumn size="4">
                  <Card title="Down" category="Machine" >
                      <img src="./logo512.png"  alt=""  style={imgInlineStyle}/>
                      <span style={{fontSize: '30px', marginLeft:'20px'}} >50</span>                    
                  </Card>
              </RowColumn>
          </Row>
          <Row>  
              <RowColumn size="12">
                  <Card title="Temperature" category="category12" icon="icon-chart-bar-32" >
                    text in card 12
                  </Card>
              </RowColumn>    
          </Row>
          <Row>  
              <RowColumn size="8">
                  <Card title="title8" category="category8" >
                    text in card 8
                  </Card>
              </RowColumn>  
              <RowColumn size="4">
                  <Card title="title4" category="category4" >
                    text in card 4
                  </Card>
              </RowColumn>   
          </Row>
        </div>     
    )
}