/*
* Empath (Primary File)
* @Author: babekizulu
* @Desc: A library that generates important questions that we should ask 
*        ourselves or our loved ones everyday
*/
import Questions from "./Questions";

class Empath {
    constructor(qNum) {
        this.qNum = qNum;
    }

    empathize() {
        const questions = Questions;
        const qNum = this.qNum;
        try {
            for (let i = 0; i < questions.length ; i++) {
                if (i === qNum) {
                    return questions[i].question;
                }
            }
        } catch (err) {
            console.log('Failed to empathize');
        }
    }
}

export default Empath;