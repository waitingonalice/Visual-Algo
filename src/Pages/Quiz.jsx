import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GenerateButton } from "../components/Button";
import { FaHome } from "react-icons/fa";
import { Input, VStack, Select, Center } from "@chakra-ui/react";
import "./quiz.css";
import Categories from "../Data/data.js";
import ErrorMessage from "../components/ErrorMessage";

function Quiz({ name, setName, fetchQuestions }) {
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);
    const [difficulty, setDifficulty] = useState("");
    let navigate = useNavigate();

    const difficultyLevel = [
        {
            value: "easy",
            text: "Easy",
        },
        {
            value: "medium",
            text: "Medium",
        },
        {
            value: "hard",
            text: "Hard",
        },
    ];
    const handleSubmit = () => {
        if (!name || !category || !difficulty) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            navigate("/test");
        }
    };

    return (
        <div className="parent-quiz-container">
            <div className="quiz-title">Visual Algo Quiz</div>
            <Center>
                <div className="select-settings-card">
                    <VStack>
                        <Input
                            className="input"
                            placeholder="Enter Your Name"
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Select
                            placeholder="Select Topic"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {Categories.map((cat) => {
                                return (
                                    <option
                                        key={cat.categories}
                                        value={cat.value}
                                    >
                                        {cat.categories}
                                    </option>
                                );
                            })}
                        </Select>
                        <Select
                            placeholder="Select Difficulty"
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            {difficultyLevel.map((lvl) => {
                                return (
                                    <option key={lvl.value} value={lvl.value}>
                                        {lvl.text}{" "}
                                    </option>
                                );
                            })}
                        </Select>

                        {error && (
                            <ErrorMessage>
                                Fill in all relevant fields
                            </ErrorMessage>
                        )}

                        <div className="buttons">
                            <GenerateButton
                                leftIcon={<FaHome />}
                                handleClick={() => navigate("/")}
                            >
                                Back to home page
                            </GenerateButton>
                            <GenerateButton
                                handleClick={() => {
                                    handleSubmit();
                                }}
                            >
                                Proceed
                            </GenerateButton>
                        </div>
                    </VStack>
                </div>
            </Center>
        </div>
    );
}

export default Quiz;
