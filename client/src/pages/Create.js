import React from 'react';
import { useQuery, useMutation } from '@apollo/client'

import { } from '../utils/queries';
import { ADD_QUESTION, ADD_QUIZ } from '../utils/mutations';

const Create = () => {

    const handleSubmit = async (e) => {
        e.preventDeafult();

        try{
            const data = await ADD_QUIZ({

            })
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <p>Enter name</p>
            <form
                className=''
                onSubmit={handleSubmit}
            >
                <button className='' type='submit'>
                    Add Name
                </button>
            </form>
        </div>
    );
};

export default Create;
