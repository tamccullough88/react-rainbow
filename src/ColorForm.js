import { useState } from 'react';



function ColorForm(props) {
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addColor(input)
        setInput('')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={(e) => { setInput(e.target.value) }} placeHolder="set color" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default ColorForm