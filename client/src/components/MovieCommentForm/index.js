import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_MOVIE_COMMENT } from "../../utils/mutations";

function MovieCommentForm(id) {
    // get a productId from the detail page
    const productId = id.id;
    // set state for movieCommentText
    const [formState, setFormState] = useState({ movieCommentText:'' });
    const [characterCount, setCharacterCount] = useState(0);

    // create mutation to excute the ADD_MOVIE_COMMENT mutation
    const [addMovieComment] = useMutation(ADD_MOVIE_COMMENT);
    
    // create function that accepts the productId value as param and add the movieCommentText from the database
    const handleFormSubmit = async () => {
        try {
            await addMovieComment({
                variables: {
                    movieCommentText: formState.movieCommentText,
                    productId: productId
                }
            });

            // clear form value
            setFormState('');
            setCharacterCount(0);
                        
        } catch (e) {   
            console.error(e);
        }
    };
    
    const handleChange = event => {
        if (event.target.value.length <= 280) {
            const { name, value } = event.target;
            setFormState({
                ...formState,
                [name]: value
            });
            setCharacterCount(event.target.value.length);
        }
    };

    return (
        <div className="my-1">
            <p className={`count-form ${characterCount === 280 ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {/* {error && <span className="ml-2">Something went wrong...</span>} */}
            </p>
            <form>
                <textarea
                placeholder="Add a new comment"
                className="form-input"
                name="movieCommentText"
                onChange={handleChange}
                ></textarea>
                <button 
                type="submit"
                onClick={handleFormSubmit}
                >
                Submit
                </button>
            </form>
        </div>
    );
}

export default MovieCommentForm;