const CLOSED = true;

if (CLOSED) {
  document.getElementById("root")!.innerHTML = `
    <div style="
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #050505;
      color: white;
      font-family: Arial, sans-serif;
      text-align: center;
    ">
      <div>
        <h1 style="font-size: 42px; margin-bottom: 12px;">
          R-STREAM
        </h1>
        <p style="font-size: 40px; color: #999;">
          SITE CLOSED
        </p>
      </div>
    </div>
  `;
} else {
  import("./index");
}
