import React from 'react'
export default function
TeamForm(props) {
const { values, update, submit } = props

const onChange = evt => {
 const name = evt.target.name;
 const value = evt.target.value;
 
 update(name, value);
}

const onSubmit = evt => {

    evt.preventDefault();


submit();


}

return (
    <form className='form-container' onSubmit={onSubmit}>
        <div className="team-inputs">
            <label>Name
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME KID!"
                  onChange={onChange}
                  value={values.name}
                  />
            </label>
            <label>Favorite Color
                
                <select value={values.favoriteColor} name="favoriteColor" onChange={onChange}>
                    <option>---What...is your favorite color---</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="red">red</option>
                    <option value="yello">yellow</option>
                    <option value="orange">orange</option>
                    <option value="chartreuse">chartreuse</option>
    
                    
                </select>

            </label>
            <div className='submit'>
                <button>submit</button>
            </div>
        </div>
    </form>
)
}