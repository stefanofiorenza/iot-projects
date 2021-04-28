export default function RowColumn(props){

    let size = (props.size > 12) ? 12 : props.size;
    let colClass=`col-${size}`

    return (
        <div className={colClass}>
            {props.children}    
        </div>
    );

};