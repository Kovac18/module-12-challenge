import { useState } from "react"

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const validateEmail = () => {
        if(email !== ''){
            if(email.match('@.')){
                return<p> </p>
            } else {
                return<p>Please enter a valid email</p>
            }
        } else {
            return<p>Please enter a email!</p>
        }
    }
    const validateName = () => {
        if (name === ''){
            return <p>Please enter a name!</p>
        } else {
            return <p> </p>
        }
    }
    const validateMessage = () => {
        if(message === ''){
            return<p>Please enter a message!</p>
        } else {
            return<p> </p>
        }
    }
    return (
        <div>
            <h1>Contact</h1>
            <form className="contactForm">
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="inputs"
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="inputs"
                    />
                </label>
                <label>
                    Message:
                    <input 
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="messageInput"
                    />
                </label>
                <button type="submit" className="button">Submit</button>
            </form>
            <div className="validate">
                {validateName()}
                {validateEmail()}
                {validateMessage()}
            </div>
        </div>
    )
}