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

        try {
            const data = await addQuiz({
                variables: {
                    name: titleText,
                    category: categoryText,
                    author: Auth.getProfile().data.username
                },
            });
            console.log(data.data.addQuiz._id);
            const path = (`/create/${data.data.addQuiz._id}`);
            console.log(path)
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
                        placeholder='Some title here 123'
                        value={titleText}
                        className=''
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div>
                    <textarea
                        name='categoryText'
                        placeholder='Some category here 123'
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
