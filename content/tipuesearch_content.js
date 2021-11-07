var tipuesearch = {"pages": [{'title': '首頁', 'text': '40923109 \n github倉儲: https://github.com/CYC40923109/cad2021_hw \n github網站: https://cyc40923109.github.io/cad2021_hw/content/index.html \n \n', 'tags': '', 'url': '首頁.html'}, {'title': '英文單字', 'text': '', 'tags': '', 'url': '英文單字.html'}, {'title': '程式語言', 'text': '\n \n', 'tags': '', 'url': '程式語言.html'}, {'title': 'github倉儲', 'text': '編輯及推送倉儲(初始步驟) \n cd tmp \n git clone --recurse-submodules 倉儲網址.git (將資料複製進新建倉儲) \n pip install pyopenssl (安裝pyopenssl的指令) \n acp "xx" (xx處自行發揮，此步為試推) \n 請告訴我你是誰(電腦所發出的提問，以下為定位步驟) \n git config --global user.email "學校email" \n git config --global user.name "github名字" \n 確認倉儲(這段電腦會給，複製後再修改即可，分兩段來) \n 回到github>settings>developer settings>personal acess tokens (設定倉儲密碼) \n 調成無限期，以下選項皆勾選，複製生成的亂碼(密碼) \n 接著到cad2021>portablekmol_base>data>tmp>cad2021_hw>.git \n 找到config，將它拖進編輯器裡，找到origin下的url，在github前貼上剛複製的token再加上一個@，儲存，即完成倉儲設定。 \n 再推送即可成功。 \n \n 編輯及推送倉儲 \n cd tmp \n cd cad2021_hw \n cms \n acp "xx" \n \n', 'tags': '', 'url': 'github倉儲.html'}, {'title': '歷史紀錄', 'text': '10/17 "w1" 測試推送，與倉儲連結 \n 10/18 "note" 更改版面，新增內容(首頁、程式語言、歷史紀錄) \n 10/18 "change" 首頁及課程大綱調換，改變About的字形，歷史紀錄未填寫，待補 \n 10/18 "history" 補充歷史紀錄 \n 10/25 "note" 新增內容(筆記、HW、歷史紀錄) \n 10/31 "note" 新增內容(輔助小工具、zoomit、歷史紀錄) \n 11/1 "note" 新增內容(zoomit、歷史紀錄) \n 11/1 "note" 新增內容(筆記、歷史紀錄)，轉為靜態時失敗一次，可能有出符號錯誤 \n 11/2 "note and change" 新增內容(Inventor、NX12、Wink、歷史紀錄、英文單字)，更改版面(zoomit、github倉儲) \n 11/3 "note" 新增內容(Wink、歷史紀錄) \n 11/4 "HW" 新增內容(Wink、歷史紀錄) \n 11/7 "HW" 新增內容(Wink、歷史紀錄) \n \n \n \n \n', 'tags': '', 'url': '歷史紀錄.html'}, {'title': '課程大綱', 'text': 'About \n 本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 你的學號 \n 網站倉儲:  https://github.com/mdecourse/cad2021_hw \n 網站連結:  https://mde.tw/cad2021_hw \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': '課程大綱.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'CAD1 繪圖', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 緣起說明與介紹 \n 請不要直接從找到的 CAD1 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n CAD1 安裝配置 \n CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 套件下載安裝與配置 \n CAD1 下載安裝與配置流程 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 下載安裝與配置 」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n 由於安裝配置 Solidworks 時必須使用 nfu 的 vpn, 因此各學員必須按照 說明 , 完成本學期的 vpn 使用申請. \n Solidworks 分別提供 2017 與 2020 版本: \n SW2017 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n SW2020 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 版本: \n NX12 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 可攜版本下載 \xa0(必須先登入 @gm 帳號後才能下載) \n Inventor: \n 請在校園網路, 使用 nfu vpn 或設定系上代理主機, 就可以從  https://2019wcm.blogspot.com/2019/07/autodesk-inventor-professional.html  嘗試下載 autodesk.iso 後安裝 Inventor Professional 版本. \n Onshape: \n 至  https://www.onshape.com/en/  申請帳號後使用. \n Solvespace: \n 至  https://solvespace.com  下載或從  https://github.com/solvespace/solvespace  下載原始碼, 以可攜程式系統自行編譯後使用. \n CAD1 操作流程 \n CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 零組件繪圖操作流程影片 (Youtube) \n CAD1 零組件繪圖教學影片 (Wink) \n CAD1 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD1 繪圖.html'}, {'title': 'CAD2 繪圖', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 緣起說明與介紹 \n 請不要直接從找到的 CAD2 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n CAD2 安裝配置 \n CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 套件下載安裝與配置 \n CAD2 套件下載安裝與配置影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  套件下載安裝與配置影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n CAD2 操作流程 \n CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 零組件繪圖操作流程影片 (Youtube) \n CAD2 零組件繪圖教學影片 (Wink) \n CAD2 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 繪圖.html'}, {'title': '運動場景', 'text': 'CAD1: \n CAD1 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD1 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD1 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n CAD2: \n CAD2 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD2 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD2 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': '筆記', 'text': '', 'tags': '', 'url': '筆記.html'}, {'title': 'w1', 'text': '9/27 \n (配合防疫，線上課程) \n 主要分配為:inventer、NX(老師只接受教育版) \n \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '10/4 \n \n \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '10/11 \n (國慶放假) \n \n \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '10/18 \n wink \n \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '10/25 \n (電腦整修，線上課程) \n \n \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '11/1 \n \n \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'Iventor', 'text': '\n \n \n \n', 'tags': '', 'url': 'Iventor.html'}, {'title': 'NX12', 'text': '\n \n \n', 'tags': '', 'url': 'NX12.html'}, {'title': 'Wink', 'text': '安裝流程 \n 上網搜尋"debugmode wink" \n 點選官方網站進行下載( https://www.debugmode.com/wink/ ) \n 不安裝，按右鍵找到7-zip，解壓縮 \n 接著把初始檔名改成"wink"後，放入data或隨身碟裡 \n 點開檔案，於$R0內找到啟動檔即可使用 \n \n \n 使用教學 \n 老師建議每部影片 五分鐘 即可，容量不可太大 \n \n 新建一個檔案，左上角File裡的New \n 錄製時是使用全螢幕，錄製完後再依照視窗調整大小 \n 擷取螢幕:Pause \n 定時擷取:Shift+Pause \n 輸入驅動的擷取:Alt+Pause \n 按"ok"後跳轉至下一頁，再按左下角的"Minimize To Tray" \n 程式會縮進右下角的系統列中，找到圖示按右鍵，點選"Restore Capture Windows"，即可再次開啟視窗。 \n \n 1.系統列 \n 右下角系統列點開可找到wink的圖示，點擊右鍵 \n \n "Capture Now"是擷取單張的圖 \n "Start Timed Capture"則是錄製，整理進程式後會變成很多單張的圖讓你進行編輯 \n 在錄製結束時記得按"Finish Capture"，才會進入wink的編輯介面 \n \n 2.內建小鍵盤(純粹小想法，這個方法其實還是需要點開wink圖示，所以還是乖乖用滑鼠就好) \n 筆記型電腦的鍵盤沒有pause按鍵，對沒有外接鍵盤的同學較不友善，不過我們可以使用電腦本身內建的"螢幕小鍵盤" \n 左下角的搜尋處輸入"OSK"即可搜尋到，點開後即可使用 \n 縮到最小後放在你認為不會擋路的地方(選字時它會擋住你的選字列，就連你打開右下角系統列時也會被小鍵盤擋住) \n 我們需要的就是小鍵盤區域的"暫停"鍵(外接鍵盤則是於鍵盤右上角，有個Pause Break鍵) \n \n \n \n \n \n', 'tags': '', 'url': 'Wink.html'}, {'title': '輔助小工具', 'text': '', 'tags': '', 'url': '輔助小工具.html'}, {'title': 'zoomit', 'text': '安裝流程 \n 輸入"zoomit 下載"進行搜尋 \n 進入官網下載( https://docs.microsoft.com/zh-tw/sysinternals/downloads/zoomit ) \n 將檔案解壓縮 \n 64位元的作業系統選擇"zoomit64.exe"，32位元則選擇"zoomit.exe" \n 執行exe檔後按下"Agree" \n 如果要在開機時自動執行程式，記得勾選左下角的"Run Zoomit when Windows starts"選項 \n 接著按ok或打x，視窗會縮進右下角的系統列中，若要更改設定，找到圖示並按下右鍵，找到"Options"，即可修改 \n \n \n 使用教學 \n 快捷鍵 \n 1.縮放:ctrl+1 \n 鼠標處會放大(滑鼠滾輪和鍵盤上下鍵可控制大小)，按左鍵一下會定住區域並進入書寫功能，退出按esc(滑鼠右鍵)即可。 \n \n 2.寫字:ctrl+2 \n 按下後即可在畫面上寫字。 \n 滑鼠滾輪和鍵盤上下鍵可控制線條粗細。(可能攸關按鍵設定問題?我的這兩個按鍵只能縮放畫面) \n \n 改變線條顏色: r(紅) 、 g(綠) 、 b(藍) 、 o(橘) 、 y(黃) 、 p(粉紅) \n \n 直線-按住shift \n 方塊-按住ctrl \n 圓圈-按住tab \n 箭頭-按住ctrl+shift \n \n 打字:按下T可打字，但 只能打英文 。 \n \n 背景顏色:預設顯示為目前背景，可按W切換為白板模式(全白)，按K黑板模式(全黑)。 \n \n 清除:ctrl+z，取消上一個動作，按E可清除全部書寫內容。 \n \n 保留畫面: \n ctrl+s，保存為圖片。 \n ctrl+c，copy到剪貼簿。 \n \n 3.休息:ctrl+3，出現倒數計時，表示可休息時間，滑鼠滾輪和和鍵盤上下鍵可調整時間，按esc可退出。 \n \n 4.放大鏡:ctrl+4，純放大功能，放大鼠標處，若要移動畫面，移動鼠標靠向畫面邊緣推移，按ctrl+4退出。 \n \n', 'tags': '', 'url': 'zoomit.html'}]};