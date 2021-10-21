import "./styles.css";

import queryString from "query-string";

import samplePDF from "./61112.pdf";

import SinglePagePDFViewer from "./components/singlepage";
import AllPagesPDFViewer from "./components/all-pages";
// Create styles

export default function App({ match, location }) {
  const query = queryString.parse(location.search);
  console.log(query.productId);
  const themeColor = "#000";
  const titleTextColor = "white";
  const appTitle = "실손보험 다이렉트";
  const customercenterEmail = "skglgk0897@daum.net";
  const customercenterTel = "";
  const customerName = "김수형";

  if (query.productId !== "3574a6948d") {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* 헤더 */}
        <div
          style={{
            width: "100%",
            height: "140px",
            backgroundColor: themeColor,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            fontSize: "24px",
            color: titleTextColor,
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            zIndex: "2"
          }}
        >
          <span style={{}}>{appTitle}</span>
        </div>
        {/* 바디 */}
        <div style={{ height: "140px" }} />

        <div
          style={{
            width: "100%",
            height: "40%",

            marginTop: "40px",

            marginLeft: "20px",

            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            margin: "0 0 0 0",
            fontSize: "16px"
          }}
        >
          <div style={{ fontSize: "24px" }}>
            <h3
              style={{
                marginTop: "440px",
                marginLeft: "20px",
                color: "black"
              }}
            >
              {`결과값이 없습니다. ${appTitle} 상품 설명서에 부착된 QR을 스캔해
              주세요`}
            </h3>
          </div>
        </div>
        {/* 푸터 */}
        <div
          style={{
            width: "100%",
            position: "fixed",
            bottom: "0px",

            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start	",
            justifyContent: "space-around",
            height: "15%",

            backgroundColor: themeColor,
            position: "fixed",
            bottom: "0px",
            left: "0px"
          }}
        >
          <div
            style={{
              width: "100%"
            }}
          ></div>
          <span
            style={{
              fontSize: "16px",
              marginLeft: "20px",
              color: titleTextColor
            }}
          >
            고객센터
          </span>
          <span
            style={{
              fontSize: "18px",
              marginLeft: "20px",
              color: titleTextColor
            }}
          >
            EMAIL: {customercenterEmail}
          </span>

          <span
            style={{
              fontSize: "16px",
              marginLeft: "20px",
              color: titleTextColor
            }}
          >
            상담시간 월-금 9:00~18:00
          </span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div
        style={{
          width: "100%",

          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* 헤더 */}
        <div
          style={{
            width: "100%",
            height: "140px",
            backgroundColor: themeColor,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            fontSize: "24px",
            color: titleTextColor,
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            zIndex: "2"
          }}
        >
          <span style={{}}>{appTitle}</span>
        </div>
        {/* 바디 */}
        <div style={{ height: "140px" }} />

        <AllPagesPDFViewer
          pdf={samplePDF}
          style={{ zIndex: "0", width: "100%" }}
        />

        <div style={{ width: "100%", height: "300px" }} />
        {/* 푸터 */}
      </div>
      <div
        style={{
          width: "100%",
          position: "fixed",
          bottom: "0px",

          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start	",
          justifyContent: "space-around",
          height: "15%",

          backgroundColor: themeColor,
          position: "fixed",
          bottom: "0px",
          left: "0px"
        }}
      >
        <div
          style={{
            width: "100%"
          }}
        ></div>
        <span
          style={{
            fontSize: "16px",
            marginLeft: "20px",
            color: titleTextColor
          }}
        >
          고객센터
        </span>
        <span
          style={{
            fontSize: "18px",
            marginLeft: "20px",
            color: titleTextColor
          }}
        >
          EMAIL: {customercenterEmail}
        </span>

        <span
          style={{
            fontSize: "16px",
            marginLeft: "20px",
            color: titleTextColor
          }}
        >
          상담시간 월-금 9:00~18:00
        </span>
      </div>
    </>
  );
}
