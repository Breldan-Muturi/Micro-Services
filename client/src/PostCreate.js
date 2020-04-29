import React, {useState} from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => { //Prevent browser from submiting the form.
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    };//CORS error as the client is on 3000 and we try to make a request to posts on 4000

    return <div>
        <form onSubmit={ onSubmit }>
            <div className = "form-group">
                <label>Title</label>
                <input 
                    value = {title}
                    onChange= { e => setTitle(e.target.value)}
                    className="form-control"
                />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>        
    </div>;
};
