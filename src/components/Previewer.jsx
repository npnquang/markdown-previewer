import PropTypes from "prop-types";
import parse from "html-react-parser";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

export default function Previewer({ text }) {
  
  
  return (
    <div id="preview">
      {parse(marked.parse(text))}
    </div>
  )
}

Previewer.propTypes = {
  text: PropTypes.string.isRequired
}