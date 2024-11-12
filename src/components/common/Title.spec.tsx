import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Title 컴포넌트 테스트", () => {  
    it("랜더를 확인", () => {
        render(
            <BookStoreThemeProvider>
                <Title size = "large">제목</Title>
            </BookStoreThemeProvider>
        );

        expect(screen.getByText("제목")).toBeInTheDocument();
    });

    it("size props 적용", () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Title size = "large">제목</Title>
            </BookStoreThemeProvider>
        );

        expect(container?.firstChild).toHaveStyle0({fontSize : "2rem"});
    });

    it("color props 적용", () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Title size = "large" color = "primary">제목</Title>
            </BookStoreThemeProvider>
        );

        expect(container?.firstChild).toHaveStyle0({color : "brown"});
    });

});    
