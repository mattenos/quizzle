import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/quizList.css';

const QuizList = ({ quizzes }) => {
    console.log(quizzes);

    if (!quizzes.length) {
        return <h3>No Quizzes Yet</h3>
    }

    return (
        <div>
            {quizzes.slice(0).reverse().map((quiz) => (
                <div key={quiz._id} className='card border'>
                    <div className='card-body bg-light'>
                        <h4 className='card-header bg-primary text-light'>Title: {quiz.name} <br></br>
                            Category: {quiz.category} <br></br>
                            Created by: {quiz.author}</h4>
                        <Link
                        id="take-quiz" className='btn'
                        to={`/quiz/${quiz._id}`}
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