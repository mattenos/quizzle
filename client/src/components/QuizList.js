import React from 'react';
import { Link } from 'react-router-dom';

const QuizList = ({
    quizzes,
    name,
    category,
    author,
}) => {
    console.log(quizzes);

    if (!quizzes.length) {
        return <h3>No Quizzes Yet</h3>
    }

    return (
        <div>
            this will be a quiz list
            {quizzes.map((quiz) => (
                <div key={quiz._id} className='card mb-3'>
                    <div className='card-body bg-light p-2'>
                        <h4 className='card-header bg-primary text-light p-2 m-0'>Title:{quiz.name} Category:{quiz.category}</h4>
                        <Link
                        className='btn'
                        to={`/`}
                        >
                        Take this quiz    
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default QuizList;