import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_QUIZ } from '../utils/queries'

const Quiz = () => {
    const { quizId } = useParams();
    const { loading, data } = useQuery(QUERY_QUIZ, {
        variables: { quizId: quizId }
    });
    const quizData = data?.quiz || [];

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e)
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Name: {quizData.name}</h4>
                {quizData.questions.map((question) => (
                    <div key={question._id}>
                        {console.log(question)}
                        <label value={question.answer}>Question: {question.title}</label>
                        <select>
                            {question.choices.map((choice) => (
                                <option key={choice}>{choice}</option>

                            ))}
                        </select>
                    </div>

                ))}
                <button className='' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Quiz