import Row from './Row.jsx';
import RowColumn from './RowColumn.jsx';
import Card from './Card.jsx';

export default function GridDemoPage() {
    return (
        <div>
          <Row>  
              <RowColumn size="4">
                  <Card title="title4.1" category="category4.1" icon="icon-bank" >
                      text in card 4.1
                  </Card>
              </RowColumn>                  
              <RowColumn size="4">
                  <Card title="title4.2" category="category4.2" icon="icon-bulb-63" >
                      text in card 4.2
                  </Card>
              </RowColumn>
              <RowColumn size="4">
                  <Card title="title4.3" category="category4.3" icon="icon-chart-pie-36" >
                    text in card 4.3
                  </Card>
              </RowColumn>
          </Row>
          <Row>  
              <RowColumn size="12">
                  <Card title="title12" category="category12" >
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