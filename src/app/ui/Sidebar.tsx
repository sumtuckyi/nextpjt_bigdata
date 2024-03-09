const SideBar: React.FC = () => {
	return (
		<div style={{
			position: 'fixed', // 고정 위치
			right: 0, // 오른쪽에 고정
			top: '4rem', // 상단에서 시작
			bottom: 0, // 하단까지 뻗음
			width: '300px', 
			color: 'white',
			backgroundColor: '#A8AAAC', // 배경색
			overflowY: 'auto', // 내용이 많아질 경우 스크롤
			padding: '20px', // 내부 패딩
			zIndex: 1000,
		}}>
			<a>
				<img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
			</a>
			<h2>사이드바 제목</h2>
			<p>내용...</p>
		</div>
	);
};

export default SideBar;
