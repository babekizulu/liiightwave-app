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
        let qArr = [];
        const qNum = this.qNum;
        for (let i = 0; i < questions.length ; i++) {
            qArr.push(questions[i].question);
        }

        return qArr[qNum - 1];
    }
}

export default Empath;