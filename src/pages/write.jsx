import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const  WritePage = () => {
  const [value, setValue] = useState('');

  console.log(value)
  return (
    <div className="write">
      <div className='add'>  
      <div className="content">
        <input type="text" placeholder='Tilte' />
        <div className="editorContainer">
        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
        </div>
        <div className="menupg">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status:</b> Draft
            </span>
            <input style={{display:"none"}} type="file" name='' id='file' />
            <label htmlFor="file">Upload Image</label>
            <div className="buttons">
              <button>Save as draft</button>
              <button>Update</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>

            <div className="cat">
            <input type="radio" name='cat' value="art" id='art'/>
            <label htmlFor="cat">Art</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat' value="science" id='science'/>
            <label htmlFor="science">Science</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat' value="technology" id='technology'/>
            <label htmlFor="technology">Technology</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat' value="Design" id='Design'/>
            <label htmlFor="Design">Design</label>
            </div>

            <div className="cat">
            <input type="radio" name='cat' value="food" id='food'/>
            <label htmlFor="food">Food</label>
          </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default WritePage