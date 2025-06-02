export async function downloadProjectZip(config: {
  projectName: string;
  architecture: string;
  packageManager: string;
  buildTool: string;
}) {
  const response = await fetch("http://localhost:8000/api/generate-structure", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(config),
  });

  if (!response.ok) {
    throw new Error("Error generando el proyecto");
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${config.projectName}.zip`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
}
