import { router } from "json-server";
import Link from "next/link";
import React, { useEffect } from "react";

const NotFountPage = () => {
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ой...</h1>
      <h2>Такой страницы здесь нет!</h2>
      <p>
        Перехожу на
        <Link href="/">
          <a>главную страницу</a>
        </Link>
        через 3 секунды...
      </p>
    </div>
  );
};

export default NotFountPage;
