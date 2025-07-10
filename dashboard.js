function showDetails(status) {
  document.getElementById("modalTitle").textContent = status + " Status";
  document.getElementById("modalBody").textContent = getDetailText(status);
  document.getElementById("modal").style.display = "block";

  // Optional: Animate progress
  const steps = document.querySelectorAll(".step");
  let statusIndex = {
    "Pending": 0,
    "In Review": 1,
    "Under Verification": 2,
    "Resolved": 3,
    "Rejected": 4
  }[status] || 0;

  steps.forEach((step, index) => {
    if (index <= statusIndex) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function getDetailText(status) {
  switch (status) {
    case "Pending":
      return "Your case has been successfully submitted and is waiting for review.";
    case "In Review":
      return "Your case is currently under administrative review.";
    case "Under Verification":
      return "Field officers are verifying land documents and boundaries.";
    case "Resolved":
      return "The dispute has been resolved. Please collect your resolution report.";
    case "Rejected":
      return "The case was rejected due to missing or invalid documents.";
    default:
      return "Status not recognized.";
  }
}
