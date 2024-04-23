import React, { useState, useEffect } from 'react';
import './APagination.css';
// import { Pagination } from 'antd';


function APagination() {

    const [info, getInfo] = useState([]);
    const [Page, setPage] = useState(1);
    const PageLength = 10;
    const lastPg = Math.ceil(info.length / PageLength);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(info => info.json())
            .then(result => getInfo(result))
    }, [])

    const LastPostIndex = Page * PageLength;
    const FirstPostIndex = LastPostIndex - PageLength;
    const CurrentPage = info.slice(FirstPostIndex, LastPostIndex);

    const PrvPage = () => {
        setPage(Page > 1 ? Page - 1 : Page)
    };

    const NextPage = () => {
        setPage(Page < lastPg ? Page + 1 : Page)
    };

    const PageNumbers = () => {

        const Numbers = [];

        for (let i = 1; i <= lastPg; i++) {
            Numbers.push(i)
        }
        return Numbers;

    }

    return (
        <>
            <table className='table table-striped'>
                {CurrentPage.map((info) => (
                    <div key={info.id}>
                        <div className="card">
                            <div className="card-body">
                                <h6 className='User-id'>User Id : {info.userId}</h6>
                                <h6 className='id'>Id : {info.id}</h6>
                                <h5 className="card-title">Title : {info.title}</h5>
                                <p className="card-text">Body : {info.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </table>
            <div className='f-d' >
                <div className='btttn' style={{marginLeft:"15%" , marginRight:"15%"}} >
               
                

                {PageNumbers().map((Pagenumbers) => (
                    <button className='bttn' key={Pagenumbers} onClick={() => setPage(Pagenumbers)}>{Pagenumbers}</button>
                ))}     
                </div>

                <div style={{marginLeft:"42%"}}>

                <button className='bttn' onClick={PrvPage} disabled={Page === 1}> Previous </button>
                <span> {Page} </span>
                <button className='bttn' onClick={NextPage} disabled={Page === lastPg}> Next </button>
                </div>
            </div>
        </>
    );
}

export default APagination;
