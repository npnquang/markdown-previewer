import PropTypes from "prop-types";
import parse from "html-react-parser";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import DOMPurify from "dompurify";

export default function Previewer({ text }) {
  const parsedHTML = DOMPurify.sanitize(marked.parse(text));
  const  display = parse(parsedHTML);

  return (
    <div id="preview">
      {display}
    </div>
  )
}

Previewer.propTypes = {
  text: PropTypes.string.isRequired
}