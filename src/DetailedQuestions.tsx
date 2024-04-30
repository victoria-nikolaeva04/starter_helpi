import React, { useState } from "react";
import './DetailedQuestions.css';
import paw_button  from "./images/cat-paw-button.png";


import { Button, Container, Row , Col, Form } from "react-bootstrap";

export function DetailedQuestions(): JSX.Element {
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({}); // Dictionary implementation in state, question -> selected answer
    const [progress, setProgress] = useState<number>(0); // Progress bar state

    const questions = [
        {
            question: "Imagine you are assigned to a project team in which you will be creating a marketing campaign for a new product launch. Which aspect of the project would you most enjoy focusing on?",
            possibleAnswers: ['Crafting a compelling message and storytelling to communicate the product\'s unique value, helping it resonate and connect with the target audience, such as in a commercial.', 
            'Collaborating with creative teams to design visually appealing graphics, videos, and other multimedia content that capture attention and drive engagement.', 
            'Providing strategic direction and guidance to team members, ensuring alignment with overall campaign objectives and messaging consistency across different channels.', 
            'Conducting market research and consumer behavior analysis to identify key insights and opportunities, informing campaign strategies and tactics for maximum impact.']
        },
        {
            question: "Describe the overarching goals, values, and aspirations that resonate with you. Consider the impact you aim to make and the principles that guide your actions and decisions.",
            possibleAnswers: ['I aspire to be a leader in my field, innovating and driving positive change, inspiring others to make a difference in the world. I feel fulfilled when I manage others.', 'I am driven by a desire to make an impact on society, addressing social and environmental challenges and creating sustainable future for all. I want my work to be utilized throughout years to come.', 
            'I am committed to personal and professional growth, continuously challenging myself to learn, striving for excellence and continuous improvement.', 'I prioritize work-life balance and well-being, valuing fulfillment, happiness, and harmony in all aspects of my life. My life does not have to revolve around my career.']
        },
        {
            question: "Envisioning your ideal work environment, describe the specific attributes, culture, and values that would foster your professional growth and fulfillment. Consider elements such as organizational structure, leadership style, communication channels, and opportunities for autonomy and collaboration.",
            possibleAnswers: ['I thrive in dynamic environments that embrace change and innovation, where adaptability and forward-thinking are encouraged, and where leadership empowers employees to take ownership of their work. ', 'I value a culture of inclusivity and diversity, where all voices are heard and respected, and where collaboration and teamwork are foundational principles.',
             'I seek a structured and organized work environment with clearly defined roles and responsibilities, where expectations are clear, ensuring that efforts are recognized and rewarded accordingly.', 'I prioritize flexibility and independence in my work, seeking opportunities for self-directed learning and creative expression, balanced with opportunities for collaboration and mentorship that facilitate growth and development.']
        },
        {
            question: "Imagine you have the opportunity to design your ideal physical work environment. Which setting would you find most conducive to your productivity and well-being?",
            possibleAnswers: ['An outdoor workspace surrounded by nature, offering fresh air, natural light, and opportunities for relaxation and rejuvenation. I enjoy working on outdoor tasks and activities.', 'An open-floor-plan office with collaborative workspaces and communal areas, encouraging interaction, creativity, and spontaneous idea-sharing among team members. ', 'A traditional office setting with private workstations or cubicles, providing quiet and focused environments for individual concentration and productivity.',
             'A flexible workspace with a mix of private offices, open areas, and breakout rooms, accommodating diverse work styles and preferences while fostering collaboration and teamwork.']
        },
        {
            question: "Imagine you're presented with an opportunity to pursue further education or training to advance your career. Which option would you be most inclined to choose?",
            possibleAnswers: ['Enrolling in specialized courses or workshops to deepen your expertise and skills in a specific area relevant to your field, or putting time into learning a new skill.', 'Pursuing a degree or certification program that offers a broader understanding of various disciplines, providing versatility and adaptability in your career.',
             'Participating in leadership development programs or executive coaching to enhance your management and decision-making abilities, building my leadership skills.', 'Engaging in experiential learning opportunities such as internships or apprenticeships to gain hands-on experience and practical knowledge in real-world settings.']
        },
        {
            question: "Reflect on your preferred communication style and interpersonal interactions in a professional setting. Which approach resonates most with you?",
            possibleAnswers: ['Engaging in open and transparent communication, fostering trust and mutual respect by sharing thoughts, ideas, and feedback openly with colleagues and stakeholders.', 'Cultivating empathy and active listening skills, seeking to understand other perspectives and experiences to build meaningful connections and collaboration.',
             'Demonstrating assertiveness and confidence in expressing opinions and advocating for ideas, contributing to constructive dialogue and decision-making processes.', 'Adapting communication styles to suit different audiences and situations, effectively conveying information and ideas through verbal, written, and non-verbal cues as needed.']
        },
        {
            question: "Imagine you're offered two job opportunities: one with a well-established company known for its stability and benefits, and the other with a startup known for its innovation and risk-taking culture. Which factors would weigh most heavily in your decision-making process?",
            possibleAnswers: ['Stability and job security, prioritizing a steady income and established benefits package to support financial stability and long-term career growth.', 'Innovation and growth potential, valuing the opportunity to contribute to groundbreaking projects and shape the future of a dynamic and rapidly evolving industry.', 'Company culture and values, seeking alignment with your personal beliefs and principles, and prioritizing a supportive and inclusive work environment that fosters collaboration and creativity.',
             'Career advancement opportunities, considering factors such as growth trajectory, leadership development programs, and potential for skill development and upward mobility within the organization.']
        }
    ];

    const handleAnswerSelection = (answer: string) => { 
        setSelectedAnswers({ ...selectedAnswers, [`Question${questionIndex + 1}`]: answer });
        const answeredQuestionsCount = Object.keys(selectedAnswers).length + 1;
        const newProgress = (answeredQuestionsCount / questions.length) * 100;
        setProgress(newProgress);
    };

    return (
        <div style={{ width: '100%' }}>
        
        <img className="Cat-header" alt="Cat header"></img>

        <div>
            <Container className="Question-row">
                <Row className="Horizontal-questions">
                    {questions.map((_, index) => (
                        <Col
                            style={{ display: 'flex', justifyContent: 'center' }}
                            className={`Question-${index + 1}`}
                            xs={2}
                            key={index}
                        >
                            <Button
                                onClick={() => setQuestionIndex(index)}
                                style={{
                                    backgroundImage: `url(${paw_button})`, 
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '75px',
                                    height: '75px',
                                    borderColor: '#FFA3B1',
                                    backgroundColor: '#FFA3B1',
                                    fontSize: '24px',
                                    color: 'black',
                                    borderRadius: '50%',
                                }}
                            >
                                {index + 1}
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
        
        <div className="Progress-bar">
            <div className="update-progress-bar" style={{ width: `${progress}%` }}>
                <p> </p>
            </div>
        </div>

        <div className="Question-textbox">
            <p className="Question-textbox-text">{questions[questionIndex].question}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Container className = "Answer-row" style={{ width: '75%', justifyContent: 'center', display: 'flex'}}>
                <Row style={{ display: 'flex', height: 'auto', width: '100%' }}>
                    {questions[questionIndex].possibleAnswers.slice(0, 2).map((possibleAnswer, j) => (
                    <Col key={j} style={{ width: '50%'}}>
                        <Form.Check
                            type="radio"
                            name="selectedAnswer"
                            id={`answer-${j+2}`}
                            label={<span style={{ display: 'inline-block', textAlign: 'center', padding: '10px', backgroundColor: selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer ? '#f5afaf' : 'transparent' }}>{possibleAnswer}</span>}
                            className="custom-radio"
                            onChange={() => handleAnswerSelection(possibleAnswer)}
                            checked={selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer}
                        />
                </Col>
                ))}
            </Row>
        </Container>
    </div>


    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Container className = "Answer-row" style={{ width: '75%', justifyContent: 'center', display: 'flex'}}>
            <Row style={{ display: 'flex', height: 'auto', width: '100%' }}>
                {questions[questionIndex].possibleAnswers.slice(2, 4).map((possibleAnswer, j) => (
                <Col key={j} style={{ width: '50%', marginLeft: "1px", marginRight: "1px" }}>
                    <Form.Check
                        type="radio"
                        name="selectedAnswer"
                        id={`answer-${j}`}
                        label={<span style={{ display: 'inline-block', textAlign: 'center', padding: '10px', backgroundColor: selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer ? '#f5afaf' : 'transparent' }}>{possibleAnswer}</span>}
                        className="custom-radio"
                        onChange={() => handleAnswerSelection(possibleAnswer)}
                        checked={selectedAnswers[`Question${questionIndex + 1}`] === possibleAnswer}
                    />
                </Col>
                ))}
            </Row>
        </Container>
    </div>
            
    <div style={{textAlign: 'center', marginBottom: '50px', marginTop: '20px' }}>
        <Button>Get Answers</Button>
    </div>
</div>   
    );
}

export default DetailedQuestions;
