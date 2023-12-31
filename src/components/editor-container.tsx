import { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import * as Style from "../style.ts";

const TOLLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["blockquote", "code-block"],
  ["clean"],
];

export default function EditorContainer() {
  const wrapperRef = useCallback((wrapper: HTMLDivElement) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, { theme: "snow", modules: { toolbar: TOLLBAR_OPTIONS } });
  }, []);

  return <Style.Editor ref={wrapperRef} />;
}
