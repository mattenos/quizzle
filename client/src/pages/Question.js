import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_QUIZ } from '../utils/queries';

const Question = () => {
    const { quizId } = useParams();

    const { loading, data } = useQuery(QUERY_QUIZ, {
        variables: { quizId: quizId },
    });
    console.log(data);
    const quiz = data?.quiz;
    console.log(quiz);

    return (
        <div>
            Hello
        </div>
    )
}

export default Question;