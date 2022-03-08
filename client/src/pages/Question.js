import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_QUIZ } from '../utils/queries';

const Question = () => {
    const { quizId } = useParams();

    const { loading, data } = useQuery(QUERY_QUIZ, {
        variables: { quizId: quizId },
    });
    const quiz = data?.quiz;
    console.log(quiz);

    return (
        <div>
            {quiz.name}
            {quiz.category}
        </div>
    )
}

export default Question;