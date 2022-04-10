import React from "react";

//From: https://github.com/piyush-eon/Reactjs-Quiz-App/blob/master/src/components/ErrorMessage/ErrorMessage.js
function ErrorMessage({ children }) {
    return (
        <div
            style={{
                width: "100%",
                padding: 10,
                marginBottom: 10,
                borderRadius: 4,
                backgroundColor: "orangered",
                textAlign: "center",
                color: "white",
                textTransform: "capitalize",
            }}
        >
            {children}
        </div>
    );
}

export default ErrorMessage;
