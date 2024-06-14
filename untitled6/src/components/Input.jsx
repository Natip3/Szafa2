import {useState} from "react";


export const Input = ({
                          name, placeholder, type = 'text', value, onChange, onValidate = () => []
                      }) => {
    const [errors, setErrors] = useState([]);

    if (type === 'checkbox' || type === 'radio'){
        return(
            <div>Błędne użycie komponentu. Skorzystaj z komponentu<code>%lt;Checkbox/&lt</code></div>
        )
    }

    return(
        <>
            <input name={name} placeholder={placeholder} type={type} value={value}
                   onChange={(e) => {
                       setErrors(onValidate(e.target.value));
                       onChange(e.target.value);
                   }}
            />
            {errors.lenght > 0 && (
                <ul style={{color: 'red'}}>
                    {errors.map((errors, index) => (<li key={index}>{errors}</li> ))}
                </ul>
            )}
            <br/>
        </>
    );
}