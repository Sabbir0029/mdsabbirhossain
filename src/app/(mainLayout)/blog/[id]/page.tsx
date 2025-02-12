import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Md. Sabbir Hossain || Single Blog",
    description: "My Single Blogs Here",
  };

const page = () => {
    return (
        <div>
            <h1>Single Blog</h1>
        </div>
    );
};

export default page;