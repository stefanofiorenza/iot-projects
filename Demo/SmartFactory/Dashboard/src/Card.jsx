export default function Card(props) {

    let icon= (props.icon) ? props.icon : '';
    let iconClass=`tim-icons ${icon} text-primary`

    return (
        <div className="card card-chart">
        <div className="card-header">
          <h5 className="card-category">{props.category}</h5>
            <h3 className="card-title">
               <i className={iconClass}></i> 
               {props.title}
            </h3>
        </div>
        <div className="card-body">
             {props.children}
        </div>
      </div>

    );
}