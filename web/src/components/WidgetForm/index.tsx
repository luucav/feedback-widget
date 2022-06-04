import { CloseButton } from "../CloseButton";
import { useState } from 'react';
import bugImageUrl from "../../images/bug.svg";
import ideaImageUrl from "../../images/idea.svg";
import otherImageUrl from "../../images/other.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: "Imagem de uma lâmpada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: otherImageUrl,
            alt: "Imagem de um balão de pensamento nuvem"
        }
    }
};


export type FeedbackType = keyof typeof feedbackTypes





export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback(){
        setFeedbackType(null)
    }



    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto text-white">

       

        {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            ) : (
            <FeedbackContentStep feedbackType={feedbackType}
            onFeedbackRestartRequested={handleRestartFeedback} />
        )}

        <footer className="text-xs text-neutral-400">
            Feito amor com por Ronaldo Lucas 
        </footer>
        </div>
    )   
}