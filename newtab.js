document.addEventListener("DOMContentLoaded", () => {
  // Set up time and date
  updateTimeAndDate()
  setInterval(updateTimeAndDate, 1000)

  // Set up button listeners
  const yesButton = document.getElementById("yes-button")
  const noButton = document.getElementById("no-button")
  const suggestions = document.getElementById("suggestions")

  yesButton.addEventListener("click", () => {
    // Redirect to Google when user clicks "Not for this"
    window.location.href = "https://www.google.com"
  })

  noButton.addEventListener("click", () => {
    // Show AI suggestions and hide both buttons
    suggestions.classList.remove("hidden")
    yesButton.style.display = "none"
    noButton.style.display = "none"
  })
})

function updateTimeAndDate() {
  const now = new Date()

  // Update time
  const timeElement = document.getElementById("current-time")
  timeElement.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

  // Update date
  const dateElement = document.getElementById("current-date")
  const options = { weekday: "long", month: "long", day: "numeric" }
  dateElement.textContent = now.toLocaleDateString(undefined, options)
}
