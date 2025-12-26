//['현대', '기아', '제네시스', '쉐보레', 'KGM', '르노코리아']

//양식 파일이 저장될 경로
Global.str_TempFolderPath = 'C:\\RPA\\' + Bot.ProjectName + '\\Temp\\';

//결과 파일이 저장될 경로
Global.str_OutputFolderPath = 'C:\\RPA\\' + Bot.ProjectName + '\\Output\\';

//양식 파일 이름
Global.str_TempFileName = '제조사별판매실적조회(Template).xlsx';

//폴더 생성
Directory.CreateDirectory(Global.str_TempFolderPath);
Directory.CreateDirectory(Global.str_OutputFolderPath);

//'조회년도와 월 입력 ex) 2024년 03월'
//현대, 기아, 제네시스, 쉐보레, KGM, 르노코리아
/*
변수 명
Exist_CorpName  //기존의 브랜드 명이 저장된 변수
I_CorpName  //추가로 조회할 브랜드를 입력받은 변수
I_Term  //사용자가 조회할 기간을 입력받은 변수
Chrome_Open  //크롬 열기 전용 핸들

*/


