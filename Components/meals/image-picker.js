'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import classes from './image-picker.module.css'

export default function ImagePicker({ label,name }) {
    const [imagePicker, setImagePicker] = useState(null)
    const imageInput = useRef()

    function handleClik(){
        imageInput.current.click();
    }
    function handleImageChange(event){
        const file = event.target.files[0];

        if(!file){
          setImagePicker(null); 
          return   
        }

       const fileReader =  new FileReader();
        fileReader.onload = () =>{
            setImagePicker(fileReader.result)
        }
       fileReader.readAsDataURL(file)
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
    
        <div className={classes.controls}>
        <div className={classes.preview}>
            {!imagePicker && <p>no image  selected</p>}
            {imagePicker && <Image  src={imagePicker} alt="user selected" fill/>}
            </div>
            <input
            className={classes.input}
            type='file'
            id='image'
            name={name}
            accept='image/png,image/jpeg' 
            ref={imageInput}
            onChange={handleImageChange}
            required
                />
                <button className={classes.button} type='button' onClick={handleClik}>Pick an Image</button>
        </div>

    </div>
}