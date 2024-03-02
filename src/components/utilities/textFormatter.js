import React from "react";

const formatText = (text) => {
    const paragraphs = text.split('. ').map((paragraph, index, array) => {
        const isLastParagraph = index === array.length - 1;
        const margin = isLastParagraph ? 0 : 15; // Set margin to 20px for all paragraphs except the last one

        return (
            <p key={index} style={{ marginBottom: margin }}>
                {paragraph.trim() + (isLastParagraph ? '' : '.')}
            </p>
        );
    });

    return paragraphs;
};

const TextFormatter = ({ text }) => {
    return <div>{formatText(text)}</div>;
};

export default TextFormatter;