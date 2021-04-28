import InputField from './InputField.jsx'
import Row from './Row.jsx';
import RowColumn from './RowColumn.jsx';
import Card from './Card.jsx';

export default function FormDetail(props) {

    return (
        <div class="form-group">
              <Row>  
                <RowColumn size="4">
                    <InputField htmlFor="firstName" label="firstName" type="firstName" placeholder="enter firstName..." />
                    <InputField htmlFor="lastName" label="lastName" type="lastName" placeholder="enter lastName..." />
                    <InputField htmlFor="email" label="email" type="email" placeholder="enter email..." />
                    <InputField htmlFor="city" label="city" type="city" placeholder="enter city..." />
                </RowColumn>
               </Row> 
               <Row>  
                <RowColumn size="8">
                    &nbsp;
                </RowColumn>
               </Row> 
         
        </div>     
    )
}