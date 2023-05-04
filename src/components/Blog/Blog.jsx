import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto text-white '>
            <div className='bg-accent mt-5 p-5 mb-5'>
                <h2>Question - 1</h2>
                <span>Tell us the differences between uncontrolled and controlled components.</span>

                <article>
                    Ans:
                    The differences between controlled and uncontrolled components are significant, as they can affect the overall performance and functionality of a software application or system. In general, it is preferable to use controlled components wherever possible, as they offer greater control and predictability over the system's behavior. However, in some cases, uncontrolled components may be necessary or desirable, such as when working with external hardware devices or integrating with other applications or services.
                </article>
            </div>
            <div className='bg-accent mt-5 p-5 mb-5'>
                <h2>Question - 2</h2>
                <span>How to validate React props using PropTypes</span>

                <article>
                    Ans:

                    React PropTypes is a tool that allows you to validate the type of data being passed through props to React components. This helps to ensure that the data being used by a component is of the correct type and format, which can prevent errors and improve the overall reliability of your code.
                </article>
            </div>
            <div className='bg-accent mt-5 p-5 mb-5'>
                <h2>Question - 3</h2>
                <span>Tell us the difference between nodejs and express .</span>

                <article>
                    Ans:

                    Node.js and Express are two popular web development technologies that are often used together to build server-side web applications. While they are related and often used together, there are some key differences between the two.

                    Node.js is a runtime environment for executing JavaScript code outside of a web browser. It allows developers to use JavaScript for server-side programming, allowing them to build web applications entirely in JavaScript. Node.js provides a set of built-in modules that can be used to handle tasks such as file input/output, networking, and cryptography. Node.js is often used to build backend services and APIs, as well as real-time applications such as chat apps.
                </article>
            </div>
            <div className='bg-accent mt-5 p-5 mb-5'>
                <h2>Question - 4</h2>
                <span>What is a custom hook, and why will you create a custom hook?.</span>

                <article>
                    Ans:
                    In React, a custom hook is a reusable function that encapsulates a specific behavior and can be shared across multiple components. Custom hooks are a way to extract logic from components and reuse it across different parts of your application.

                    You might create a custom hook if you find yourself repeating the same code across multiple components, or if you need to manage state in a more complex way than is possible with standard React hooks. Custom hooks can help simplify your code and make it more reusable, while also making it easier to test and maintain.
                </article>
            </div>

        </div>
    );
};

export default Blog;