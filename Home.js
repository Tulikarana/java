import React from 'react'

export default function () {
    return (
        <div>
            <h1>hello</h1>
            <h1>Welcome to mypage</h1>
            <hr/>
            <fieldset>
                <legend>Content</legend>

                <a href="#about">About Me:</a>
                <br />
                <a href="#images">MyImages:</a>
            </fieldset>
            <h2 id='about'>About me:</h2>
            <p>Lorem ipsum dolor st amet consectetur adipisicing elit. Maxime ab at libero sunt odit totam doloribus culpa aperiam officia amet explicabo, a optio sed aliquam nobis nihil mollitia modi eligendi?dicta.</p>

            <h2 id='images'> My Images:</h2>
            <img src="https://www.espacebuzz.com/assets/ckeditor/2014/aug/1012/originale/740_espacebuzz53fdeaaf69070.jpg" alt="" />

        </div>
    )
}


