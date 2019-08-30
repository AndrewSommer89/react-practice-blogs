import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Ayesha" 
                    timeAgo="Today at 11:00 am" 
                    message="Hello my name is Ayesha, I am Andrew's girlfriend!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Coco" 
                    timeAgo="Today at 12:00 pm" 
                    message="Hello my name is Coco I am Andrew's mom!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Stephen" 
                    timeAgo="Today at 1:00 pm" 
                    message="Hello my name is Steve I am Andrew's dad!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Tara" 
                    timeAgo="Today at 2:00 pm" 
                    message="Hello my name is Tara I am Andrew's sister!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Brendan" 
                    timeAgo="Today at 3:00 pm" 
                    message="Hello my name is Brendan I am Andrew's brother!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>   
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
