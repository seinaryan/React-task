import {React, useState} from "react";

function WordCount(){
    const [state, setState] = useState({wordCount: 0})
    const handleType = (e) => {
        const count = e.target.value;

        const countWords = (count) => {
            if (count.length === 0) {
              return 0;
            } else {
              count = count.replace(/(^\s*)|(\s*$)/gi,"");
              count = count.replace(/[ ]{2,}/gi," ");
              count = count.replace(/\n /,"\n");
              return count.split(' ').length; 
            }
          }
          setState({
            wordCount: countWords(count)
          });
    }
    return(
        <>
            <div className="word-count-cont">
                <h1>Word Counter</h1>
                <textarea placeholder="Type here" onChange={handleType}></textarea>
                <p>Word Count: {state.wordCount}</p>
            </div>
        </>    
    );
}

export default WordCount;