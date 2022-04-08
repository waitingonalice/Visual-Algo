import "./Result.css";
import { useNavigate, Link } from "react-router-dom";
import { GenerateButton } from "../components/Button";
import { FaHome } from "react-icons/fa";
import { ImLoop } from "react-icons/im";

const Result = ({ name, score, setScore, question, setQuestion }) => {
    let navigate = useNavigate();

    const numOfQuestions = () => {
        if (!question) {
            return 0;
        } else {
            return question.length;
        }
    };

    const handleQuit = () => {
        setScore();
        setQuestion();
    };

    return (
        <div className="result-container">
            <Link to="/quiz">
                <div className="quiz-title" onClick={handleQuit}>
                    Visual Algo Quiz
                </div>
            </Link>
            <div className="result-card">
                <div className="result-page-username">{name}, You Scored</div>
                <div className="result-page-result">
                    {score} out of {numOfQuestions()}
                </div>

                <div className="result-page-buttons">
                    <GenerateButton
                        leftIcon={<FaHome />}
                        handleClick={() => navigate("/")}
                    >
                        Back to home page
                    </GenerateButton>

                    <Link to="/quiz">
                        <GenerateButton
                            leftIcon={<ImLoop />}
                            handleClick={handleQuit}
                        >
                            Try Again
                        </GenerateButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Result;
