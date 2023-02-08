import React from "react";
import styles from "./Inicio.module.css";
import posts from "assets/json/posts.json";
import PostCard from "componentes/PostCard";

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {/* aqui ele mapeou o posts.json e pegou os titulos */}
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}