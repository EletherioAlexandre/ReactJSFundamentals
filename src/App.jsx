import { useState } from "react";
import { Post } from "./Post";
import "./global.css"
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Jax Teller"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis excepturi nihil neque delectus similique amet adipisci eligendi ad autem deleniti dolorum odit quasi, magnam atque expedita eum, minima nisi rem!"
      />
      <Post
        author="Alex Poatan"
        content="An excellent fighter!"
      />
    </div>
  );
}
