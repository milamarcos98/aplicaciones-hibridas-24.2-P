import React, { useState } from 'react'

const Form3 = () => {
    const [page, setPage] = useState(0)
    const [formData, setFormData]  = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstname: "",
        lastname: "",
        nationality: "",
        other: ""
    })

    const FormTitles = ["Sing Up", "Personal Info", "Other"];

const PageDisplay = () => {
    if(page == 0){
        return <p>sign up page</p>
    }else if(page == 1){
        return <p>personal info page</p>
    }else{
        return <p>other page</p>
    }
}


  return (
    <div className='form'>
        <div className="progressbar">
            <div style={{width: page === 0 ? "33.3%": page === 1 ? "66.6%" : "100%"}}></div>
            <div className='form-container'>
                <div>
                    <h1>{FormTitles[page]} </h1>
                </div>
                <div>
                    {PageDisplay()}
                </div>
                <footer>
                    <button disabled={page==0}
                    onClick={() => {
                        setPage((current) => current - 1)
                    }}
                    >prev</button>
                    <button
                    onClick={() => {
                        if(page === FormTitles.length -1){
                            alert("form submitted")
                            console.log(formData)
                        }else{
                            setPage((current) => current + 1)
                        }
                    }}
                    >
                        {page == FormTitles.length -1 ? "submit" : "next"}
                    </button>
                </footer>
            </div>
        </div>
    </div>
  )
}

export default Form3