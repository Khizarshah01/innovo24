import React, { useState, useEffect } from 'react';
import './styles.css'; // Import CSS file
import quest from './questions.json';

const Test = () => {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showResult, setShowResult] = useState(false); // Define showResult state
    const resultElem = <div id="result"></div>;

    useEffect(() => {
        loadQuestions();
    }, []);

    const loadQuestions = () => {
                setQuestions(quest.questions);
    };

    const handleOptionChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const submitAnswer = () => {
        if (!userAnswer) {
            alert("Please select an option.");
            return;
        }
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (userAnswer.trim() === correctAnswer.trim()) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
        setUserAnswer('');
    };

    return (
        <div className="container1">
            <h1>IQ Test</h1>
            {questions.length > 0 && (
                <div>
                    <div id="question">{questions[currentQuestionIndex]?.question}</div>
                    <div id="options">
                        {questions[currentQuestionIndex]?.options.map((option, index) => (
                            <div className="option" key={index}>
                                <input
                                    type="radio"
                                    id={`option${index}`}
                                    name="option"
                                    value={option}
                                    checked={userAnswer === option}
                                    onChange={handleOptionChange}
                                />
                                <label htmlFor={`option${index}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                    <button id="submitBtn" onClick={submitAnswer}>Submit Answer</button>
                </div>
            )}
            {showResult && resultElem} {/* Render resultElem conditionally */}
        </div>
    );
};

export default Test;
