import { useState } from "react"

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const submit = (event) => {event.preventDefault();};
    const validateEmail = () => {
        if(e.target?.value && e.target.value.match('@')){
            showNoValidEmail(false);
            setEmail(e.target.value)
        } else {
            showNoValidEmail(true);
        }
    }
    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={submit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email"
                        value={email}
                        onChange={() => validateEmail()}
                    />
                </label>
                <label>
                    Message:
                    <input 
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}