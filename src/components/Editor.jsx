import PropTypes from "prop-types"

export default function Editor({setText, initialText}) {
    
    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.code === "Tab") {
            event.preventDefault();
            const start = event.target.selectionStart;
            const end = event.target.selectionEnd;
                event.target.value = event.target.value.substring(0, start)
                + "    "
                + event.target.value.substring(end);
            event.target.selectionStart = end + 4;
            event.target.selectionEnd = end + 4;
        }
    }

    return (
        <textarea id="editor" label="editor" onChange={handleChange} onKeyDown={handleKeyDown} defaultValue={initialText}></textarea>
    )
}

Editor.propTypes = {
    setText: PropTypes.func.isRequired,
    initialText: PropTypes.string.isRequired,
}

