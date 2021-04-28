export default function InputField(props) {

    return (
        <div>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input type={props.type} class="form-control" placeholder={props.placeholder} />
        </div>        
    )
}