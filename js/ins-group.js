const color = {
  "All": "transparent",
  "จันทร์": "rgba(244, 193, 82, 1)",
  "อังคาร": "rgba(244, 113, 181, 1)",
  "พุธ": "rgba(43, 212, 189, 1)",
  "พฤหัสบดี": "rgba(251, 145, 111, 1)",
  "ศุกร์": "rgba(58, 191, 248, 1)",
  "เสาร์": "rgba(130, 141, 248, 1)",
  "อาทิตย์": "rgba(251, 111, 132, 1)",
}

const groupClassDate = document.getElementById("group-class-date")

const day = (groupClassDate.innerText || "").split(",")[0]

groupClassDate.style.backgroundColor = `${color[day]}`