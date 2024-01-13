import PropTypes from "prop-types"

export default function Editor({setText, initialText}) {
    
    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <textarea id="editor" onChange={handleChange} defaultValue={initialText}></textarea>
    )
}

Editor.propTypes = {
    setText: PropTypes.func.isRequired,
    initialText: PropTypes.string.isRequired,
}

