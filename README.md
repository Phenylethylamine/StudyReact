### 2019. 04. 04
.idea/workspace.xml가 github에 올라가있다.  
Webstorm에서 프로젝트와 관련된 파일만 Git으로 관리하고,  
어느 컴퓨터에서든 .idea는 예외가 되도록 해야할것 같다.  

Webstorm 설정에서 .idea/*을 추적하지 않도록 했고,  
Product Root의 파일들을 선택해 Push하니 Github에서 .idea 디렉토리가 사라졌다.   
Github쪽에는 영향이 없었어야할거 같은데 저절로 지워지니 좀 걱정이 된다.  
원인은 모르겠으나 의도한대로 되었으니 일단은 넘어간다.

webstorm에서 node_module 디렉토리가 갈색으로 표시되어있다.  
github에 원하는 소스만 들어가있으니까 최종적으로 push하고 다시 fork 해봐야겠다.

### 2019. 03. 22
Node.js 설치, Yarn 설치  
React 는 Webstorm 을 이용해 설치했다  
F:\work\webstorm\react190322>npm start  
참고 사이트 : https://velopert.com/3629