// 컴퓨터의 선택을 랜덤하게 생성
function getComputerChoice() {
    const randomNumber = Math.random(); // 0부터 1 사이의 무작위 실수 생성
    if (randomNumber < 0.33) {
        return "가위"; // 0~0.33 범위는 '가위'
    } else if (randomNumber < 0.66) {
        return "바위"; // 0.34~0.66 범위는 '바위'
    } else {
        return "보"; // 0.67~1 범위는 '보'
    }
}

// 사용자와 컴퓨터의 선택을 비교하여 승자 결정
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "비겼습니다!";
    } else if (
        (userChoice === "가위" && computerChoice === "보") ||
        (userChoice === "바위" && computerChoice === "가위") ||
        (userChoice === "보" && computerChoice === "바위")
    ) {
        return "당신이 이겼습니다!";
    } else {
        return "컴퓨터가 이겼습니다!";
    }
}

// 게임 시작
function playGame() {
    const userChoice = prompt("가위, 바위, 보 중 하나를 입력하세요: ");
    const computerChoice = getComputerChoice();
    console.log(`사용자: ${userChoice}, 컴퓨터: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

// 게임 실행
playGame();
