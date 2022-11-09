import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20 space-y-6'>
            <h1 className='text-2xl font-bold text-center my-4'>Blogs</h1>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  w-full sm:w-1/2 m-auto ">
                <div className="collapse-title text-xl font-medium">
                    Difference between sql and nosql
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> <span className='text-2xl text-red-500'>SQL</span> is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). <br /> <span className='text-2xl text-red'>NoSQL</span> is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  w-full sm:w-1/2 m-auto">
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> <span className='text-2xl text-red-500'>JWT</span>  JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  w-full sm:w-1/2 m-auto">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  w-full sm:w-1/2  m-auto">
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;