document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".risk-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Collect form data
    const formData = {
      vulnScan: form["vuln-scan"].value,
      acceptVuln: form["accept-vuln"].value,
      pentest: form["pentest"].value,
      riskAssessment: form["risk-assessment"].value,
      riskPriority: form["risk-priority"].value,
      irPlan: form["ir-plan"].value,
      securityBudget: form["security-budget"].value,
      vulnResolution: form["vuln-resolution"].value,
      lowProbThreat: form["low-prob-threat"].value,
      cyberInsurance: form["cyber-insurance"].value,
      riskMetrics: form["risk-metrics"].value,
    };

    console.log("📝 Risk Survey Submission:");
    console.log(formData);

    // Convert to CSV
    const headers = Object.keys(formData).join(",") + "\n";
    const values = Object.values(formData)
      .map(val => `"${val}"`)
      .join(",") + "\n";
    const csvContent = headers + values;

    // Create a downloadable blob
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Create a temporary download link
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "risk_survey.csv");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link);
  });
});
