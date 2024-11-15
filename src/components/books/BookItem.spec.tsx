import React from "react";
import { getByText, render } from "@testing-library/react";
import BookItem from "./BookItem";
import { BookStoreThemeProvider } from "../../context/themeContext";

const dummyBook = {
    id: 1,
  title: "Dummy Book",
  img: 5,
  category_id: 1,
  summary: "Dummy Summary",
  author: "Dummy Author",
  price: 10000,
  likes: 1,
  form: "paperback",
  isbn: "Dummy ISBN",
  detail: "Dummy Detail",
  pages: 100,
  contents: "Dummy Contents",
  pub_date: "2021-01-01",
}
describe("BookItem", () => {
    it("랜더 여부", () => {
        const { getByText } = render(
            <BookStoreThemeProvider>
                <BookItem book = {dummyBook} />
            </BookStoreThemeProvider>
        );
        expect (getByText(dummyBook.title)).toBeInTheDocument();
    })
})