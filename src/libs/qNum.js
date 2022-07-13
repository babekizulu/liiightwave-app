const qNum = () => {
    try {
        const answer = Math.floor(Math.random()) * 50;
        return answer;
    } catch (err) {
        console.log('Failed to generate random qNum');
    }
}

export default qNum;