import Timer from './Timer';
import './Question.css'

type QuestionProps = {
    question: string, 
    options: Array<
        {
            text: string,
            correct: boolean
        }
    >,
    timeInSecs?: number,
    onOptionSelect: (option: QuestionProps['options'][0]) => void,
    onTimeout: () => void
}

const optionMark = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

function Question({ question, options, timeInSecs = 0, onOptionSelect, onTimeout }: QuestionProps) {


    return (
        <>
            <article>
                <h1>
                    { question }
                </h1>
                <ul>
                    {
                        options.map((option, i) => {
                            return (
                            <li className="" onClick={() => onOptionSelect(option)}>
                                <span className="mark">
                                    { optionMark[i] }
                                </span>
                                { option.text }
                            </li>

                            )
                        })
                    }
                </ul>
            </article>

            <Timer time={timeInSecs} onTimeout={onTimeout}/>
        </>
    )
}

export default Question;