import {useState} from "react";

export const Checkbox = ({
                             name, label, type = 'checkbox', value, onChange, required = false
                         }) => {
    const [errors, setErrors] = useState([]);

    if (type === 'chackbox' && type !== 'radio') {
        return (
            <div>Błędne użycie komponentu. Skorzystaj z komponentu<code>%lt;Checkbox/&lt</code></div>
        )
    }

    return(
        <>
            <label>
                <input name={name} type={type} value={value}
                       onChange={(e) => {
                           setErrors([]);
                           if (required && e.target.checked === false) {
                               setErrors(['Pole jest wymagane']);
                           }
                           onChange(e.target.checked);
                       }}
                />
                {label}
            </label>
            {errors.length > 0 && (
                <ul style={{color: 'red'}}>
                    {errors.map((errors, index) => (<li key ={index} > {errors}</li>))}
                </ul>
            )}
            <br/>
        </>
    );
}