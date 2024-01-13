import PropTypes from "prop-types"

export default function Editor({setText}) {
    
    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <textarea id="editor" onChange={handleChange}></textarea>
    )
}

Editor.propTypes = {
    setText: PropTypes.func.isRequired
}

