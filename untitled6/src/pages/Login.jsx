import {useState} from "react";
import {Input} from "../components/Input.jsx";
import {Checkbox} from "../components/Checkbox.jsx";



const users = [
    {
        firstName: "Natalia",
        lastName: "Grubba",
        email: "Nat@gmail.com",
        password: "Alaska",
        repassword: "Alaska",
    },
];

export const Login = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [agreement, setAgreement] = useState("");


    const handleLogin = (e) => {
        e.preventDefault();

        users.forEach((e)=>{
            const user = e;
            if (user.email===email && user.password === password) {
                localStorage.setItem('firstName', user.firstName);
                localStorage.setItem('lastName', user.lastName);
                localStorage.setItem('password', user.password);
                window.location.replace('/zalogowanypoprawnie');
            }
            else if(!localStorage.getItem('username')) {
                alert("Złe dane");
                setEmail("");
                setPassword("");
            }
        })

    };



    return (
        <>
            <h1>Logowanie</h1>
            <form name={'Logowanie'} onSubmit={(e) => {
                e.preventDefault();
            }}>
                <Input name={'firstName'} placeholder={'Imię'} value={firstName} onChange={setfirstName}>
                    onValidate={(v) => {
                    const err = [];
                    if (v === '') {
                        err.push('Pole nie może być puste');
                    }
                    if (v.lenght < 3) {
                        err.push('Pole musi mieć conajmniej 3 znaki');
                    }
                    if (v[0] !== (v[0] ?? '').toUpperCase()) {
                        err.push('Pole musi zaczynać się wielką literą');
                    }
                    return err;
                }}</Input>
                <Input name={'lastName'} placeholder={'Nazwisko'} value={lastName} onChange={setlastName}>
                    onValidate={(v) => {
                    const err = [];
                    if (v === 0) {
                        err.push('Pole nie może być puste');
                    }
                    return err;
                }}</Input>
                <Input name={"email"} placeholder={'Email'} value={email} onChange={setEmail}>
                    onValidate = {() => []}>
                </Input>
                <Input name={"password"} placeholder={'Hasło'} type={password} value={repassword}
                       onChange={setRepassword} onValidate={(v) => {
                    const err = [];
                    if (v !== repassword) {
                        err.push('Hasła muszą być takie same');
                    }
                    return err;
                }}/>
                <Input name={"repassword"} placeholder={"Powtórz hasło"} type={password} value={password}
                       onChange={setPassword}
                       onValidate={(v) => {
                           const err = [];
                           if (v !== password) {
                               err.push("Hasła muszą być takie same");
                           }
                           return err;
                       }}/>
                <Checkbox name={"check"} label={"Zgoda"} type={'checkbox'} value={agreement} onChange={setAgreement}
                          required/>

                <br/>

                <button type={'submit'} onClick={handleLogin}>Zaloguj</button>
            </form>
            <pre style={{border: '2px dotted lightgray', padding: '0.5rem'}}>

                    Imię: {firstName}<br/>
                    Nazwisko: {lastName}<br/>
                    Email: {email}<br/>
                    Hasło: {password}<br/>
                    Powtórz hasło: {repassword}<br/>
                    Zgoda: {agreement ? 'Tak' : 'Nie'}<br/>
            </pre>
            
        </>

    )

}
