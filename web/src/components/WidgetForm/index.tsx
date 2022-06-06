import { CloseButton } from "../CloseButton";
import { useState } from 'react';
import bugImageUrl from "../../images/bug.svg";
import ideaImageUrl from "../../images/idea.svg";
import otherImageUrl from "../../images/other.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

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
    const [feedbackSent, setFeedbackSent] = useState(false);


    function handleRestartFeedback(){
        setFeedbackSent(false)
        setFeedbackType(null)
    }



    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto text-white">

       

       { feedbackSent ? (
           <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>
       ) : (
            <>
                {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged=  {setFeedbackType}/>
                ) : (
                <FeedbackContentStep feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback} onFeedbackSent={() => setFeedbackSent(true)}
                />
                )}
            </>
       )}

        <footer className="text-xs text-neutral-400 rounded-md border-transparent flex-1 flex justify-center text-sn hove:bg-bg-brand-300 focus:outline">
            Feito amor com por Ronaldo Lucas 
        </footer>
        </div>
    )   
}