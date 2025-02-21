export function timeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = Math.floor((now - past) / 1000);
  
    const units = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 }
    ];
  
    for (const unit of units) {
      const count = Math.floor(diffInSeconds / unit.seconds);
      if (count >= 1) {
        return `${count} ${unit.label}${count > 1 ? "s" : ""} ago`;
      }
    }
  
    return "just now";
  }
  
  // Example usage:
  console.log(timeAgo("2025-01-21T15:30:00Z")); // Output depends on the current date and time
  