'use client'

import { TypeAnimation } from 'react-type-animation';

interface TypeAnimationProps {
    constantString?: string;
    typedStrings: string[];
}

const Typeanimation: React.FC<TypeAnimationProps> = ({ constantString, typedStrings }) => {
    return (
        <div className='font-[400] text-4xl md:text-6xl lg:text-8xl'>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    `${typedStrings[0]}`,
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    `${typedStrings[1]}`,
                    2000,
                    `${typedStrings[2]}`,
                    2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block', fontWeight: 'lighter', fontFamily: 'Manrope' }}
                repeat={Infinity}
            />
        </div>
    )
}

export default Typeanimation