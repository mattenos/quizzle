import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client'

import { } from '../utils/queries';
import { ADD_QUESTION, ADD_QUIZ } from '../utils/mutations';

import Auth from '../utils/auth';

const Create = () => {

    const [titleText, setTitleText] = useState('');
    const [categoryText, setCategoryText] = useState('');

    const [addQuiz, { error }] = useMutation(ADD_QUIZ)
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!titleText && !categoryText) {
            alert('Must add ')
        }
        try {
            const data = await addQuiz({
                variables: {
                    name: titleText,
                    category: categoryText,
                    author: Auth.getProfile().data.username
                },
            });
            const path = (`/create/${data.data.addQuiz._id}`);
            navigate(path);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'titleText') {
            setTitleText(value)
        }
        if (name === 'categoryText') {
            setCategoryText(value);
        }
    };

    return (
        <div>
            <p>Enter name</p>
            <form
                className=''
                onSubmit={handleSubmit}
            >
                <div>
                    <textarea
                        name='titleText'
                        placeholder='Enter the Title of your Quiz '
                        value={titleText}
                        className=''
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div>
                    <textarea
                        name='categoryText'
                        placeholder='Enter the Category of your Quiz'
                        value={categoryText}
                        className=''
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div>
                    <button className='' type='submit'>
                        Add Name
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Create;
