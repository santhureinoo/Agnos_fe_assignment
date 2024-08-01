import React from "react";
import Question from "./Question";
import { QuestionProps } from "../../common/types";

interface Props {
    questions: QuestionProps[];
}

function Questions({ questions }: Props) {
    return <div className="p-8">
        <h1 className="font-bold lg:text-2xl md:text-lg text-md text-center">PLEASE SELECT YOUR PROBLEM AREA</h1>
        {
            questions.map((quest, index) => {
                return < div className="px-4 text-center" key={index} >
                    <Question baseImg={quest.baseImg} highLightImgs={quest.highLightImgs}></Question>
                </div >
            })
        }
    </div>

}

export default Questions;