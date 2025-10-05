import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ArrowLeft } from "lucide-react";

// Components
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "A beginner's guide to setting up and building your first React application",
    date: "May 13, 2025",
    readTime: "10 min read",
    image: "/b1.png",
    content: `
      <h2>Introduction to React</h2>
      <p>React is a JavaScript library for building user interfaces, particularly single-page applications where UI updates are frequent and dynamic. Developed and maintained by Facebook (now Meta), React has become one of the most popular frontend libraries in the web development ecosystem.</p>
      
      <h2>Prerequisites</h2>
      <p>Before getting started with React, you should have a basic understanding of:</p>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript fundamentals and ES6+ features</li>
        <li>Node.js and npm (Node Package Manager)</li>
      </ul>
      
      <h2>Setting Up Your First React Project</h2>
      <p>The easiest way to create a new React application is by using Create React App, a command-line tool that sets up a new React project with a good default configuration.</p>
      
      <pre><code>npx create-react-app my-react-app
cd my-react-app
npm start</code></pre>
      
      <p>This will create a new React application named "my-react-app" and start a development server. You can view your application by opening <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> in your browser.</p>
      
      <h2>Understanding React Components</h2>
      <p>Components are the building blocks of any React application. A component is a reusable piece of UI that can manage its own state and render itself based on that state.</p>
      
      <p>There are two types of components in React:</p>
      <ol>
        <li><strong>Function Components:</strong> These are JavaScript functions that accept props as arguments and return React elements.</li>
        <li><strong>Class Components:</strong> These are ES6 classes that extend React.Component and implement a render method.</li>
      </ol>
      
      <p>Here's an example of a simple function component:</p>
      
      <pre><code>function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}</code></pre>
      
      <h2>Working with JSX</h2>
      <p>JSX is a syntax extension to JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files, making your component structure more readable.</p>
      
      <pre><code>const element = <h1>Hello, world!</h1>;</code></pre>
      
      <p>This JSX code is transformed into regular JavaScript by build tools like Babel before being sent to the browser.</p>
      
      <h2>Managing State</h2>
      <p>State is a JavaScript object that stores component data that may change over time. When the state of a component changes, React re-renders the component to reflect the new state.</p>
      
      <p>In function components, you can use the useState hook to manage state:</p>
      
      <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
      
      <h2>Handling Events</h2>
      <p>React events are named using camelCase and are passed as functions rather than strings. Here's an example of handling a button click event:</p>
      
      <pre><code>function Button() {
  function handleClick() {
    alert('Button was clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}</code></pre>
      
      <h2>Next Steps</h2>
      <p>Now that you have a basic understanding of React, here are some topics to explore next:</p>
      <ul>
        <li>React Router for navigation</li>
        <li>State management with Context API or Redux</li>
        <li>Hooks like useEffect, useContext, useReducer</li>
        <li>Working with APIs and fetching data</li>
        <li>React testing with Jest and React Testing Library</li>
      </ul>
      
      <p>Happy coding with React!</p>
    `,
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    description:
      "Exploring advanced type patterns to make your TypeScript code more robust",
    date: "May 12, 2025",
    readTime: "12 min read",
    image: "/b2.png",
    content: `
    <h2>Introduction</h2>
    <p>TypeScript isn't just about type safety — it's a powerful tool for designing more expressive, maintainable, and scalable codebases. Once you're comfortable with the basics, learning advanced TypeScript patterns can unlock new levels of productivity and clarity.</p>

    <h2>Mapped Types</h2>
    <p>Mapped types allow you to transform properties of a type in a reusable way. They're essential for creating flexible APIs and utilities.</p>
    <pre><code>type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};</code></pre>
    <p>This pattern is used to create a new type where all properties of <code>T</code> are read-only. It's how TypeScript's built-in <code>Readonly</code> utility works under the hood.</p>

    <h2>Conditional Types</h2>
    <p>Conditional types help build logic into your type definitions. This makes your types more dynamic and expressive.</p>
    <pre><code>type IsString&lt;T&gt; = T extends string ? true : false;

type A = IsString&lt;'hello'&gt;; // true
type B = IsString&lt;123&gt;;     // false</code></pre>

    <p>This pattern is useful when building libraries or APIs where behavior depends on the types of inputs.</p>

    <h2>Template Literal Types</h2>
    <p>Introduced in TypeScript 4.1, these allow string manipulation at the type level — great for creating constrained strings or generating new types.</p>
    <pre><code>type EventName&lt;T extends string&gt; = \`on\${Capitalize&lt;T&gt;}\`;

type ClickEvent = EventName&lt;'click'&gt;; // "onClick"</code></pre>

    <p>This is particularly useful in frameworks and libraries that rely on naming conventions.</p>

    <h2>Discriminated Unions</h2>
    <p>This pattern improves type narrowing for union types and helps model finite state machines or API responses.</p>
    <pre><code>type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
  }
}</code></pre>

    <p>Using a common <code>kind</code> property enables TypeScript to infer the correct branch in a <code>switch</code> or <code>if</code> block.</p>

    <h2>Utility Types and Custom Helpers</h2>
    <p>TypeScript includes many built-in utility types like <code>Partial</code>, <code>Pick</code>, <code>Omit</code>, and <code>ReturnType</code>. You can also create your own to capture repetitive patterns.</p>
    <pre><code>type NonNullableKeys&lt;T&gt; = {
  [K in keyof T]-?: null extends T[K] ? never : K
}[keyof T];</code></pre>

    <p>This type extracts keys from a type that cannot be <code>null</code> — useful for runtime validation or strict data modeling.</p>

    <h2>Recursive Types</h2>
    <p>Recursive types let you define deeply nested structures such as trees, JSON, or ASTs.</p>
    <pre><code>type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [key: string]: Json };</code></pre>

    <p>This pattern is widely used in data validation, parsers, and configuration management.</p>

    <h2>Fluent APIs with this Typing</h2>
    <p>To build fluent interfaces or method chaining, TypeScript allows typing with <code>this</code>.</p>
    <pre><code>class Builder {
  private result = '';

  add(text: string): this {
    this.result += text;
    return this;
  }

  build(): string {
    return this.result;
  }
}

const b = new Builder().add('Hello ').add('World!').build();</code></pre>

    <p>This improves developer experience by keeping method chains type-safe and predictable.</p>

    <h2>Next Steps</h2>
    <p>Once you're comfortable with these patterns, explore:</p>
    <ul>
      <li>Advanced inference with infer keyword</li>
      <li>Creating reusable type-safe APIs</li>
      <li>Type-safe builder patterns</li>
      <li>Integrating with third-party JS libraries using declaration merging</li>
      <li>Building your own types-first utility libraries</li>
    </ul>

    <p>Mastering these TypeScript patterns can significantly elevate the quality and maintainability of your code. Happy typing!</p>
  `,
  },
  {
    id: 3,
    title: "Building with Next.js",
    description:
      "Learn how to create high-performance web applications with Next.js",
    date: "May 10, 2025",
    readTime: "11 min read",
    image: "/b3.png",
    content: `
    <h2>Introduction to Next.js</h2>
    <p>Next.js is a powerful React framework that enables developers to build fast, scalable, and SEO-friendly web applications. Built by Vercel, it provides features like server-side rendering (SSR), static site generation (SSG), and API routes out of the box.</p>

    <h2>Why Choose Next.js?</h2>
    <ul>
      <li><strong>Server-Side Rendering (SSR):</strong> Render pages on the server to improve SEO and performance.</li>
      <li><strong>Static Site Generation (SSG):</strong> Pre-render pages at build time for fast loading.</li>
      <li><strong>API Routes:</strong> Build backend functionality without a separate server.</li>
      <li><strong>File-based Routing:</strong> Intuitive and simple routing using the file system.</li>
      <li><strong>Full TypeScript Support:</strong> Built-in support for TypeScript for scalable apps.</li>
    </ul>

    <h2>Getting Started</h2>
    <p>To create a new Next.js app, run the following command:</p>
    <pre><code>npx create-next-app@latest my-next-app
cd my-next-app
npm run dev</code></pre>
    <p>This sets up a new Next.js project and starts the development server at <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a>.</p>

    <h2>Understanding Pages and Routing</h2>
    <p>Next.js uses a file-based routing system. Every file inside the <code>pages/</code> directory becomes a route:</p>
    <ul>
      <li><code>pages/index.tsx</code> ➝ <code>/</code></li>
      <li><code>pages/about.tsx</code> ➝ <code>/about</code></li>
    </ul>

    <p>Dynamic routes can be created using square brackets:</p>
    <pre><code>// pages/blog/[slug].tsx
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return &lt;h1&gt;Post: {slug}&lt;/h1&gt;;
}</code></pre>

    <h2>Rendering Strategies</h2>
    <p>Next.js supports multiple rendering methods:</p>
    <ul>
      <li><strong>SSG (Static Site Generation):</strong> For fast, cacheable content.</li>
      <li><strong>SSR (Server Side Rendering):</strong> For up-to-date dynamic content.</li>
      <li><strong>ISR (Incremental Static Regeneration):</strong> Mix of both — static pages that can be revalidated.</li>
    </ul>

    <pre><code>// getStaticProps for SSG
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}</code></pre>

    <pre><code>// getServerSideProps for SSR
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}</code></pre>

    <h2>Styling in Next.js</h2>
    <p>Next.js supports various styling solutions:</p>
    <ul>
      <li><code>CSS Modules</code> (scoped styles)</li>
      <li><code>Tailwind CSS</code> (utility-first CSS)</li>
      <li><code>Styled Components</code>, Emotion, and other CSS-in-JS libraries</li>
    </ul>

    <pre><code>// Using CSS Modules
import styles from './Home.module.css';

export default function Home() {
  return &lt;div className={styles.container}&gt;Welcome!&lt;/div&gt;;
}</code></pre>

    <h2>API Routes</h2>
    <p>Create backend functionality using API routes without a separate server:</p>
    <pre><code>// pages/api/hello.ts
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, world!' });
}</code></pre>

    <h2>Deploying with Vercel</h2>
    <p>Next.js is built by Vercel, making deployment seamless. Just push your code to GitHub and import your project into Vercel for automatic deployments and preview URLs.</p>

    <h2>Next Steps</h2>
    <ul>
      <li>Learn about Middleware for edge functions</li>
      <li>Optimize performance with Image and Font components</li>
      <li>Use environment variables for config management</li>
      <li>Implement authentication and role-based access</li>
      <li>Explore App Router and React Server Components</li>
    </ul>

    <p>Next.js empowers developers to build robust, production-grade applications with minimal setup. Whether you're building a landing page or a complex web app, Next.js provides the right tools for the job.</p>

    <p>Happy building with Next.js!</p>
  `,
  },
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || "1");

  const post = blogPosts.find((post) => post.id === postId) || blogPosts[0];

  // Function to enhance code blocks with proper styling
  const formatContent = (content: string) => {
    // Parse the content and format code blocks
    const formattedContent = content.replace(
      /<pre><code>([\s\S]*?)<\/code><\/pre>/g,
      (codeContent) => {
        return `
          <div class="bg-muted rounded-md my-4 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-2 bg-muted border-b">
              <div class="flex items-center">
                <Code size={16} class="mr-2" />
                <span class="text-sm font-medium">Code</span>
              </div>
            </div>
            <pre class="p-4 overflow-x-auto"><code>${codeContent}</code></pre>
          </div>
        `;
      }
    );
    return formattedContent;
  };

  return (
    <main className="pt-28 pb-16 px-10">
      <div className="container">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          <SectionTitle title={post.title} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default BlogPost;
