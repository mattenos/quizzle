import React from 'react';
import { useQuery } from '@apollo/client';
import QuizList from '../components/QuizList';
import { QUERY_QUIZZES } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_QUIZZES);
    const quizzes = data?.quizzes || [];

    return (

        <main>
            <div>
                Hello World
            </div>

            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <QuizList
                    quizzes={quizzes}
                    />
                )}
            </div>
        </main>

    );
};

export default Home;