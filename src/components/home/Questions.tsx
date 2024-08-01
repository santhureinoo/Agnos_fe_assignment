import React from "react";
import Question from "./Question";
import { QuestionProps } from "../../common/types";

interface Props {
    questions: QuestionProps[];
}

function Questions({ questions }: Props) {
    return <React.Fragment>
        {
            questions.map((quest, index) => {
                return < div className="px-4 text-center" key={index} >
                    <h1 className="font-bold text-lg">{quest.questionLabel}</h1>
                    <Question baseImg={quest.baseImg} highLightImgs={quest.highLightImgs}></Question>
                </div >
            })
        }
    </React.Fragment>

}

export default Questions;