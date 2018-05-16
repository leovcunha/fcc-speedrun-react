import React from "react";

export default function ContactForm() {
    return (
        <form className="col-sm-8">
            <h5>Make contact with me:</h5>
            <br/>
            <div className="form-group">
                <label for="FormControlInput1">Email address</label>
                <input type="email" className="form-control" id="FormControlInput1" placeholder="name@example.com"/>
            </div>

            <div className="form-group">
                <label for="FormControlTextarea1">Message</label>
                <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

