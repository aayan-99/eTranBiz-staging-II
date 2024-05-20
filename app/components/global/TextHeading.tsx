import React from 'react'

interface TextHeadingProps {
    headingText: string | any;
    textPosition?: string;
    styles?: string;
}

const TextHeading: React.FC<TextHeadingProps> = ({ textPosition, headingText, styles }) => {
  return (
    <h1 className={`font-[700] text-[20px] uppercase text-[color:var(--primary-teal)] ${styles} text-${textPosition}`}>{headingText}</h1>
  )
}

export default TextHeading