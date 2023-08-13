import React from 'react'
import { useDataStore } from '../store/store';
function Aside(props) {
    const { topics } = useDataStore();
    const index = props.index; //외부에서 props로 json데이터를 받아옴
    const topiclist = () => {
        const arr = [];
        for (let topic of topics) {
            arr.push(
                <li className="topic-item">
                    <p>{topic}</p>
                </li>
            );
        }
        return arr
    }
    return (
        <aside className="container" id="aside">
            <div className="topic-title">
                <h3>Today Hot Topics</h3>
            </div>
            <div className="topic-list">
                <ul className='rank'>
                    {topiclist()}
                </ul>
            </div>
        </aside>
    )
}

export default Aside;