"use client"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]
const QuillEditor = ({ value, setValue }) => {
    return (
        <ReactQuill 
            modules={modules}
            formats={formats}
            value={value}
            onChange={setValue}
            className="w-full h-[80%] overflow-y-scroll bg-white my-5 mt-3 z-20" 
            />
    )
}
export default QuillEditor