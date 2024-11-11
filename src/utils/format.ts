// 숫자를 입력받으면 세자리 마다 ,를 넣어주는 함수
export const formatNumber = (number:number): string => {
    return number.toLocaleString();
}