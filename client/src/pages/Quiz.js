import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { QUERY_QUIZ } from '../utils/queries'

const Quiz = () => {
    let navigate = useNavigate();
    const { quizId } = useParams();
    const { loading, data } = useQuery(QUERY_QUIZ, {
        variables: { quizId: quizId }
    });
    const quizData = data?.quiz || [];

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let score = 0;
        const ans = quizData.questions;
        const cho = e.target;
        for (let i = 0; i < ans.length; i++) {
            if (cho[i].value === ans[i].answer) {
                score += 1;
            }
        }
        if(window.confirm(`You got ${score} out of ${ans.length}`) == true) {
            const path = (`/`);
            navigate(path);
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Name: {quizData.name}</h4>
                {quizData.questions.map((question) => (
                    <div key={question.answer}>
                        <label value={question.answer}>Question: {question.title}</label><br></br>
                        <select style={{width: '50%'}}>
                            {question.choices.map((choice) => (
                                <option key={choice} className=''>{choice}</option>

                            ))}
                        </select>
                    </div>

                ))}
                <button className='btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Quiz