import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_QUIZ } from '../utils/queries';
import { ADD_QUESTION } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';

import '../styles/question.css';

const Question = () => {
    const [addQuestion, { error }] = useMutation(ADD_QUESTION);
    const { quizId } = useParams();

    const { loading, data } = useQuery(QUERY_QUIZ, {
        variables: { quizId: quizId },
    });
    const quiz = data?.quiz;
    let navigate = useNavigate();
    const [questionText, setQuestionText] = useState('');
    const [answerText, setAnswerText] = useState('');
    const [choiceA, setChoiceA] = useState('');
    const [choiceB, setChoiceB] = useState('');
    const [choiceC, setChoiceC] = useState('');
    const [choiceD, setChoiceD] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const finish = e.nativeEvent.submitter.name;
        if (finish == 'finish') {
            return handleFinish();
        }
        if (!answerText || !questionText) {
            return alert('Fill in the fields')
        }
        if (answerText !== choiceA && answerText !== choiceB && answerText !== choiceC && answerText !== choiceD) {
            return alert('Answer must match one of the Options')
        }
        if (e.target.name === 'add') {
            console.log('yes')
        }
        try {
            const { data } = await addQuestion({
                variables: {
                    title: questionText,
                    answer: answerText,
                    choices: [
                        choiceA,
                        choiceB,
                        choiceC,
                        choiceD,
                    ],
                    quizId: quiz._id,
                }
            })
            setQuestionText('');
            setAnswerText('');
            setChoiceA('');
            setChoiceB('');
            setChoiceC('');
            setChoiceD('');
            console.log(data)
        } catch (err) {
            console.error(err);
        }
    }

    const handleFinish = () => {
        const path = (`/`);
        navigate(path);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'questionText') {
            setQuestionText(value)
        }
        if (name === 'choiceA') {
            setChoiceA(value)
        }
        if (name === 'choiceB') {
            setChoiceB(value)
        }
        if (name === 'choiceC') {
            setChoiceC(value)
        }
        if (name === 'choiceD') {
            setChoiceD(value)
        }
        if (name === 'answerText') {
            setAnswerText(value)
        }
    }

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div className='title'>
                Title: {quiz.name}
            </div>
            <div className='category'>
                Category: {quiz.category}
            </div>

            <p>Enter questions</p>
            <form
                className=''
                onSubmit={handleSubmit}
            >
                <div>
                    <textarea
                        name='questionText'
                        placeholder='What is the Question'
                        value={questionText}
                        className=''
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <textarea
                        name='choiceA'
                        placeholder='Answer Option'
                        value={choiceA}
                        className=''
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <textarea
                        name='choiceB'
                        placeholder='Answer Option'
                        value={choiceB}
                        className=''
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <textarea
                        name='choiceC'
                        placeholder='Answer Option'
                        value={choiceC}
                        className=''
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <textarea
                        name='choiceD'
                        placeholder='Answer Option'
                        value={choiceD}
                        className=''
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <textarea
                        name='answerText'
                        placeholder='What is the Answer'
                        value={answerText}
                        className=''
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <button className='add-ques' type='submit' name='add'>
                        Add Question
                    </button>
                    <button className='done' type='submit' name='finish'>
                        Finish
                    </button>
                </div>

            </form>

        </div>
    )
}

export default Question;