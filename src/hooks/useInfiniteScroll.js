/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { MAX_IMAGES, IMAGES_INCREMENT } from "../constants";
import { debounce } from "../utils";

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(IMAGES_INCREMENT);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 500);

  useEffect(() => {
    if (!loading) return;

    if (count + IMAGES_INCREMENT >= MAX_IMAGES) {
      setCount(MAX_IMAGES);
    } else {
      setCount(count + IMAGES_INCREMENT);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { count };
};
